import React, { FC } from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";

type Props = {
  labels: string[];
  left: string;
};

export const BlackKey: FC<Props> = ({ labels, left }) => {
  return (
    <Flex
      pos="absolute"
      w="39px"
      h="210px"
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
  );
};
