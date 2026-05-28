/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GitCommit, GitBranch, Terminal } from "lucide-react";
import { Experience } from "../types";

const experienceData: Experience[] = [
  {
    id: "sysquare",
    period: "March 2023 - Present",
    role: "Lead Software Developer",
    company: "Sysquare Technologies",
    description: "Leading cross-functional development teams in the creation of robust mobile and web solutions. Responsible for code quality, system architecture, and implementing performance optimization strategies that led to a 25% increase in app efficiency.",
    bullets: [
      "Spearheaded the migration to Flutter 3.0 for core products.",
      "Mentored junior developers in Swift best practices.",
      "Reduced build times by 40% through modular CI/CD pipelines."
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="ide-border-t transition-colors duration-300" id="experience">
      {/* git log toolbar */}
      <div className="ide-border-b bg-ide-surface-lowest px-6 py-3 flex justify-between items-center transition-colors duration-300">
        <span className="font-mono text-[12px] text-ide-text-variant opacity-70 flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 text-ide-primary" />
          git log --experience
        </span>
        <span className="font-mono text-[12px] text-ide-secondary font-medium tracking-wide">
          {experienceData.length} COMMIT FOUND
        </span>
      </div>

      <div className="p-6 md:p-12 text-left">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-8 border-l border-ide-border transition-colors duration-300"
          >
            {/* Timeline node */}
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-ide-primary rounded-full ring-4 ring-ide-bg transition-shadow"></div>

            {/* Header info bar */}
            <div className="mb-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-mono text-ide-secondary text-sm font-bold flex items-center gap-1">
                <GitCommit className="h-3.5 w-3.5 shrink-0" />
                {exp.period}
              </span>
              <span className="hidden md:block text-ide-border">|</span>
              <h4 className="font-sans text-xl font-bold text-ide-text">
                {exp.company}
              </h4>
              <span className="text-xs bg-ide-surface-high text-ide-text-variant px-2.5 py-0.5 rounded border border-ide-border font-mono font-medium md:ml-2">
                {exp.role}
              </span>
            </div>

            {/* Main paragraph */}
            <p className="font-sans text-base text-ide-text-variant mb-6 max-w-3xl leading-relaxed">
              {exp.description}
            </p>

            {/* Git bullets layout */}
            <ul className="space-y-2.5 font-mono text-ide-text-variant text-sm pl-1">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-ide-primary font-bold shrink-0 select-none">&gt;</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
