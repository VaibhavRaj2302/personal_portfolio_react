import { useState, useEffect } from "react";

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query to check if the screen width is less than 768 pixels
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Create event listener to update state on screen resize
    const handleResize = (event: any) => {
      setIsMobile(event.matches);
    };

    // Attach listener
    mediaQuery.addEventListener("change", handleResize);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return { isMobile };
}

export default useDeviceType;
