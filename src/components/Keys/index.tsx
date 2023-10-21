import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { useWindowSize } from "~/hooks/useWindowSize";
import { SynthObject, usePlayChord } from "~/hooks/usePlayChord";
import { WhiteKey } from "~/components/Keys/White";
import { BlackKey } from "~/components/Keys/Black";
import { WHITE_KEY_HEIGHT } from "~/libs/constants";

const WHITE_KEYS = [
  { index: 0, label: "C", hasInteraction: true },
  { index: 2, label: "D", hasInteraction: true },
  { index: 4, label: "E", hasInteraction: true },
  { index: 5, label: "F", hasInteraction: true },
  { index: 7, label: "G", hasInteraction: true },
  { index: 9, label: "A", hasInteraction: true },
  { index: 11, label: "B", hasInteraction: true },
  { index: 12, label: "C", hasInteraction: false },
  { index: 14, label: "D", hasInteraction: false },
  { index: 16, label: "E", hasInteraction: false },
  { index: 17, label: "F", hasInteraction: false },
  { index: 19, label: "G", hasInteraction: false },
  { index: 21, label: "A", hasInteraction: false },
  { index: 23, label: "B", hasInteraction: false },
  { index: 24, label: "C", hasInteraction: false },
  { index: 26, label: "D", hasInteraction: false },
  { index: 28, label: "E", hasInteraction: false },
];

const BLACK_KEYS = [
  { index: 1, labels: ["C#", "Db"], left: "37", hasInteraction: true },
  { index: 3, labels: ["D#", "Eb"], left: "107", hasInteraction: true },
  { index: 6, labels: ["F#", "Gb"], left: "217", hasInteraction: true },
  { index: 8, labels: ["G#", "Ab"], left: "282", hasInteraction: true },
  { index: 10, labels: ["A#", "Bb"], left: "347", hasInteraction: true },
  { index: 13, labels: ["C#", "Db"], left: "457", hasInteraction: false },
  { index: 15, labels: ["D#", "Eb"], left: "527", hasInteraction: false },
  { index: 18, labels: ["F#", "Gb"], left: "637", hasInteraction: false },
  { index: 20, labels: ["F#", "Gb"], left: "702", hasInteraction: false },
  { index: 22, labels: ["A#", "Bb"], left: "767", hasInteraction: false },
  { index: 25, labels: ["C#", "Db"], left: "877", hasInteraction: false },
  { index: 27, labels: ["D#", "Eb"], left: "947", hasInteraction: false },
];

export const Keys: FC = () => {
  const navigate = useNavigate();
  const { windowSize } = useWindowSize();
  const { playChord, stopChord } = usePlayChord();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const [synths, setSynths] = useState<SynthObject[]>([]);
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
      e:
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.TouchEvent<HTMLDivElement>,
      index: number,
      isCurrentScale: boolean,
    ) => {
      e.preventDefault();
      e.stopPropagation();

      // Current chord
      if (isCurrentScale) {
        const synth = playChord(currentKeys);
        setSynths((prev) => [...prev, synth]);
        return;
      }

      // Chord in the new scale
      const scaleIndex = scales.find((scale) => scale.index === index)!.index;
      const baseKeys = chords.find(
        (chord) => chord.value === currentChord,
      )!.keys;

      const keys = baseKeys.map((key) => key + scaleIndex);
      const synth = playChord(keys);
      setSynths((prev) => [...prev, synth]);
    },
    [currentChord, currentKeys, playChord],
  );

  const handleMouseUp = useCallback(() => {
    stopChord(synths);
  }, [stopChord, synths]);

  useEffect(() => {
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchend", handleMouseUp);

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <HStack
      w="full"
      justify={windowSize.width < 1120 ? "start" : "center"}
      minH={WHITE_KEY_HEIGHT}
      overflowY="hidden"
      overflowX="auto"
    >
      <HStack spacing={0} pos="relative">
        {WHITE_KEYS.map((whiteKey) => (
          <WhiteKey
            key={whiteKey.index}
            index={whiteKey.index}
            label={whiteKey.label}
            keys={currentKeys}
            isChordHovered={isChordHovered}
            setChordHovered={setChordHovered}
            handleMouseDown={handleMouseDown}
            updateCurrentScale={updateCurrentScale}
            hasInteraction={whiteKey.hasInteraction}
          />
        ))}
        {BLACK_KEYS.map((blackKey) => (
          <BlackKey
            key={blackKey.index}
            index={blackKey.index}
            labels={blackKey.labels}
            keys={currentKeys}
            left={blackKey.left}
            isChordHovered={isChordHovered}
            setChordHovered={setChordHovered}
            handleMouseDown={handleMouseDown}
            updateCurrentScale={updateCurrentScale}
            hasInteraction={blackKey.hasInteraction}
          />
        ))}
      </HStack>
    </HStack>
  );
};
