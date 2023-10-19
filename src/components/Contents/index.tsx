import React, { FC, useMemo } from "react";
import { Heading, HStack, Spacer } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { NavScales } from "~/components/Nav/Scales";
import { NavChords } from "~/components/Nav/Chords";
import { Keys } from "~/components/Keys";

export const Contents: FC = () => {
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
      <HStack mt={-2} mb={4}>
        <Heading as="h2" size="xl" color="gray.500" fontWeight="normal">
          {scaleObj?.label} {chordObj?.label}
        </Heading>
      </HStack>
      <NavScales />
      <NavChords />
      <Spacer />
      <Keys />
      <Spacer />
    </>
  );
};
