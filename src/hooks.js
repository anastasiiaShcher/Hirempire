import { useState, useEffect, useMemo } from "react";

export const useWidthData = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = useMemo(() => width <= 640, [width]);
  const isTablet = useMemo(() => width > 640 && width < 1440, [width]);

  return { isMobile, isTablet };
};
