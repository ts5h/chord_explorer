import React, { useCallback, useEffect } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { Scales } from "~/domain/ValueObjects/Scales";
import { RadioCard } from "~/components/ScalesNav/RadioCard";

export const ScalesNav = () => {
  const urlParams = useParams<{ scale: string }>();
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const defaultScale = urlParams.scale ? urlParams.scale.toLowerCase() : currentScale;

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scale",
    defaultValue: defaultScale,
    onChange: (value) => setCurrentScale(value),
  });

  const group = getRootProps();

  useEffect(() => {
    setCurrentScale(defaultScale);
    navigate(`/${defaultScale}/${currentChord}`);
  }, [currentChord, defaultScale, navigate, setCurrentScale]);

  const handleSelect = useCallback(
    (scale: string) => {
      setCurrentScale(scale);
      navigate(`/${scale}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale]
  );

  return (
    <HStack spacing={0} w="full" borderRadius="md" overflow="hidden" {...group}>
      {Scales.map((option, index) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard key={option.value} index={index} onSelect={() => handleSelect(option.value)} {...radio}>
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
