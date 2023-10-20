import React, { FC, useCallback, useMemo } from "react";
import { HStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { useWindowSize } from "~/hooks/useWindowSize";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";

export const Keys: FC = () => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const { windowSize } = useWindowSize();

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

  // TODO: Adjust black keys' positions
  return (
    <HStack
      w="full"
      justify={windowSize.width < 1120 ? "start" : "center"}
      overflowY="hidden"
      overflowX="auto"
    >
      <HStack spacing={0} pos="relative">
        <WhiteKey
          index={0}
          label="C"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={1}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="37"
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
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="107"
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
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="217"
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
          labels={["G#", "Ab"]}
          keys={currentKeys}
          left="282"
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
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="347"
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
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="457"
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
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="527"
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
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="637"
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
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="702"
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
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="767"
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
        <BlackKey
          index={25}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="877"
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={26}
          label="D"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={27}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="947"
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={28}
          label="E"
          keys={currentKeys}
          handleMouseDown={handleMouseDown}
        />
      </HStack>
    </HStack>
  );
};
