import React, { FC, useCallback, useMemo, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { WHITE_KEY_HEIGHT, WHITE_KEY_WIDTH } from "~/libs/constants";

type Props = {
  index: number;
  label: string;
  keys: number[];
  isChordHovered: boolean;
  setChordHovered: (isChordHovered: boolean) => void;
  handleMouseDown: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    isCurrentScale: boolean,
  ) => void;
  handleMouseUp: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  updateCurrentScale?: (index: number) => void;
  hasInteraction?: boolean;
};

export const WhiteKey: FC<Props> = ({
  index,
  label,
  keys,
  isChordHovered,
  setChordHovered,
  handleMouseDown,
  handleMouseUp,
  updateCurrentScale,
  hasInteraction = false,
}) => {
  const shouldHighlight = useMemo(() => keys.includes(index), [keys, index]);

  const [isAnotherHovered, setIsAnotherHovered] = useState(false);

  const handleAnotherHover = useCallback(
    (isAnotherHovered: boolean) => {
      if (!hasInteraction) return;
      setIsAnotherHovered(isAnotherHovered);
    },
    [hasInteraction],
  );

  const handleHover = useCallback(
    (isChordHovered: boolean) => {
      setChordHovered(isChordHovered);
    },
    [setChordHovered],
  );

  const changeScale = useCallback(() => {
    updateCurrentScale && updateCurrentScale(index);
  }, [hasInteraction, index, updateCurrentScale]);

  return (
    <Box pos="relative">
      <Flex
        w={`${WHITE_KEY_WIDTH}px`}
        h={`${WHITE_KEY_HEIGHT}px`}
        borderColor="gray.500"
        borderWidth={1}
        borderBottomRadius="md"
        justify="center"
        align="end"
        pb={2}
        mr="-1px"
        bgColor={isAnotherHovered ? "gray.100" : "transparent"}
        cursor={hasInteraction ? "pointer" : "default"}
        transition={isMobile ? "none" : "background-color 0.25s"}
        onMouseOver={() => handleAnotherHover(true)}
        onMouseOut={() => handleAnotherHover(false)}
        onTouchStart={() => handleAnotherHover(true)}
        onTouchEnd={() => handleAnotherHover(false)}
        onMouseDown={(e) => {
          if (!hasInteraction) return;
          changeScale();
          handleMouseDown(e, index, false);
        }}
        onMouseUp={(e) => {
          if (!hasInteraction) return;
          handleMouseUp(e);
        }}
      >
        <Text fontSize="2xs" color="gray.400" pointerEvents="none">
          {label}
        </Text>
      </Flex>
      <Box
        pos="absolute"
        zIndex={1}
        w={`${WHITE_KEY_WIDTH + 2}px`}
        h={`${WHITE_KEY_HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        display={shouldHighlight ? "block" : "none"}
        bgColor={
          isChordHovered ? "rgba(255, 102, 0, 0.3)" : "rgba(255, 102, 0, 0.2)"
        }
        borderColor="rgba(255, 102, 0, 0.4)"
        borderWidth={3}
        borderBottomRadius="md"
        cursor="pointer"
        transition={isMobile ? "none" : "background-color 0.25s"}
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        onTouchStart={() => handleHover(true)}
        onTouchEnd={() => handleHover(false)}
        onMouseDown={(e) => handleMouseDown(e, index, true)}
        onMouseUp={handleMouseUp}
      />
    </Box>
  );
};
