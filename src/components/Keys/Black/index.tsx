import React, { FC, useMemo } from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const WIDTH = 39;
const HEIGHT = 210;
const Z_INDEX = 10;

type Props = {
  index: number;
  labels: string[];
  keys: number[];
  left: number;
};

export const BlackKey: FC<Props> = ({ index, labels, keys, left }) => {
  const shouldHighlight = useMemo(() => keys.includes(index), [keys, index]);

  return (
    <Box pos="absolute" zIndex={Z_INDEX} left={left} top={0}>
      <Flex
        w={`${WIDTH}px`}
        h={`${HEIGHT}px`}
        justify="center"
        align="end"
        pb={1.5}
        bgColor="gray.800"
        borderBottomRadius="base"
        onClick={() => {}}
      >
        <VStack spacing={0}>
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
        display={shouldHighlight ? "block" : "none"}
        pos="absolute"
        zIndex={1}
        w={`${WIDTH + 2}px`}
        h={`${HEIGHT + 2}px`}
        left="-1px"
        top="-1px"
        bgColor="rgba(255, 102, 0, 0.5)"
        borderColor="rgba(255, 102, 0, 0.4)"
        borderWidth={3}
        borderBottomRadius="md"
      />
    </Box>
  );
};
