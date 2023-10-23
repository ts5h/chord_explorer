import { isMobileOnly } from "react-device-detect";

export const WHITE_KEY_WIDTH = 61;
export const WHITE_KEY_HEIGHT = isMobileOnly ? 280 : 330;

export const BLACK_KEY_WIDTH = 37;
export const BLACK_KEY_HEIGHT = isMobileOnly ? 160 : 200;
