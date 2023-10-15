import React from "react";
import { Box, RadioProps, useRadio } from "@chakra-ui/react";

type Props = RadioProps & {
  index: number;
  children: React.ReactNode;
};

export const RadioCard = (props: Props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="17%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        textAlign="center"
        py={3}
        _checked={{
          bg: "gray.400",
          color: "white",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
