/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ide-border-t bg-ide-surface-lowest transition-colors duration-300 mt-16 md:mt-32">
      <div className="flex flex-col items-center gap-8 py-12 px-6 max-w-7xl mx-auto text-center">
        <div className="flex flex-wrap gap-6 justify-center font-mono text-[12px] font-bold text-ide-text-variant">
          <a
            className="hover:text-ide-primary underline decoration-ide-border hover:decoration-ide-primary transition-all duration-300"
            href="https://github.com/VaibhavRaj2302"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
          >
            GitHub
          </a>
          <a
            className="hover:text-ide-primary underline decoration-ide-border hover:decoration-ide-primary transition-all duration-300"
            href="https://linkedin.com/in/vaibhav-r-466063298"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-ide-primary underline decoration-ide-border hover:decoration-ide-primary transition-all duration-300 flex items-center gap-1"
            href="mailto:vaibhavraj2316@gmail.com"
            id="footer-email"
          >
            <Mail className="h-3 w-3 inline shrink-0" />
            Email
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="font-mono text-[11px] text-ide-text-variant hover:text-ide-primary border border-ide-border hover:border-ide-primary px-3 py-1.5 flex items-center gap-1.5 transition-all group"
          id="btn-back-to-top"
        >
          <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          BACK_TO_TOP
        </button>

        <div className="font-sans text-sm text-ide-text-variant opacity-70 text-center">
          <span>
            &copy; {new Date().getFullYear()} Vaibhav Raj Singh. Built for
            performance.
          </span>
        </div>
      </div>
    </footer>
  );
}
