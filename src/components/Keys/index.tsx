import React, { FC, useCallback, useMemo } from "react";
import { HStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";

export const Keys: FC = () => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const scaleIndex = useMemo(
    () => scales.find((scale) => scale.value === currentScale)?.index,
    [currentScale],
  );

  const baseKeys = useMemo(
    () => chords.find((chord) => chord.value === currentChord)?.keys,
    [currentChord],
  );

  const currentKeys = useMemo(() => {
    if (typeof scaleIndex === "undefined" || typeof baseKeys === "undefined")
      return [];
    return baseKeys.map((key) => key + scaleIndex);
  }, [scaleIndex, baseKeys]);

  return (
    <HStack w="full" justify="center">
      <HStack spacing={0} pos="relative">
        <WhiteKey index={0} label="C" keys={currentKeys} />
        <BlackKey
          index={1}
          labels={["C#", "D♭"]}
          keys={currentKeys}
          left={41}
        />
        <WhiteKey index={2} label="D" keys={currentKeys} />
        <BlackKey
          index={3}
          labels={["D#", "E♭"]}
          keys={currentKeys}
          left={119}
        />
        <WhiteKey index={4} label="E" keys={currentKeys} />
        <WhiteKey index={5} label="F" keys={currentKeys} />
        <BlackKey
          index={6}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={239}
        />
        <WhiteKey index={7} label="G" keys={currentKeys} />
        <BlackKey
          index={8}
          labels={["G#", "A♭"]}
          keys={currentKeys}
          left={311}
        />
        <WhiteKey index={9} label="A" keys={currentKeys} />
        <BlackKey
          index={10}
          labels={["A#", "B♭"]}
          keys={currentKeys}
          left={383}
        />
        <WhiteKey index={11} label="B" keys={currentKeys} />
        <WhiteKey index={12} label="C" keys={currentKeys} />
        <BlackKey
          index={13}
          labels={["C#", "D♭"]}
          keys={currentKeys}
          left={503}
        />
        <WhiteKey index={14} label="D" keys={currentKeys} />
        <BlackKey
          index={15}
          labels={["D#", "E♭"]}
          keys={currentKeys}
          left={581}
        />
        <WhiteKey index={16} label="E" keys={currentKeys} />
        <WhiteKey index={17} label="F" keys={currentKeys} />
        <BlackKey
          index={18}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={701}
        />
        <WhiteKey index={19} label="G" keys={currentKeys} />
        <BlackKey
          index={20}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={773}
        />
        <WhiteKey index={21} label="A" keys={currentKeys} />
        <BlackKey
          index={22}
          labels={["A#", "B♭"]}
          keys={currentKeys}
          left={845}
        />
        <WhiteKey index={23} label="B" keys={currentKeys} />
        <WhiteKey index={24} label="C" keys={currentKeys} />
      </HStack>
    </HStack>
  );
};
