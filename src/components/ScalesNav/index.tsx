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
    <HStack w="full" {...group}>
      {scales.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard key={option.value} {...radio}>
            {option.label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
