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
      "Leading the architectural implementation of next-gen mobile interactions on iOS platforms with Swift and Objective-c code interoperatibility",
    tech: [
      "SWIFT",
      "UIKIT",
      "CORE_DATA",
      "OBJECTIVE-C",
      "COCOA_PODS",
      "COCOA_TOUCH",
      "PODS",
      "SINGLETON_PATTERN",
      "FIREBASE_PUSH_NOTIFICATIONS",
      "FIREBASE_CRASHLYTICS",
      "MVVM",
      "MVC",
      "SOLID_ARCHITECTURE",
      "REST_API",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC341OtDdaZLxogHAcm14JT1k7UwxEsjnsEXQLUhH27oTWOK_d37eM36BQiiN5wdPX8o-TtYEHf5KzqtKUvkjlXtZJ7K0ankZTgQt9qyIoxMp1PFldtn6ht6RG7Kp8c0Scc9XuTbDrBmliotmcw86312QEViOfcZh8NmHNpRtGOWGre-SRFBG_tDh6SMKaH9LMEg73-jG_oLFJWQStyTRNCHXKXHR6A01UX8EkD12MRN4OGbaip41rh75OUnIEV6ffwG5COOJr8gVU",
    alt: "A clean, high-contrast mobile interface design displayed on a sleek smartphone.",
    details: [
      "Writting and implementing new Views, Models and their View Models in Swift",
      "Handled the integation of New Swift code with old Objective-c code for better interoperability",
      "Creating dynamic UI using UIKIT components for better UI/UX experience",
      "Designed and refined modular Core Data relational schemas supporting lightning-fast offline cache mechanics.",
      "Engineered multi-threaded background synchronization services with reliable idempotency keys.",
      "Constructed fluid programmatic view constraints utilizing custom UIKit components and CoreAnimation layers.",
    ],
  },
  {
    id: "jc-web",
    title: "JC-Web",
    role: "LEAD_FRONTEND_FLUTTER",
    description: `JC is a streamlined communication and workflow management platform
      built specifically for garment/cloths manufacturing and stitching ecosystems. 
      The app serves as a centralized hub connecting floor managers, senior administrators,
      and third-party stitching vendors to eliminate production bottlenecks. It enables
      users to instantly report fabric or machinery issues, escalate critical delays to 
      admins, and broadcast vital design updates in real time using push notification. 
      Additionally, JC features a dedicated portal for stitching partners, allowing for 
      seamless job allocation, clear communication, and end-to-end production tracking 
      from the factory floor to final delivery.`,
    tech: [
      "FLUTTER",
      "DART",
      "PWA",
      "FIREBASE_PUSH_NOTIFICATION",
      "REST_API",
      "MVVM",
      "BLoC",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0MYp9FBDmqJbkmuV4vCvhBcDOAC2YXF6dGqmpKuAEFzK3zRQ0H6dBmbL2j3oz6UAFClPFx3AUB40p1144wxQPJsmo2A7WCKxuwMb6j6zivTP5rm1Tsyfdn-7DZcQxZzud2YsOnWMwxHybTYB79cuXKLSOwrzSL2qksoy8eqR017T9zS2F2XF1cbYCeplSFAdz0p9TDEYb9Xc8Qi587NXXl9jdvDpzF7eJICER2f1kAiwrXxLJKj_LadYbr0DV5gAJj2lWPgcrAI",
    alt: "Focused close-up of code on a monitor.",
    status: "STATUS: DEPLOYED",
    details: [
      "Engineered a fully responsive layout mapping canvas drawing contexts directly onto target browser viewports using Flutter.",
      "Optimized paint intervals to retain consistent 60fps scrolling efficiency under heavy text/image layering.",
      "Integrated Firebase push notifications for real time notifications for better communications between the users in the work environment.",
      "Implemented Business logic component (BLoC) for flutter for better development cycle and easy integration of new features.",
      "Fire base hosting for deploying web build so the webpages have maximum uptime without any problems faced on conventional methods and easy and fast build deployment for new features.",
    ],
  },
  {
    id: "imedisave",
    title: "iMedisave",
    role: "LEAD_FLUTTER",
    description:
      "Healthcare management platform focused on variety, speed, and intuitive user workflows. Engineered to handle high-frequency data updates with zero lag and providing medical supplies to the one that needs the most.",
    tech: ["FLUTTER", "DART", "REST_API"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGRkaRFCpPUI1T_dXWSuoP87sDzFdfAgBhbZYAQpQ2QbNtAjHHcJDhZj1A9kPL71VPe7Fz2qza14zeOymj8cB2iWLgsGRjQpd9KmcOebQ3C-Xapp45q7VRgtlwj07H-tJOxZKzaoeDaSijVwevgx6lYTYl5g6uRoVBwS26qDx-RFNzWFNpLiApVOAeUWmMw1O7kKwIl246NPGUwQ1ztvLBA970PHzUsLqS1R1ugoIzHwGh7PvqfUv7s5TUem0j9uazKK1iQkQOfOc",
    alt: "Medical data visualization on a tablet screen.",
    details: [
      "Created custom UI for mobile and desktop for ease of use, irrespective of user device.",
      "Integrated RESTful API from Node JS back end service for providing real time data to the user.",
      "Progressive web application (PWA) implementation so the user can use the web application as a App rather then as a web application.",
    ],
  },
  {
    id: "teeup-alert",
    title: "Tee Up Alert",
    role: "LEAD_IOS",
    description:
      "PGTA needed a straightforward iOS solution to make their large-scale warehouse asset and inventory management hassle-free. Our app stepped in to fill that gap, delivering intuitive features that made the daily workflow much easier for the team while significantly boosting overall business productivity.",
    tech: [
      "SWIFT",
      "FIREBASE_PUSH_NOTIFICATION",
      "REST_API",
      "SWIFT_PACKAGE_MANAGER",
      "MVVM",
      "SINGLETON_PATTERN",
      "GITHUB_ACTIONS",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGRkaRFCpPUI1T_dXWSuoP87sDzFdfAgBhbZYAQpQ2QbNtAjHHcJDhZj1A9kPL71VPe7Fz2qza14zeOymj8cB2iWLgsGRjQpd9KmcOebQ3C-Xapp45q7VRgtlwj07H-tJOxZKzaoeDaSijVwevgx6lYTYl5g6uRoVBwS26qDx-RFNzWFNpLiApVOAeUWmMw1O7kKwIl246NPGUwQ1ztvLBA970PHzUsLqS1R1ugoIzHwGh7PvqfUv7s5TUem0j9uazKK1iQkQOfOc",
    alt: "Medical data visualization on a tablet screen.",
    details: [
      "The initial project setup utilizes the MVVM architecture while strictly adhering to SOLID design principles for clean, maintainable code.",
      "Integrated third-party dependencies using Swift Package Manager (SPM) to ensure a streamlined project structure and a future-proof alternative to CocoaPods.",
      "Developed the application for PGTA to efficiently manage inventory, assets, and stock across their extensive warehouse network.",
      "Implemented a warehouse-specific login system, allowing the app to trigger localized notifications based on real-time stock levels and incoming shipments.",
      "Leveraged Push Notifications to deliver instant updates on stock and asset status, significantly reducing manual follow-ups and improving team coordination on the warehouse floor.",
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
