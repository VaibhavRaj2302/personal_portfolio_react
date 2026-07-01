/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Project } from "../types";

// Standard projects dataset matching the user's specific assets and content
const projectsData: Project[] = [
  {
    id: "bude-nation",
    title: "Bud-e Nation",
    role: "LEAD_IOS",
    description:
      "A native iOS app where I led the migration of legacy Objective-C modules to Swift without breaking existing functionality — while shipping new features in parallel. Built on a Core Data offline-first architecture so the app stays usable with zero connectivity.",
    tech: ["SWIFT", "UIKIT", "CORE_DATA", "OBJECTIVE-C", "FIREBASE", "MVVM"],
    image: "REPLACE_WITH_REAL_SCREENSHOT_1",
    alt: "Bud-e Nation iOS app interface showing core user flow.",
    status: "STATUS: DEPLOYED", // TODO: confirm — if this is wrong, fix it, don't leave it guessed
    links: undefined,
    metrics: [
      "TODO: e.g. 'Cut crash rate by X% after Crashlytics-driven triage'",
      "TODO: e.g. 'Reduced offline sync conflicts via idempotent background jobs'",
    ],
    details: [
      "Led interoperability between new Swift modules and legacy Objective-C code, avoiding a costly full rewrite.",
      "Designed Core Data relational schemas for fast, reliable offline caching.",
      "Built multi-threaded background sync with idempotency keys to prevent duplicate writes on flaky networks.",
      "Used Firebase Crashlytics to identify and prioritize the highest-impact stability issues.",
      "Built UI with programmatic constraints and custom UIKit components — no Storyboards, for easier code review and merge conflict resolution.",
    ],
  },
  {
    id: "jc-web",
    title: "JC-Web",
    role: "LEAD_FLUTTER",
    description:
      "A communication platform for garment manufacturing floors, built to replace informal WhatsApp/phone-call coordination between floor managers, admins, and third-party stitching vendors. Real-time issue escalation and job tracking replace what used to be lost in group chats and missed calls.",
    tech: ["FLUTTER", "DART", "FIREBASE", "REST_API", "BLoC"],
    image: "REPLACE_WITH_REAL_SCREENSHOT_2",
    alt: "JC-Web dashboard showing factory floor issue tracking and job allocation.",
    status: "STATUS: DEPLOYED",
    links: undefined,
    metrics: [
      "TODO: e.g. 'Reduced average issue-to-resolution time from X hours to Y'",
      "TODO: e.g. 'Onboarded N stitching vendors onto the partner portal'",
    ],
    details: [
      "Built a responsive Flutter web app used across desktop and floor-tablet devices with one shared codebase.",
      "Used BLoC to keep business logic testable and decoupled from UI, easing onboarding of new contributors.",
      "Integrated Firebase push notifications so design changes and critical delays reach the right people instantly instead of getting buried in chat threads.",
      "Deployed via Firebase Hosting for fast iteration — new features ship without a release-cycle bottleneck.",
      "Optimized rendering to hold steady frame rates even with heavy image/text layering on lower-end factory-floor tablets.",
    ],
  },
  {
    id: "imedisave",
    title: "iMedisave",
    role: "LEAD_FLUTTER",
    description:
      "A healthcare logistics platform connecting medical supply requests with available inventory in real time. Built as a installable PWA so field staff get an app-like experience without needing app store distribution or updates.",
    tech: ["FLUTTER", "DART", "REST_API", "PWA"],
    image: "REPLACE_WITH_REAL_SCREENSHOT_3",
    alt: "iMedisave interface showing real-time medical supply and inventory data.",
    status: "TODO: confirm actual status",
    links: undefined,
    metrics: ["TODO: e.g. 'Reduced supply request response time from X to Y'"],
    details: [
      "Built a single responsive UI that works across mobile and desktop without device-specific branches.",
      "Integrated with a Node.js backend over REST to keep supply/demand data current in real time.",
      "Shipped as a PWA — installable on the home screen, works offline-first, no app store review cycle for updates.",
    ],
  },
  {
    id: "teeup-alert",
    title: "Tee Up Alert",
    role: "LEAD_IOS",
    description:
      "A warehouse asset and inventory management app built for PGTA to replace manual stock checks with real-time, location-aware notifications — cutting the daily back-and-forth between warehouse floor and office.",
    tech: ["SWIFT", "FIREBASE", "REST_API", "SPM", "MVVM"],
    image: "REPLACE_WITH_REAL_SCREENSHOT_4",
    alt: "Tee Up Alert warehouse inventory app showing real-time stock alerts.",
    status: "STATUS: DEPLOYED",
    links: undefined,
    metrics: [
      "TODO: e.g. 'Reduced manual stock-check time by X% across N warehouses'",
    ],
    details: [
      "Architected with MVVM and SOLID principles from day one for a codebase that stayed maintainable as the team grew.",
      "Migrated dependency management to Swift Package Manager, dropping CocoaPods for faster builds and simpler upgrades.",
      "Built warehouse-specific login so notifications are scoped to the right location's stock and shipment events.",
      "Used push notifications to replace manual phone/radio check-ins between warehouse staff and management.",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const handleOpenInspector = (project: Project) => {
    setSelectedProject(project);
    setActiveFileIndex(0);
  };

  return (
    <section
      className="ide-border-t transition-colors duration-300"
      id="projects"
    >
      {/* Active project toolbar tab */}
      <div className="ide-border-b bg-ide-surface-lowest px-6 py-3 flex justify-between items-center transition-colors duration-300">
        <span className="font-mono text-[12px] text-ide-text-variant opacity-70">
          ./projects --active
        </span>
        <span className="font-mono text-[11px] text-ide-primary font-medium tracking-wide">
          {projectsData.length} TARGETS CONFIGURED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Project 1: Bud-e Nation (Double width 8 cols) */}
        {projectsData.map((item) => {
          return (
            <div
              onClick={() => handleOpenInspector(item)}
              className="md:col-span-8 ide-border-r ide-border-b p-6 sm:p-8 group relative overflow-hidden transition-colors duration-300 cursor-pointer hover:bg-ide-surface-lowest"
              id="project-bude-nation"
            >
              <div className="absolute top-4 right-4 font-mono text-[11px] text-ide-text-variant opacity-50 font-bold tracking-wider">
                {item.role}
              </div>
              <div className="flex flex-col h-full justify-between">
                <div className="text-left">
                  <h3 className="font-sans text-2xl font-bold text-ide-text mb-4 transition-colors group-hover:text-ide-primary">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-ide-text-variant max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-ide-surface-high px-3 py-1 font-mono text-[11px] text-ide-text rounded border border-ide-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 overflow-hidden ide-border group">
                {/* <img
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                /> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
