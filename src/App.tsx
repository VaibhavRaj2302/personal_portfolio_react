/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationDrawers from "./components/NavigationDrawers";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useDeviceType from "./utils/hooks/deviceUtility";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <Header
        onScrollTo={handleScrollTo}
        showDrawerOption={isMobile}
        openDrawer={(open) => setSideBarOpen(open)}
      />

      <main className="mt-16 max-w-7xl w-full mx-auto ide-border-l ide-border-r ide-border-b  flex flex-row grow min-h-[calc(100vh-64px)] transition-colors duration-300 relative">
        {sideBarOpen && (
          <NavigationDrawers
            handleClose={() => setSideBarOpen(false)}
            isOpen={sideBarOpen}
          />
        )}

        <div className="grow flex flex-col overflow-x-hidden">
          <div className="grow flex flex-col">
            <Hero onScrollTo={handleScrollTo} />
            <Summary />
            <Projects />
            <ExperienceTimeline />
            <Achievements />
            <Skills />
            <Education />
            <Contact />
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
