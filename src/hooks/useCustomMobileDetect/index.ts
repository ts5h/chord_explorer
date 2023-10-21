import { useEffect, useState } from "react";
import { isMobile, isMobileOnly, isTablet } from "react-device-detect";

export const useCustomMobileDetect = () => {
  const [isCustomMobile, setCustomMobile] = useState(isMobile);

  useEffect(() => {
    if (isMobileOnly) {
      setCustomMobile(true);
    } else if (isTablet && screen.orientation.type.includes("portrait")) {
      setCustomMobile(true);
    } else {
      setCustomMobile(false);
    }
  }, []);

  useEffect(() => {
    if (!isTablet) return;

    const orientationchange = () => {
      if (screen.orientation.type.includes("portrait")) {
        setCustomMobile(true);
      } else {
        setCustomMobile(false);
      }
    };

    window.addEventListener("orientationchange", orientationchange);
    return () => {
      window.removeEventListener("orientationchange", orientationchange);
    };
  }, []);

  return { isCustomMobile };
};
