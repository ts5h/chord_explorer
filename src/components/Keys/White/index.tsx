import React, { FC, useCallback, useMemo, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

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

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = useCallback((isHovered: boolean) => {
    setIsHovered(isHovered);
  }, []);

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
        bgColor={
          isHovered ? "rgba(255, 102, 0, 0.3)" : "rgba(255, 102, 0, 0.2)"
        }
        borderColor="rgba(255, 102, 0, 0.4)"
        borderWidth={3}
        borderBottomRadius="md"
        transition={isMobile ? "none" : "background-color 0.25s"}
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        onTouchStart={() => handleHover(true)}
        onTouchEnd={() => handleHover(false)}
        onMouseDown={handleMouseDown}
      />
    </Box>
  );
};
