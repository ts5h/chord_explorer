import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";

export const Keys: FC = () => {
  return (
    <HStack w="full" justify="center">
      <HStack spacing={0} pos="relative">
        <WhiteKey index={0} label="C" />
        <BlackKey index={1} labels={["C#", "D♭"]} left={41} />
        <WhiteKey index={2} label="D" />
        <BlackKey index={3} labels={["D#", "E♭"]} left={119} />
        <WhiteKey index={4} label="E" />
        <WhiteKey index={5} label="F" />
        <BlackKey index={6} labels={["F#", "G♭"]} left={239} />
        <WhiteKey index={7} label="G" />
        <BlackKey index={8} labels={["G#", "A♭"]} left={311} />
        <WhiteKey index={9} label="A" />
        <BlackKey index={10} labels={["A#", "B♭"]} left={383} />
        <WhiteKey index={11} label="B" />
        <WhiteKey index={12} label="C" />
        <BlackKey index={13} labels={["C#", "D♭"]} left={503} />
        <WhiteKey index={14} label="D" />
        <BlackKey index={15} labels={["D#", "E♭"]} left={581} />
        <WhiteKey index={16} label="E" />
        <WhiteKey index={17} label="F" />
        <BlackKey index={18} labels={["F#", "G♭"]} left={701} />
        <WhiteKey index={19} label="G" />
        <BlackKey index={20} labels={["F#", "G♭"]} left={773} />
        <WhiteKey index={21} label="A" />
        <BlackKey index={22} labels={["A#", "B♭"]} left={845} />
        <WhiteKey index={23} label="B" />
        <WhiteKey index={24} label="C" />
      </HStack>
    </HStack>
  );
};
