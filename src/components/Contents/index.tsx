import React from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/domain/ValueObjects/scales";
import { chords } from "~/domain/ValueObjects/chord";
import { ScalesNav } from "~/components/ScalesNav";

export const Contents = () => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const scale = scales.find((scale) => scale.value === currentScale)?.label;
  const chord = chords.find((chord) => chord.value === currentChord)?.label;

  return (
    <>
      <ScalesNav />
      <HStack mt={5}>
        <Heading as="h2" size="xl" color="gray.500" fontWeight="normal">
          {scale} {chord}
        </Heading>
      </HStack>
    </>
  );
};
