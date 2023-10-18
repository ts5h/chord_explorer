import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";
import { WhiteKey } from "~/components/Keys/White";

export const Keys: FC = () => {
  return (
    <HStack spacing={0} w="full" justify="center">
      <HStack spacing={0} pos="relative">
        <WhiteKey label="C" />
        <WhiteKey label="D" />
        <WhiteKey label="E" />
        <WhiteKey label="F" />
        <WhiteKey label="G" />
        <WhiteKey label="A" />
        <WhiteKey label="B" />
        <WhiteKey label="C" />
        <WhiteKey label="D" />
        <WhiteKey label="E" />
        <WhiteKey label="F" />
        <WhiteKey label="G" />
        <WhiteKey label="A" />
        <WhiteKey label="B" />
        <WhiteKey label="C" />
      </HStack>
    </HStack>
  );
};
