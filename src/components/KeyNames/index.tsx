import React, { FC, useMemo } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { getCurrentChord } from "~/store/global/atoms";
import { useWindowSize } from "~/hooks/useWindowSize";
import { chords } from "~/vo/Chords";

export const KeyNames: FC = () => {
  const { windowSize } = useWindowSize();
  const [currentChord] = useAtom(getCurrentChord);

  const currentKeyNames = useMemo(
    () => chords.find((chord) => chord.value === currentChord)?.keyNames,
    [currentChord],
  );

  return (
    <HStack
      w="full"
      justify={windowSize.width < 1120 ? "start" : "center"}
      mt={4}
    >
      <Box w="1020px">
        {currentKeyNames?.map((keyName, index) => (
          <Text key={index} color="gray.700">
            {keyName}
          </Text>
        ))}
      </Box>
    </HStack>
  );
};
