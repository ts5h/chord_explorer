import { createSystem, defaultConfig } from "@chakra-ui/react";

import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { styles } from "@/theme/styles";

export const system = createSystem(defaultConfig, {
  globalCss: styles,
  theme: {
    tokens: {
      colors,
      fonts,
    },
  },
});
