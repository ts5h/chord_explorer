import React, { useCallback, useEffect, useMemo } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { RadioCard } from "~/components/ScalesNav/RadioCard";

export const ScalesNav = () => {
  const urlParams = useParams<{ scale: string; chord: string }>();
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord, setCurrentChord] = useAtom(getCurrentChord);

  const defaultScale = useMemo(
    () => (urlParams.scale ? urlParams.scale.toLowerCase() : currentScale),
    [currentScale, urlParams.scale],
  );
  const defaultChord = useMemo(
    () => (urlParams.chord ? urlParams.chord.toLowerCase() : currentChord),
    [currentChord, urlParams.chord],
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scale",
    defaultValue: currentScale,
    value: currentScale,
    onChange: (value) => handleSelect(value),
  });

  const group = getRootProps();

  // Check params validity
  useEffect(() => {
    const checkScale = scales.find((scale) => scale.value === defaultScale);
    const checkChord = chords.find((chord) => chord.value === defaultChord);
    const scaleValue = checkScale ? checkScale.value : "c";
    const chordValue = checkChord ? checkChord.value : "major";

    setCurrentScale(scaleValue);
    setCurrentChord(chordValue);
    navigate(`/${scaleValue}/${chordValue}`);
  }, [defaultChord, defaultScale, navigate, setCurrentChord, setCurrentScale]);

  const handleSelect = useCallback(
    (scale: string) => {
      setCurrentScale(scale);
      setCurrentChord("major");
      navigate(`/${scale}/major`);
    },
    [navigate, setCurrentChord, setCurrentScale],
  );

  return (
    <HStack spacing={0} w="full" borderRadius="md" overflow="hidden" {...group}>
      {scales.map((option, index) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard
            key={option.value}
            index={index}
            onClick={() => handleSelect(option.value)}
            {...radio}
          >
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
