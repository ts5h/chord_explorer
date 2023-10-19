import React, { FC, useMemo } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const WIDTH = 61;
const HEIGHT = 330;

type Props = {
  index: number;
  label: string;
  keys: number[];
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const WhiteKey: FC<Props> = ({
  index,
  label,
  keys,
  handleMouseDown,
}) => {
  const shouldHighlight = useMemo(() => keys.includes(index), [keys, index]);

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
      >
        <Text fontSize="2xs" color="gray.400" pointerEvents="none">
          {label}
        </Text>
      </Flex>
      <Box
        pos="absolute"
        zIndex={1}
        w={`${WIDTH + 2}px`}
        h={`${HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        display={shouldHighlight ? "block" : "none"}
        cursor="pointer"
        bgColor="rgba(255, 102, 0, 0.2)"
        borderColor="rgba(255, 102, 0, 0.4)"
        borderWidth={3}
        borderBottomRadius="md"
        onMouseDown={handleMouseDown}
      />
    </Box>
  );
};
