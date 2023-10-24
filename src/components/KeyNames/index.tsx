import React, { FC } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { getCurrentScale } from "~/store/global/atoms";
import { useWindowSize } from "~/hooks/useWindowSize";

export const KeyNames: FC = () => {
  const { windowSize } = useWindowSize();
  const [currentScale] = useAtom(getCurrentScale);

  return (
    <HStack
      w="full"
      justify={windowSize.width < 1120 ? "start" : "center"}
      mt={5}
    >
      <Box w="1020px">
        <Text>test</Text>
      </Box>
    </HStack>
  );
};
