/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CircleX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItems } from "./Header";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface NavigationDrawersProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function NavigationDrawers({
  isOpen,
  handleClose,
}: NavigationDrawersProps) {
  const { isAuthenticated } = useAuthStore();

  const navigate = useNavigate();

  const buttonsList: NavItems[] = [
    { label: "SUMMARY", id: "summary" },
    { label: "PROJECTS", id: "projects" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "ACHIEVEMENTS", id: "achievements" },
    { label: "SKILLS", id: "skills" },
    { label: "EDUCATION", id: "education" },
    { label: "CONTACT", id: "contact" },
    ...(isAuthenticated ? [{ label: "Admin", id: "admin" as const }] : []),
  ];

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer Slide Animation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-64 bg-ide-surface-lowest border-r border-ide-border flex flex-col h-full z-10 text-left p-3"
          >
            <div className="flex justify-end w-full">
              <button
                className="hover:text-ide-primary p-1"
                onClick={handleClose}
                aria-label="Close menu"
              >
                <CircleX />
              </button>
            </div>
            {buttonsList.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  switch (item.id) {
                    case "admin":
                      navigate("/admin");
                      break;

                    default:
                      handleScrollTo(item.id);
                      break;
                  }

                  handleClose();
                }}
                className="hover:text-ide-primary transition-colors uppercase tracking-wider p-2 text-left"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
