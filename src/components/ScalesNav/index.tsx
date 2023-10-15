import React from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import { RadioCard } from "~/components/ScalesNav/RadioCard";
import { scales } from "~/domain/ValueObjects/scales";

export const ScalesNav = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "scale",
    defaultValue: "C",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack spacing={0} w="full" borderRadius="md" overflow="hidden" {...group}>
      {scales.map((option, index) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard key={option.value} index={index} {...radio}>
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
