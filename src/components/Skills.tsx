/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "Flutter",
      "Dart",
      "Swift",
      "Objective-C",
      "JavaScript",
      "ReactJS",
      "Node.js",
    ],
  },
  {
    title: "State Management",
    items: ["BLoC", "flutter_bloc", "Provider", "Redux"],
  },
  {
    title: "Networking",
    items: [
      "REST API integration",
      "Dio",
      "Alamofire",
      "Futures & async/await",
    ],
  },
  {
    title: "Package Management",
    items: ["CocoaPods", "Swift Package Manager", "pub.dev", "npm"],
  },
  {
    title: "Firebase",
    items: [
      "Realtime Database",
      "Push Notifications",
      "Authentication",
      "Hosting",
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      "VS Code",
      "Android Studio",
      "Xcode",
      "Git/GitHub",
      "AWS",
      "TestFlight",
    ],
  },
  {
    title: "Testing & DevOps",
    items: [
      "Flutter unit/widget testing",
      "XCTest",
      "GitHub Actions",
      "PR management",
    ],
  },
  {
    title: "Architecture & Methodology",
    items: [
      "OOP",
      "SOLID",
      "MVC",
      "MVVM",
      "Clean Architecture",
      "Agile",
      "Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 ide-border-t px-6 py-12 md:px-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-ide-primary mb-3">
          Skills
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-ide-text mb-8">
          A practical stack for shipping production mobile work.
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-none border border-ide-border bg-ide-surface-lowest p-5"
            >
              <h3 className="font-sans text-lg font-semibold text-ide-text mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm leading-7 text-ide-text-variant">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
