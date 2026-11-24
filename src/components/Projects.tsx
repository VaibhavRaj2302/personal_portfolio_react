/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

const projectsData: Project[] = [
  {
    id: "buddy-nation",
    title: "Buddy Nation",
    role: "iOS Developer • Swift • Objective-C",
    ownership: "Core Contributor • Collaborative Team",
    description:
      "Collaborated with senior iOS engineers on a multi-app platform for hobby and interest-based communities. Focused on modernizing legacy Objective-C modules with Swift, building reusable UI components, and maintaining a centralized networking layer.",
    tech: ["Swift", "Objective-C", "UIKit", "Alamofire", "GCD", "CocoaPods"],
    image: "",
    alt: "Buddy Nation project",
    metrics: [
      "Contributed to a 15% reduction in app load time and a 19% increase in user interaction rate.",
      "Modernized legacy modules via Swift–Objective-C interoperability, reducing overall codebase size by 5%.",
      "Built reusable Swift custom views and Auto Layout / XIB screens to standardize UI across multiple flows.",
      "Implemented Grand Central Dispatch (GCD) for background API calls and state updates without blocking the main UI thread.",
      "Co-developed a centralized Alamofire API layer with request interceptors for authentication and user authorization.",
    ],
  },
  {
    id: "medical-safety",
    title: "Medical Safety",
    role: "iOS Developer • SwiftUI • UIKit",
    ownership: "Core Contributor • Collaborative Team",
    description:
      "Collaborated with senior iOS developers on a doctor–patient communication platform backed by REST APIs. Built custom SwiftUI and UIKit views, integrated backend services, and supported the deployment target migration from iOS 15 to iOS 14.",
    tech: ["Swift", "SwiftUI", "UIKit", "Alamofire", "CocoaPods"],
    image: "",
    alt: "Medical Safety project",
    metrics: [
      "Assisted with minimum deployment target migration from iOS 15 to iOS 14, resolving version compatibility issues for QA.",
      "Integrated RESTful APIs using Alamofire for reliable doctor–patient data synchronization.",
      "Bridged UIKit and SwiftUI components to deliver custom, responsive clinical interfaces.",
    ],
  },
  {
    id: "teeupalert",
    title: "TeeUpAlert",
    role: "iOS Developer • Swift • Firebase",
    ownership: "Sole Developer • End-to-End Delivery",
    description:
      "Owned architecture, development, testing, and deployment of a real-time asset and inventory management iOS app for golf retail stores, featuring store-specific push notifications for live warehouse order tracking.",
    tech: [
      "Swift",
      "UIKit",
      "Swift Package Manager",
      "Firebase Push Notifications",
    ],
    image: "",
    alt: "TeeUpAlert project",
    metrics: [
      "Built and deployed live warehouse order status tracking across retail store locations from scratch.",
      "Implemented targeted, store-specific push notifications via Firebase Cloud Messaging.",
    ],
  },
  {
    id: "production-line-management",
    title: "Production Line Management System",
    role: "Flutter Developer • Dart • BLoC",
    ownership: "Sole Developer • End-to-End Delivery",
    description:
      "Owned full-lifecycle development and deployment of a role-based Progressive Web App for garment factory floor management, featuring real-time issue logging, stakeholder tracking, and automated push alerts.",
    tech: ["Flutter", "Dart", "BLoC", "Dio", "Firebase Push Notifications"],
    image: "",
    alt: "Production Line Management System project",
    metrics: [
      "Reduced factory floor production delays by 21% through real-time bottleneck visibility.",
      "Improved issue resolution speed by 25% with role-based stakeholder alerts and tracking.",
    ],
  },
  {
    id: "imedisave",
    title: "iMedisave",
    role: "Flutter Developer • Dart • Firebase",
    ownership: "Sole Developer • End-to-End Delivery",
    description:
      "Owned end-to-end front-end development, bug fixing, and production deployment on AWS for a bulk medical supply ordering platform featuring tiered discount pricing, automated email order tracking, and a Firebase backend.",
    tech: ["Flutter", "Dart", "Firebase Realtime Database", "Dio", "AWS"],
    image: "",
    alt: "iMedisave project",
    metrics: [
      "Drove a 31% increase in customer interaction across bulk ordering workflows.",
      "Configured, deployed, and maintained separate development and production build pipelines on AWS.",
    ],
  },
  {
    id: "stockit",
    title: "StockIT",
    role: "Flutter Developer • Dart • Firebase",
    ownership: "Core Contributor • Collaborative Team",
    description:
      "Collaborated with senior developers on a role-based timber inventory and stock management PWA powered by Firebase Realtime Database, Authentication, and Hosting for serverless tracking and access control.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Firebase Hosting",
    ],
    image: "",
    alt: "StockIT project",
    metrics: [
      "Contributed to a 10% improvement in warehouse operational efficiency through real-time stock tracking.",
      "Implemented role-based authentication and serverless data synchronization using Firebase.",
    ],
  },
  {
    id: "handheld-2.0",
    title: "PGTASS",
    role: "React Native Developer • Firebase • Okta SSO",
    ownership: "Sole Developer • End-to-End Delivery",
    description:
      "Owned end-to-end migration, architecture, bug fixing, and deployment of a cross-platform warehouse and asset management application built for PGA and its sponsors to track orders and manage inventory.",
    tech: [
      "React Native",
      "JavaScript",
      "Firebase Push Notifications",
      "Okta SSO",
      "Zustand",
      "Axios",
    ],
    image: "",
    alt: "PGTASS handheld warehouse management project",
    metrics: [
      "Migrated a legacy native Android app end-to-end to a unified React Native codebase while preserving UI parity and core features.",
      "Architected the app using Feature-Driven Architecture to decouple modules and accelerate future developer onboarding.",
      "Built a reusable UI component library and integrated Okta SSO authentication for enterprise warehouse access.",
    ],
  },
  {
    id: "zipang-app",
    title: "Zipang",
    role: "React Native Developer • Firebase • Branch.io",
    ownership: "Core Contributor • Collaborative Team",
    description:
      "Collaborated with senior engineers to build the mobile companion app for the My Auction platform, implementing real-time auction push notifications, deep-linked sharing, and reusable UI components.",
    tech: [
      "React Native",
      "Branch.io",
      "Firebase Push Notifications",
      "Redux",
      "Axios",
    ],
    image: "",
    alt: "Zipang auction mobile app project",
    metrics: [
      "Helped achieve 12% higher user retention compared to the My Auction web application.",
      "Integrated Branch.io deep linking to route shared auction links directly to in-app listings.",
      "Implemented real-time Firebase push alerts for live bid updates and reusable UI components for faster iteration.",
    ],
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
                  <li
                    key={String(metric)}
                    className="font-sans text-sm text-ide-text"
                  >
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

            {item.status && (
              <div className="text-sm font-mono text-ide-text-variant border-t border-ide-border pt-4">
                <a href={item.status} target="_blank">
                  link
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
