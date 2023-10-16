import React, { useMemo } from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { ScalesNav } from "~/components/ScalesNav";

export const Contents = () => {
  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const scaleObj = useMemo(
    () => scales.find((scale) => scale.value === currentScale),
    [currentScale],
  );
  const chordObj = useMemo(
    () => chords.find((chord) => chord.value === currentChord),
    [currentChord],
  );

  return (
    <>
      <ScalesNav />
      <HStack mt={5}>
        <Heading as="h2" size="xl" color="gray.500" fontWeight="normal">
          {scaleObj?.label} {chordObj?.label}
        </Heading>
      </HStack>
    </>
  );
};
