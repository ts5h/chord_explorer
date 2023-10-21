import React, { FC, useCallback, useMemo, useState } from "react";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { useWindowSize } from "~/hooks/useWindowSize";
import { usePlayChord } from "~/hooks/usePlayChord";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";
import { WHITE_KEY_HEIGHT } from "~/libs/constants";

export const Keys: FC = () => {
  const navigate = useNavigate();
  const { windowSize } = useWindowSize();
  const { playChord } = usePlayChord();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const [isChordHovered, setChordHovered] = useState(false);

  const updateCurrentScale = useCallback(
    (index: number) => {
      const selectedScale = scales.find((scale) => scale.index === index);
      if (typeof selectedScale === "undefined") return;

      setCurrentScale(selectedScale.value);
      navigate(`/${selectedScale.value}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale],
  );

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
    (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
      isCurrentScale: boolean,
    ) => {
      e.preventDefault();
      e.stopPropagation();

      // Current chord
      if (isCurrentScale) {
        playChord(currentKeys);
        return;
      }

      // Chord in the new scale
      const scaleIndex = scales.find((scale) => scale.index === index)!.index;
      const baseKeys = chords.find(
        (chord) => chord.value === currentChord,
      )!.keys;

      const keys = baseKeys.map((key) => key + scaleIndex);
      playChord(keys);
    },
    [currentChord, currentKeys, playChord],
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
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <BlackKey
          index={1}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="37"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={2}
          label="D"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <BlackKey
          index={3}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="107"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={4}
          label="E"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={5}
          label="F"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <BlackKey
          index={6}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="217"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={7}
          label="G"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <BlackKey
          index={8}
          labels={["G#", "Ab"]}
          keys={currentKeys}
          left="282"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={9}
          label="A"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <BlackKey
          index={10}
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="347"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={11}
          label="B"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
          updateCurrentScale={updateCurrentScale}
          hasInteraction
        />
        <WhiteKey
          index={12}
          label="C"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={13}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="457"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={14}
          label="D"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={15}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="527"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={16}
          label="E"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={17}
          label="F"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={18}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="637"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={19}
          label="G"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={20}
          labels={["F#", "Gb"]}
          keys={currentKeys}
          left="702"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={21}
          label="A"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={22}
          labels={["A#", "Bb"]}
          keys={currentKeys}
          left="767"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={23}
          label="B"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={24}
          label="C"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={25}
          labels={["C#", "Db"]}
          keys={currentKeys}
          left="877"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={26}
          label="D"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <BlackKey
          index={27}
          labels={["D#", "Eb"]}
          keys={currentKeys}
          left="947"
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
        <WhiteKey
          index={28}
          label="E"
          keys={currentKeys}
          isChordHovered={isChordHovered}
          setChordHovered={setChordHovered}
          handleMouseDown={handleMouseDown}
        />
      </HStack>
    </HStack>
  );
};
