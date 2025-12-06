import { Heading, HStack, Spacer } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import React, { useEffect, useMemo } from "react";
import { isMobile } from "react-device-detect";
import { KeyNames } from "@/components/KeyNames";
import { Keys } from "@/components/Keys";
import { MobileNav } from "@/components/MobileNav";
import { NavChords } from "@/components/Nav/Chords";
import { NavScales } from "@/components/Nav/Scales";
import { PageTemplate } from "@/components/PageTemplate";
import { SoundButton } from "@/components/SoundButton";
import { useCustomMobileDetect } from "@/hooks/useCustomMobileDetect";
import { getCurrentChord, getCurrentScale } from "@/store/global/atoms";
import { categories, chords } from "@/vo/Chords";
import { scales } from "@/vo/Scales";

export const Home = () => {
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
    <PageTemplate>
      <HStack w="full" mt={-3} mb={3}>
        <Heading
          as={"h2"}
          size={{ base: "3xl", md: "4xl" }}
          color={"gray.500"}
          fontWeight={"normal"}
          lineHeight={"shorter"}
          lineClamp={1}
        >
          {scaleObj?.label} {chordObj?.label}
        </Heading>
        <Spacer />
        <SoundButton />
      </HStack>
      {isCustomMobile && <MobileNav categorizedChords={categorizeChords} />}
      {!isCustomMobile && <NavScales />}
      {!isCustomMobile && <NavChords categorizedChords={categorizeChords} />}
      <Keys />
      <KeyNames />
      <Spacer />
    </PageTemplate>
  );
};
