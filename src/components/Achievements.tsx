/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CertInterface {
  title: string;
  href: string;
}

const certifications: CertInterface[] = [
  {
    title: "Claude Code in Action",
    href: "https://verify.skilljar.com/c/aq37xxnotht9",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    href: "https://verify.skilljar.com/c/2gz9fnviar3y",
  },
  {
    title: "Uncover Your Transferable Skills with AI",
    href: "https://www.coursera.org/account/accomplishments/verify/7G1EU2QKGJ1N",
  },

  {
    title: "Plan Your Job Search with AI",
    href: "https://www.coursera.org/account/accomplishments/verify/GIJY7WBZI7KT",
  },
  {
    title: "Manage Your Job Applications with AI",
    href: "https://www.coursera.org/account/accomplishments/verify/UX2GKQ4NVTKG",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 ide-border-t px-6 py-12 md:px-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-ide-primary mb-3">
          Achievements
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-ide-text mb-8">
          Certifications and milestones worth highlighting.
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none border border-ide-border bg-ide-surface-lowest p-6 text-left transition-colors duration-300 hover:border-ide-primary hover:bg-ide-surface"
            >
              <h3 className="font-sans text-lg font-semibold text-ide-text mb-2">
                {cert.title}
              </h3>
              <p className="text-sm leading-7 text-ide-text-variant">
                Verified certification link.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
