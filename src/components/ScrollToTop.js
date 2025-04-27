// src/components/ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);  // Triggers every time the location (URL) changes

  return null;  // No visible output, just a behavior handler
};

export default ScrollToTop;
