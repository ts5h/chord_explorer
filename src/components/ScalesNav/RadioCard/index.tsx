import React from 'react';
import { Box, RadioProps, useRadio } from '@chakra-ui/react';

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
        bg="gray.200"
        borderLeftWidth={props.index === 0 ? 0 : 1}
        borderColor="gray.50"
        color="gray.500"
        cursor="pointer"
        textAlign="center"
        transitionDuration="0.2s"
        py={3}
        _checked={{
          bg: 'gray.400',
          color: 'white',
        }}
        _hover={{
          bg: props.isChecked ? 'gray.400' : 'gray.300',
          color: props.isChecked ? 'white' : 'gray.500',
        }}
        aria-checked={props.isChecked}
        onClick={props.onSelect}
      >
        {props.children}
      </Box>
    </Box>
  );
};
