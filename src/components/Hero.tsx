/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Metric } from "../types";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const metricsList: Metric[] = [
  { value: "3+", label: "Years Experience" },
  { value: "Flutter + iOS", label: "Primary Focus" },
  { value: "15–20", label: "PRs per month" },
];

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      className="flex-grow p-6 md:p-12 transition-colors duration-300"
      id="introduction"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-ide-primary mb-4 text-[13px] tracking-[0.25em] uppercase"
        >
          Mobile Application Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-ide-text tracking-tight mb-6 leading-[1.1] text-left"
          id="hero-main-title"
        >
          Vaibhav Raj Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-xl md:text-2xl text-ide-text mb-4 font-semibold"
        >
          Mobile Application Developer (Flutter & iOS)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-sans text-lg text-ide-text-variant mb-8 max-w-3xl leading-relaxed text-left"
        >
          Jaipur, Rajasthan, India • vaibhavraj2316@gmail.com • +91-96720-28807
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button
            onClick={() => onScrollTo("contact")}
            className="bg-ide-primary hover:bg-ide-primary-btn text-white font-mono text-[12px] font-bold tracking-wider px-8 py-4 rounded-none transition-colors duration-300"
            id="btn-initialize-contact"
          >
            CONTACT ME
          </button>

          <button
            onClick={() => onScrollTo("experience")}
            className="border border-ide-border bg-transparent text-ide-text font-mono text-[12px] font-bold tracking-wider px-8 py-4 rounded-none hover:bg-ide-surface-low hover:border-ide-text transition-all duration-300"
            id="btn-view-repository"
          >
            VIEW EXPERIENCE
          </button>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricsList.map((m, index) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: "easeOut",
            }}
            className="metric-accent pl-6 py-4 ide-border-b border-ide-border transition-all duration-300 hover:bg-ide-surface-low"
            id={`metric-card-${index}`}
          >
            <div className="font-mono text-[48px] md:text-[54px] text-ide-text font-bold tracking-tight">
              {m.value}
            </div>
            <div className="font-mono text-[12px] text-ide-secondary font-semibold uppercase tracking-wider mt-1">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
