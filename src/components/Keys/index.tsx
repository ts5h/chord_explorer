import React, { FC, useCallback, useMemo, useState } from "react";
import { HStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { useWindowSize } from "~/hooks/useWindowSize";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";
import { WHITE_KEY_HEIGHT } from "~/libs/constants";

export const Keys: FC = () => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const { windowSize } = useWindowSize();
  const [isHovered, setIsHovered] = useState(false);

  const currentKeys = useMemo(() => {
    const scaleIndex = scales.find((scale) => scale.value === currentScale)
      ?.index;
    const baseKeys = chords.find((chord) => chord.value === currentChord)?.keys;

    if (typeof scaleIndex === "undefined" || typeof baseKeys === "undefined") {
      return [];
    }

    return baseKeys.map((key) => key + scaleIndex);
  }, [currentChord, currentScale]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();

      console.log(currentKeys);
    },
    [currentKeys],
  );

  return (
    <HStack
      w="full"
      justify={windowSize.width < 1120 ? "start" : "center"}
      minH={WHITE_KEY_HEIGHT}
      overflowY="hidden"
      overflowX="auto"
    >
      <HStack spacing={0} pos="relative">
        <WhiteKey
          index={0}
          label="C"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <BlackKey
          index={1}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="37"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={2}
          label="D"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <BlackKey
          index={3}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="107"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={4}
          label="E"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={5}
          label="F"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <BlackKey
          index={6}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="217"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={7}
          label="G"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <BlackKey
          index={8}
          labels={["G#", "Ab"]}
          keys={currentKeys}
          left="282"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={9}
          label="A"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <BlackKey
          index={10}
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="347"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={11}
          label="B"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
          hasInteraction
        />
        <WhiteKey
          index={12}
          label="C"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={13}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="457"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={14}
          label="D"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={15}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="527"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={16}
          label="E"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={17}
          label="F"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={18}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="637"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={19}
          label="G"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={20}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="702"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={21}
          label="A"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={22}
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="767"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={23}
          label="B"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={24}
          label="C"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={25}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="877"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={26}
          label="D"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={27}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="947"
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={28}
          label="E"
          keys={currentKeys}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          handleMouseDown={handleMouseDown}
        />
      </HStack>
    </HStack>
  );
};
