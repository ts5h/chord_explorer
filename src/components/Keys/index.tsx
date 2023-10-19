import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";
import { WhiteKey } from "~/components/KeyModel/White";
import { BlackKey } from "~/components/KeyModel/Black";

export const Keys: FC = () => {
  return (
    <HStack w="full" justify="center">
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
        <BlackKey labels={["C#", "D♭"]} left="41px" />
        <BlackKey labels={["D#", "E♭"]} left="119px" />
        <BlackKey labels={["F#", "G♭"]} left="239px" />
        <BlackKey labels={["G#", "A♭"]} left="311px" />
        <BlackKey labels={["A#", "B♭"]} left="383px" />
        <BlackKey labels={["C#", "D♭"]} left="503px" />
        <BlackKey labels={["D#", "E♭"]} left="581px" />
        <BlackKey labels={["F#", "G♭"]} left="701px" />
        <BlackKey labels={["F#", "G♭"]} left="773px" />
        <BlackKey labels={["A#", "B♭"]} left="845px" />
      </HStack>
    </HStack>
  );
};
