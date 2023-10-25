import React, { FC, useMemo } from "react";
import { Heading, HStack, Spacer } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { categories, chords } from "~/vo/Chords";
import { useCustomMobileDetect } from "~/hooks/useCustomMobileDetect";
import { MobileNav } from "~/components/MobileNav";
import { SoundButton } from "~/components/MobileNav/SoundButton";
import { NavScales } from "~/components/Nav/Scales";
import { NavChords } from "~/components/Nav/Chords";
import { Keys } from "~/components/Keys";
import { KeyNames } from "~/components/KeyNames";

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

  const categorizeChords = useMemo(() => {
    return categories.map((category) => {
      const filtered = chords.filter((chord) => chord.category === category);
      return { category, chords: filtered };
    });
  }, []);

  return (
    <>
      <HStack w="full" align="start" mt={-3} mb={3}>
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
        {isMobile && <SoundButton />}
      </HStack>
      {isCustomMobile && <MobileNav categorizedChords={categorizeChords} />}
      {!isCustomMobile && <NavScales />}
      {!isCustomMobile && <NavChords categorizedChords={categorizeChords} />}
      <Keys />
      <KeyNames />
      <Spacer />
    </>
  );
};
