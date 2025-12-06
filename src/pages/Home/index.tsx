import { HStack, Spacer } from "@chakra-ui/react";
import { useMemo } from "react";
import { GlobalHeading } from "@/components/GlobalHeading";
import { KeyNames } from "@/components/KeyNames";
import { Keys } from "@/components/Keys";
import { MobileNav } from "@/components/MobileNav";
import { NavChords } from "@/components/Nav/Chords";
import { NavScales } from "@/components/Nav/Scales";
import { PageTemplate } from "@/components/PageTemplate";
import { SoundButton } from "@/components/SoundButton";
import { useCustomMobileDetect } from "@/hooks/useCustomMobileDetect";
import { categories, chords } from "@/vo/Chords";

export const Home = () => {
  const { isCustomMobile } = useCustomMobileDetect();

  const categorizeChords = useMemo(() => {
    return categories.map((category) => {
      const filtered = chords.filter((chord) => chord.category === category);
      return { category, chords: filtered };
    });
  }, []);

  return (
    <PageTemplate>
      <HStack w="full" mt={-3} mb={3}>
        <GlobalHeading />
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
