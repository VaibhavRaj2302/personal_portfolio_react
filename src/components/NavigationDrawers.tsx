/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CircleX } from "lucide-react";

interface NavigationDrawersProps {
  handleClose: () => void;
}

const buttonsList = [
  { buttonName: "SUMMARY", buttonId: "summary" },
  { buttonName: "PROJECTS", buttonId: "projects" },
  { buttonName: "EXPERIENCE", buttonId: "experience" },
  { buttonName: "ACHIEVEMENTS", buttonId: "achievements" },
  { buttonName: "SKILLS", buttonId: "skills" },
  { buttonName: "EDUCATION", buttonId: "education" },
  { buttonName: "CONTACT", buttonId: "contact" },
];

export default function NavigationDrawers({
  handleClose,
}: NavigationDrawersProps) {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="relative w-64 bg-ide-surface-lowest border-r border-ide-border flex flex-col transition-colors duration-300 h-full z-10 text-left p-3">
        <div className="flex justify-end w-full">
          <button className="hover:text-ide-primary p-1" onClick={handleClose}>
            <CircleX />
          </button>
        </div>
        {buttonsList.map((item) => (
          <button
            key={item.buttonId}
            onClick={() => {
              handleScrollTo(item.buttonId);
              handleClose();
            }}
            className="hover:text-ide-primary transition-colors uppercase tracking-wider p-2 text-left"
          >
            {item.buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}
