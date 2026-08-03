/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="ide-border-t transition-colors duration-300 scroll-mt-24"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-6 md:p-12 ide-border-r bg-ide-surface-lowest transition-colors duration-300 text-left">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-ide-primary mb-3">
            Contact
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-ide-text mb-6">
            Interested in mobile delivery, iOS work, or Flutter product builds.
          </h2>
          <p className="font-sans text-base text-ide-text-variant mb-10 leading-relaxed max-w-xl">
            I enjoy working across mobile product delivery, from design handoff
            and implementation to testing, deployment, and release support.
            Reach out for a conversation about your next mobile app or product
            iteration.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:vaibhavraj2316@gmail.com"
              className="flex items-center gap-4 group text-ide-text hover:text-ide-primary transition-colors"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span className="font-mono text-base font-semibold">
                vaibhavraj2316@gmail.com
              </span>
            </a>

            <a
              href="tel:+919672028807"
              className="flex items-center gap-4 group text-ide-text hover:text-ide-primary transition-colors"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span className="font-mono text-base font-semibold">
                +91-96720-28807
              </span>
            </a>

            <div className="flex items-center gap-4 text-ide-text">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="font-mono text-base font-semibold">
                Jaipur, Rajasthan, India
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-12 bg-ide-bg transition-colors duration-300 text-left">
          <h3 className="font-sans text-2xl font-bold text-ide-text mb-5">
            Profile links
          </h3>
          <div className="space-y-4">
            <a
              href="https://github.com/VaibhavRaj2302"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-none border border-ide-border p-4 hover:bg-ide-surface-low transition-colors"
            >
              <Github className="h-5 w-5 shrink-0 text-ide-primary" />
              <span className="font-mono text-sm font-semibold">
                github.com/VaibhavRaj2302
              </span>
            </a>
            <a
              href="https://linkedin.com/in/vaibhav-r-466063298"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-none border border-ide-border p-4 hover:bg-ide-surface-low transition-colors"
            >
              <Linkedin className="h-5 w-5 shrink-0 text-ide-primary" />
              <span className="font-mono text-sm font-semibold">
                linkedin.com/in/vaibhav-r-466063298
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
