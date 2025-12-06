import { HStack, Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentChord, getCurrentScale } from "@/store/global/atoms";
import { Chord } from "@/vo/Chords";
import { scales } from "@/vo/Scales";

type Props = {
  categorizedChords: {
    category: string;
    chords: Chord[];
  }[];
};

export const MobileNav: FC<Props> = ({ categorizedChords }) => {
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord, setCurrentChord] = useAtom(getCurrentChord);

  const handleScaleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentScale(event.target.value);
      navigate(`/${event.target.value}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale],
  );

  const handleChordChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentChord(event.target.value);
      navigate(`/${currentScale}/${event.target.value}`);
    },
    [currentScale, navigate, setCurrentChord],
  );

  return (
    <HStack spacing={3} w="full" mb={5}>
      {/* NOTE: It's not an exact value, but will be adjusted as appropriate */}
      <Select w="50%" value={currentScale} onChange={handleScaleChange}>
        {scales.map((scale) => (
          <option key={scale.value} value={scale.value}>
            {scale.label}
          </option>
        ))}
      </Select>
      <Select w="full" value={currentChord} onChange={handleChordChange}>
        {categorizedChords.map((chord) => (
          <optgroup key={chord.category} label={chord.category}>
            {chord.chords.map((chord) => (
              <option key={chord.value} value={chord.value}>
                {chord.label}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>
    </HStack>
  );
};
