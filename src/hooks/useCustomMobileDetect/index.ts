import { useEffect, useState } from "react";
import { useOrientation } from "react-use";
import {
  isChrome,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

export const useCustomMobileDetect = () => {
  const state = useOrientation();
  const [isCustomMobile, setCustomMobile] = useState(isMobile);

  useEffect(() => {
    if (isMobileOnly) {
      setCustomMobile(true);
    } else if (!isTablet) {
      setCustomMobile(false);
    }
  }, []);

  useEffect(() => {
    if (!isTablet) return;

    const init = () => {
      if (state.angle === 0 || state.angle === 180) {
        setCustomMobile(true);
      } else {
        setCustomMobile(false);
      }
    };

    const handleOrientationChange = () => {
      if (state.angle === 0 || state.angle === 180) {
        setCustomMobile(false);
      } else {
        setCustomMobile(true);
      }
    };

    init();

    if (isChrome) {
      window.addEventListener("resize", handleOrientationChange);
    } else {
      screen.orientation.addEventListener("change", handleOrientationChange);
    }

    return () => {
      if (isChrome) {
        window.removeEventListener("resize", handleOrientationChange);
      } else {
        screen.orientation.addEventListener("change", handleOrientationChange);
      }
    };
  }, [state]);

  return { isCustomMobile };
};
