/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

const projectsData: Project[] = [
  {
    id: "buddy-nation",
    title: "Buddy Nation",
    role: "iOS • Swift • Objective-C",
    description:
      "Multi-app iOS platform for hobby and interest-based communities. Maintained Swift–Objective-C interoperability for a large legacy codebase while introducing modern Swift features.",
    tech: ["Swift", "Objective-C", "UIKit", "CocoaPods"],
    image: "",
    alt: "Buddy Nation project",
    status: "No public links yet",
    metrics: [
      "15% load time reduction",
      "19% increase in user interaction rate",
    ],
  },
  {
    id: "medical-safety",
    title: "Medical Safety",
    role: "iOS • SwiftUI • UIKit",
    description:
      "Doctor-patient interaction platform connecting doctors and patients through REST APIs. Implemented new screens and custom UIKit views, and led an iOS 15 → iOS 14 minimum version migration.",
    tech: ["Swift", "SwiftUI", "UIKit", "Alamofire", "CocoaPods"],
    image: "",
    alt: "Medical Safety project",
    status: "No public links yet",
    metrics: [
      "iOS 15 → iOS 14 migration",
      "Version compatibility resolved for QA",
    ],
  },
  {
    id: "teeupalert",
    title: "TeeUpAlert",
    role: "iOS • Swift • Firebase",
    description:
      "Real-time asset and stock management app for golf retail stores. Implemented store-specific push notifications for live warehouse order status tracking.",
    tech: [
      "Swift",
      "UIKit",
      "Swift Package Manager",
      "Firebase Push Notifications",
    ],
    image: "",
    alt: "TeeUpAlert project",
    status: "No public links yet",
    metrics: [
      "Live warehouse order tracking",
      "Store-specific push notifications",
    ],
  },
  {
    id: "production-line-management",
    title: "Production Line Management System",
    role: "Flutter PWA • Dart • BLoC",
    description:
      "Role-based PWA for garment factory floor management with real-time issue logging, stakeholder tracking, and push notifications.",
    tech: ["Flutter", "Dart", "BLoC", "Dio", "Firebase Push Notifications"],
    image: "",
    alt: "Production Line Management System project",
    status: "No public links yet",
    metrics: [
      "21% drop in production delays",
      "25% improvement in issue resolution",
    ],
  },
  {
    id: "imedisave",
    title: "iMedisave",
    role: "Flutter PWA • Dart • Firebase",
    description:
      "Bulk medical supply ordering platform with discounted pricing, automated email order tracking, and Firebase backend. Led front-end delivery from internship through production.",
    tech: ["Flutter", "Dart", "Firebase Realtime Database", "Dio", "AWS"],
    image: "",
    alt: "iMedisave project",
    status: "No public links yet",
    metrics: ["31% increase in customer interaction", "Dev/prod builds on AWS"],
  },
  {
    id: "stockit",
    title: "StockIT",
    role: "Flutter PWA • Firebase",
    description:
      "Role-based wood stock management system using Firebase Realtime Database and Authentication for backend-free tracking and secure login.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Firebase Hosting",
    ],
    image: "",
    alt: "StockIT project",
    status: "No public links yet",
    metrics: ["10% improvement in operational efficiency"],
  },
];

export default function Projects() {
  return (
    <section
      className="ide-border-t transition-colors duration-300 scroll-mt-24"
      id="projects"
    >
      <div className="ide-border-b bg-ide-surface-lowest px-6 py-3 flex justify-between items-center transition-colors duration-300">
        <span className="font-mono text-[12px] text-ide-text-variant opacity-70">
          ./projects --active
        </span>
        <span className="font-mono text-[11px] text-ide-primary font-medium tracking-wide">
          {projectsData.length} PROJECTS
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {projectsData.map((item) => (
          <article
            key={item.id}
            className="ide-border-b ide-border-r p-6 sm:p-8 transition-colors duration-300 hover:bg-ide-surface-lowest"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="font-sans text-2xl font-bold text-ide-text">
                {item.title}
              </h3>
              <span className="font-mono text-[11px] text-ide-text-variant uppercase tracking-[0.2em]">
                {item.role}
              </span>
            </div>

            <p className="font-sans text-sm text-ide-text-variant leading-relaxed mb-5">
              {item.description}
            </p>

            {item.metrics && item.metrics.length > 0 && (
              <ul className="space-y-2 mb-5">
                {item.metrics.map((metric) => (
                  <li key={metric} className="font-sans text-sm text-ide-text">
                    • {metric}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-5">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="bg-ide-surface-high px-3 py-1 font-mono text-[11px] text-ide-text rounded border border-ide-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-sm font-mono text-ide-text-variant border-t border-ide-border pt-4">
              {item.status}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
