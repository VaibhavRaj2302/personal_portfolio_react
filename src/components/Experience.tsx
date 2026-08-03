/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GitCommit, GitBranch } from "lucide-react";
import { Experience } from "../types";

const experienceData: Experience[] = [
  {
    id: "sysquare",
    period: "March 2023 – Present",
    role: "Associate Software Developer (Flutter & iOS)",
    company: "Sysquare Technologies Pvt. Ltd.",
    description: "Jaipur, India",
    bullets: [
      "Lead front-end Flutter developer and sole iOS developer across multiple concurrent client projects, owning the full development lifecycle from Figma design review to App Store, Play Store, and production server release.",
      "Developed and maintained Buddy Nation (iOS) using Swift and Objective-C with full interoperability between a modern Swift layer and a large legacy Objective-C codebase; reduced app load time by 15% and increased in-app user interaction by 19%.",
      "Built new features for Medical Safety (iOS) using SwiftUI and UIKit, integrating RESTful APIs via Alamofire; led the iOS 15 → iOS 14 minimum build version migration, resolving version-specific compatibility issues to meet third-party QA vendor requirements.",
      "Led front-end development of a Flutter/Dart PWA for production line management, implementing BLoC state management and Firebase Push Notifications; reduced production delays by 21% and improved issue resolution by 25%.",
      "Delivered iMedisave Flutter PWA for bulk medical supply ordering with Dio RESTful API integration and email order notifications; deployed dev and production builds on AWS for client demos and QA cycles; increased customer interaction by 31%.",
      "Maintained 4+ Git/GitHub repositories; managed 15–20 pull requests monthly with feature branching and zero-conflict merge workflows; implemented GitHub Actions CI/CD across Flutter and iOS projects.",
      "Conducted code reviews and mentored junior associates on Swift and Flutter best practices.",
      "Participated in sprint planning with clients and internal management, translating requirements into task estimates under Agile/Scrum.",
    ],
  },
  {
    id: "sysquare_intern",
    period: "August 2022 – February 2023",
    role: "Software Developer Intern",
    company: "Sysquare Technologies Pvt. Ltd.",
    description: "Jaipur, India",
    bullets: [
      "Developed the iMedisave Flutter application end-to-end — a bulk medical supply ordering PWA backed by Firebase Realtime Database — delivered to the client.",
      "Built StockIT, a Flutter PWA for wood stock management using Firebase Realtime Database and Firebase Authentication; improved operational efficiency by 10%; hosted on Firebase Hosting.",
      "Implemented internationalization (i18n) on the company's official website for multi-language support.",
      "Participated in sprint planning, following Agile methodologies to deliver tasks per commitment.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      className="ide-border-t transition-colors duration-300 scroll-mt-24"
      id="experience"
    >
      <div className="ide-border-b bg-ide-surface-lowest px-6 py-3 flex justify-between items-center transition-colors duration-300">
        <span className="font-mono text-[12px] text-ide-text-variant opacity-70 flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 text-ide-primary" />
          experience
        </span>
        <span className="font-mono text-[12px] text-ide-secondary font-medium tracking-wide">
          {experienceData.length} ROLES
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
            className="relative pl-8 border-l border-ide-border transition-colors duration-300 pb-8"
          >
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-ide-primary rounded-full ring-4 ring-ide-bg transition-shadow"></div>

            <div className="mb-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-10">
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

            <p className="font-sans text-base text-ide-text-variant mb-6 max-w-3xl leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-2.5 font-sans text-ide-text-variant text-sm pl-1 leading-7">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-ide-primary font-bold shrink-0 select-none">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
