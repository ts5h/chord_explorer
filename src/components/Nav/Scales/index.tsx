import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { RadioCard } from "~/components/Nav/Scales/RadioCard";

export const NavScales: FC = () => {
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scale",
    defaultValue: currentScale,
    value: currentScale,
    onChange: (value) => handleSelect(value),
  });

  const group = getRootProps();

  const handleSelect = useCallback(
    (scale: string) => {
      setCurrentScale(scale);
      navigate(`/${scale}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale],
  );

  return (
    <HStack
      spacing={0}
      flexShrink={0}
      w="full"
      borderRadius="md"
      overflow="hidden"
      mb={5}
      {...group}
    >
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
