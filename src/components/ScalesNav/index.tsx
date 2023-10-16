import React, { useCallback, useEffect } from 'react';
import { HStack, useRadioGroup } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAtom } from 'jotai/react';
import { getCurrentChord, getCurrentScale } from '~/store/global/atoms';
import { Scales } from '~/domain/ValueObjects/Scales';
import { Chords } from '~/domain/ValueObjects/Chords';
import { RadioCard } from '~/components/ScalesNav/RadioCard';

export const ScalesNav = () => {
  const urlParams = useParams<{ scale: string; chord: string }>();
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord, setCurrentChord] = useAtom(getCurrentChord);

  const defaultScale = urlParams.scale ? urlParams.scale.toLowerCase() : currentScale;
  const defaultChord = urlParams.chord ? urlParams.chord.toLowerCase() : currentChord;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'scale',
    defaultValue: defaultScale,
    value: defaultScale,
    onChange: (value) => handleSelect(value),
  });

  const group = getRootProps();

  // Check params validity
  useEffect(() => {
    const checkScale = Scales.find((scale) => scale.value === defaultScale);
    const checkChord = Chords.find((chord) => chord.value === defaultChord);
    const scale = checkScale ? checkScale.value : 'c';
    const chord = checkChord ? checkChord.value : 'major';

    setCurrentScale(scale);
    setCurrentChord(chord);
    navigate(`/${scale}/${chord}`);
  }, [currentChord, defaultChord, defaultScale, navigate, setCurrentChord, setCurrentScale]);

  const handleSelect = useCallback(
    (scale: string) => {
      setCurrentScale(scale);
      setCurrentChord('major');
      navigate(`/${scale}/major`);
    },
    [navigate, setCurrentChord, setCurrentScale],
  );

  return (
    <HStack spacing={0} w="full" borderRadius="md" overflow="hidden" {...group}>
      {Scales.map((option, index) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard key={option.value} index={index} onClick={() => handleSelect(option.value)} {...radio}>
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
