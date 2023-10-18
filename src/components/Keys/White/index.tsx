import React, { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  label: string;
};

export const WhiteKey: FC<Props> = ({ label }) => {
  return (
    <Flex
      pos="relative"
      w="67px"
      h="340px"
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
  );
};