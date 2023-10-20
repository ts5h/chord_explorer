import React, { FC, useCallback, useMemo, useState } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const WIDTH = 37;
const HEIGHT = 200;
const Z_INDEX = 10;

type Props = {
  index: number;
  labels: string[];
  keys: number[];
  left: string;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const BlackKey: FC<Props> = ({
  index,
  labels,
  keys,
  left,
  handleMouseDown,
}) => {
  const shouldHighlight = useMemo(() => keys.includes(index), [keys, index]);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = useCallback((isHovered: boolean) => {
    setIsHovered(isHovered);
  }, []);

  return (
    <Box pos="absolute" zIndex={Z_INDEX} left={`${left}px`} top={0}>
      <Flex
        w={`${WIDTH}px`}
        h={`${HEIGHT}px`}
        justify="center"
        align="end"
        pb={1.5}
        bgColor="gray.800"
        borderBottomRadius="base"
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
        w={`${WIDTH + 2}px`}
        h={`${HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        display={shouldHighlight ? "block" : "none"}
        cursor="pointer"
        bgColor={
          isHovered ? "rgba(255, 102, 0, 0.6)" : "rgba(255, 102, 0, 0.5)"
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
