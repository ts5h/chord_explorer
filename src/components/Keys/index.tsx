import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";

export const Keys: FC = () => {
  return (
    <HStack w="full" justify="center">
      <HStack spacing={0} pos="relative">
        <WhiteKey label="C" />
        <BlackKey labels={["C#", "D♭"]} left="41px" />
        <WhiteKey label="D" />
        <BlackKey labels={["D#", "E♭"]} left="119px" />
        <WhiteKey label="E" />
        <WhiteKey label="F" />
        <BlackKey labels={["F#", "G♭"]} left="239px" />
        <WhiteKey label="G" />
        <BlackKey labels={["G#", "A♭"]} left="311px" />
        <WhiteKey label="A" />
        <BlackKey labels={["A#", "B♭"]} left="383px" />
        <WhiteKey label="B" />
        <WhiteKey label="C" />
        <BlackKey labels={["C#", "D♭"]} left="503px" />
        <WhiteKey label="D" />
        <BlackKey labels={["D#", "E♭"]} left="581px" />
        <WhiteKey label="E" />
        <WhiteKey label="F" />
        <BlackKey labels={["F#", "G♭"]} left="701px" />
        <WhiteKey label="G" />
        <BlackKey labels={["F#", "G♭"]} left="773px" />
        <WhiteKey label="A" />
        <BlackKey labels={["A#", "B♭"]} left="845px" />
        <WhiteKey label="B" />
        <WhiteKey label="C" />
      </HStack>
    </HStack>
  );
};
