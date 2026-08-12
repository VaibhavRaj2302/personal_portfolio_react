/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 ide-border-t px-6 py-12 md:px-12 md:py-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-ide-primary mb-3">
          Education
        </p>
        <div className="rounded-none border border-ide-border bg-ide-surface-lowest p-6 md:p-8">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-ide-text mb-3">
            Manipal University Jaipur
          </h2>
          <p className="font-sans text-lg text-ide-text-variant mb-2">
            Bachelor of Computer Applications (BCA)
          </p>
          <p className="font-mono text-sm text-ide-text-variant">
            July 2019 – August 2022
          </p>
        </div>
      </div>
    </section>
  );
}
