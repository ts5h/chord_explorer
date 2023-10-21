import React, { FC, useMemo } from "react";
import { Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";
import { useCustomMobileDetect } from "~/hooks/useCustomMobileDetect";
import { MobileNav } from "~/components/MobileNav";
import { NavScales } from "~/components/Nav/Scales";
import { NavChords } from "~/components/Nav/Chords";
import { Keys } from "~/components/Keys";

export const Contents: FC = () => {
  const { isCustomMobile } = useCustomMobileDetect();

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
      <HStack w="full" align="start" mt={-2} mb={4}>
        <Heading
          as="h2"
          size="xl"
          color="gray.500"
          fontWeight="normal"
          lineHeight="shorter"
        >
          {scaleObj?.label} {chordObj?.label}
        </Heading>
        <Spacer />
        <Text>Sound icon</Text>
      </HStack>
      {isCustomMobile && <MobileNav />}
      {!isCustomMobile && <NavScales />}
      <NavChords />
      <Keys />
      <Spacer />
    </>
  );
};
