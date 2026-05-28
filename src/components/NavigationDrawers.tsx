/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CircleX } from "lucide-react";

interface NavigationDrawersProps {
  handleClose: () => void;
}

const buttonsList = [
  { buttonName: "PROJECTS", buttonId: "projects" },
  { buttonName: "EXPERIENCE", buttonId: "experience" },
  { buttonName: "CONTACT", buttonId: "contact" },
];

export default function NavigationDrawers({
  handleClose,
}: NavigationDrawersProps) {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* 2. The Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* 3. The Navigation Bar */}
      <div className="relative w-64 bg-ide-surface-lowest border-r border-ide-border flex flex-col transition-colors duration-300 animate-slide-in h-full z-10 text-left pl-2 pt-2 pr-2">
        {" "}
        {/* Added pr-2 for right-side padding balance */}
        {/* Wrap the button in a flex container pushing content to the right */}
        <div className="flex justify-end w-full">
          <button
            className="hover:text-ide-primary p-1" // Added slight padding for a better click target
            onClick={() => {
              handleClose();
            }}
          >
            <CircleX />
          </button>
        </div>
        {buttonsList.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
