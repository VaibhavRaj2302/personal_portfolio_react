/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Summary() {
  return (
    <section id="summary" className="ide-border-t px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-ide-primary mb-3">
            Summary
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-ide-text mb-5">
            Production-minded mobile engineer with a strong shipping record.
          </h2>
          <p className="font-sans text-lg leading-8 text-ide-text-variant">
            Mobile Application Developer with 3+ years of professional
            experience building and deploying cross-platform and native mobile
            applications using Flutter, Dart, Swift, Objective-C, UIKit, and
            SwiftUI. Proficient in BLoC and Provider state management,
            Swift–Objective-C interoperability, RESTful API integration via Dio
            and Alamofire, XCTest and Flutter unit/widget testing, and
            dependency management using CocoaPods and Swift Package Manager
            (SPM).
          </p>
        </div>

        <div className="rounded-none border border-ide-border bg-ide-surface-lowest p-6 md:p-8">
          <h3 className="font-sans text-xl font-semibold text-ide-text mb-4">
            What I bring to delivery
          </h3>
          <ul className="space-y-3 text-sm leading-7 text-ide-text-variant">
            <li>• Experienced in iOS version compatibility and migration.</li>
            <li>
              • Managed CI/CD pipelines with GitHub Actions and shipped to App
              Store, Play Store, and Firebase Hosting.
            </li>
            <li>
              • Delivered production-grade applications from Figma design specs
              to live release.
            </li>
            <li>
              • Follow Agile and Scrum with hands-on code review, mentoring,
              sprint planning, and client meetings.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
