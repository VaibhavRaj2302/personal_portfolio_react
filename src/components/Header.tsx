/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Terminal, PanelRightOpen } from "lucide-react";
import useAuthStore from "../store/useAuthStore";
import { Navigate, useNavigate } from "react-router-dom";

export type NavItemType =
  | "summary"
  | "projects"
  | "experience"
  | "achievements"
  | "skills"
  | "education"
  | "contact"
  | "admin";

export interface NavItems {
  id: NavItemType;
  label: string;
}

interface HeaderProps {
  onScrollTo: (id: string) => void;
  showDrawerOption: boolean;
  openDrawer: (open: boolean) => void;
}

export default function Header({
  onScrollTo,
  showDrawerOption,
  openDrawer,
}: HeaderProps) {
  const { isAuthenticated } = useAuthStore();

  const navigator = useNavigate();

  const navItems: NavItems[] = [
    { id: "summary", label: "SUMMARY" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "skills", label: "SKILLS" },
    { id: "education", label: "EDUCATION" },
    { id: "contact", label: "CONTACT" },
    ...(isAuthenticated ? [{ id: "admin" as const, label: "Admin" }] : []),
  ];

  return (
    <header className="fixed top-0 w-full bg-ide-bg/90 backdrop-blur-md z-50 ide-border-b transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex gap-2">
          {showDrawerOption && (
            <button
              onClick={() => {
                openDrawer(true);
              }}
              className="p-0 rounded hover:bg-ide-surface-low transition-colors text-ide-text-variant hover:text-ide-primary"
              aria-label="Open navigation"
              id="theme-toggle"
            >
              {<PanelRightOpen />}
            </button>
          )}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 cursor-pointer group"
            id="header-logo"
          >
            <Terminal className="text-ide-primary h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="font-mono text-base font-bold text-ide-text tracking-tight">
              vaibhav.dev
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 xl:gap-8 font-mono text-[12px] font-semibold text-ide-text-variant scroll-smooth">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  switch (item.id) {
                    case "admin":
                      navigator("/admin");
                      break;

                    default:
                      onScrollTo(item.id);
                      break;
                  }
                }}
                className="hover:text-ide-primary transition-colors uppercase tracking-wider"
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-ide-surface-low rounded-full border border-ide-border transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[11px] text-emerald-500 font-medium">
              Available
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
