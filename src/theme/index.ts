import { createSystem, defaultConfig } from "@chakra-ui/react";

import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors,
      fonts,
    },
  },
});
