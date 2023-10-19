import React, { FC } from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";

const WIDTH = 39;
const HEIGHT = 210;
const Z_INDEX = 10;

type Props = {
  labels: string[];
  left: string;
};

export const BlackKey: FC<Props> = ({ labels, left }) => {
  return (
    <>
      <Flex
        pos="absolute"
        zIndex={Z_INDEX}
        w={`${WIDTH}px`}
        h={`${HEIGHT}px`}
        left={left}
        top={0}
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
    </>
  );
};
