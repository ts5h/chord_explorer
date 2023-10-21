import React, { FC, useCallback, useMemo, useState } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { BLACK_KEY_HEIGHT, BLACK_KEY_WIDTH } from "~/libs/constants";

const Z_INDEX = 10;

type Props = {
  index: number;
  labels: string[];
  keys: number[];
  left: string;
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

export const BlackKey: FC<Props> = ({
  index,
  labels,
  keys,
  left,
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
  }, [index, updateCurrentScale]);

  return (
    <Box pos="absolute" zIndex={Z_INDEX} left={`${left}px`} top={0}>
      <Flex
        w={`${BLACK_KEY_WIDTH}px`}
        h={`${BLACK_KEY_HEIGHT}px`}
        justify="center"
        align="end"
        pb={1.5}
        bgColor={isAnotherHovered ? "gray.900" : "gray.700"}
        borderBottomRadius="base"
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
        <VStack spacing={0} pointerEvents="none">
          {labels.map((label) => (
            <Text
              key={label}
              fontSize="2xs"
              color="gray.400"
              lineHeight="shorter"
            >
              {label}
            </Text>
          ))}
        </VStack>
      </Flex>
      <Box
        pos="absolute"
        zIndex={1}
        w={`${BLACK_KEY_WIDTH + 2}px`}
        h={`${BLACK_KEY_HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        display={shouldHighlight ? "block" : "none"}
        bgColor={
          isChordHovered ? "rgba(255, 102, 0, 0.6)" : "rgba(255, 102, 0, 0.5)"
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
