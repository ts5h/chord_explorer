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

  const handleMouseDown = useCallback(
    (_e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log(currentKeys);
    },
    [currentKeys],
  );

  return (
    <HStack w="full" justify="center">
      <HStack spacing={0} pos="relative">
        <WhiteKey
          index={0}
          label="C"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={1}
          labels={["C#", "D♭"]}
          keys={currentKeys}
          left={41}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={2}
          label="D"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={3}
          labels={["D#", "E♭"]}
          keys={currentKeys}
          left={119}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={4}
          label="E"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={5}
          label="F"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={6}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={239}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={7}
          label="G"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={8}
          labels={["G#", "A♭"]}
          keys={currentKeys}
          left={311}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={9}
          label="A"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={10}
          labels={["A#", "B♭"]}
          keys={currentKeys}
          left={383}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={11}
          label="B"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={12}
          label="C"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={13}
          labels={["C#", "D♭"]}
          keys={currentKeys}
          left={503}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={14}
          label="D"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={15}
          labels={["D#", "E♭"]}
          keys={currentKeys}
          left={581}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={16}
          label="E"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={17}
          label="F"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={18}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={701}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={19}
          label="G"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={20}
          labels={["F#", "G♭"]}
          keys={currentKeys}
          left={773}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={21}
          label="A"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={22}
          labels={["A#", "B♭"]}
          keys={currentKeys}
          left={845}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={23}
          label="B"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={24}
          label="C"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={25}
          label="D"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={26}
          labels={["C#", "D♭"]}
          keys={currentKeys}
          left={940}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={27}
          label="E"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={28}
          label="F"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
      </HStack>
    </HStack>
  );
};
