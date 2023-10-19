import React, { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";

const WIDTH = 67;
const HEIGHT = 340;

type Props = {
  index: number;
  label: string;
};

export const WhiteKey: FC<Props> = ({ index, label }) => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  return (
    <Box pos="relative">
      <Flex
        w={`${WIDTH}px`}
        h={`${HEIGHT}px`}
        borderColor="gray.500"
        borderWidth={1}
        borderBottomRadius="md"
        justify="center"
        align="end"
        pb={2}
        mr="-1px"
        onClick={() => {}}
      >
        <Text fontSize="2xs" color="gray.400">
          {label}
        </Text>
      </Flex>
      <Box
        display="none"
        pos="absolute"
        zIndex={1}
        w={`${WIDTH + 2}px`}
        h={`${HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        bgColor="rgba(255, 102, 0, 0.2)"
        borderColor="rgba(255, 102, 0, 0.4)"
        borderWidth={3}
        borderBottomRadius="md"
      />
    </Box>
  );
};
