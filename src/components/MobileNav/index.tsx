import React, { FC } from "react";
import { useCustomMobileDetect } from "~/hooks/useCustomMobileDetect";

export const MobileNav: FC = () => {
  const { isCustomMobile } = useCustomMobileDetect();

  return null;
};
