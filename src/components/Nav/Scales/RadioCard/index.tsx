import { Box, RadioProps, useRadio } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = RadioProps & {
  index: number;
  children: ReactNode;
};

export const RadioCard = (props: Props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="calc(100% / 12)">
      <input {...input} />
      <Box
        {...checkbox}
        bg="gray.100"
        borderLeftWidth={props.index === 0 ? 0 : 1}
        borderColor="white"
        color="gray.500"
        cursor="pointer"
        textAlign="center"
        transitionDuration="0.2s"
        py={2.5}
        _checked={{
          bg: "gray.400",
          color: "white",
        }}
        _hover={{
          bg: props.isChecked ? "gray.400" : "gray.300",
          color: props.isChecked ? "white" : "gray.500",
        }}
        aria-checked={props.isChecked}
        onClick={props.onSelect}
      >
        {props.children}
      </Box>
    </Box>
  );
};
