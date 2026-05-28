/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationDrawers from "./components/NavigationDrawers";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useDeviceType from "./utils/hooks/deviceUtility";

export default function App() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { isMobile } = useDeviceType();

  useEffect(() => {
    if (!isMobile) {
      setSideBarOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="bg-ide-bg text-ide-text font-sans antialiased min-h-screen flex flex-col transition-colors duration-300">
      {/* Fixed top Header bar */}
      <Header
        onScrollTo={handleScrollTo}
        showDrawerOption={isMobile}
        openDrawer={(open) => setSideBarOpen(open)}
      />

      {/* Main IDE-inspired body */}
      <main className="mt-[64px] max-w-7xl w-full mx-auto ide-border-l ide-border-r flex flex-row flex-grow min-h-[calc(100vh-64px)] transition-colors duration-300 relative">
        {/* This will be shown only when in mobile view. */}
        {sideBarOpen && (
          <NavigationDrawers handleClose={() => setSideBarOpen(false)} />
        )}

        <div className="flex-grow flex flex-col overflow-x-hidden">
          <div className="flex-grow flex flex-col">
            <Hero onScrollTo={handleScrollTo} />

            <Projects />

            <ExperienceTimeline />

            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
