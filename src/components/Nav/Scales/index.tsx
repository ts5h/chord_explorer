import { HStack, RadioCard } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { useCallback } from "react";
import { useNavigate } from "react-router";

import { RadioCardNav } from "@/components/Nav/Scales/RadioCardNav";
import { getCurrentChord, getCurrentScale } from "@/store/global/atoms";
import { scales } from "@/vo/Scales";

export const NavScales = () => {
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const handleSelect = useCallback(
    (scale: string) => {
      setCurrentScale(scale);
      navigate(`/${scale}/${currentChord}`);
    },
    [navigate, setCurrentScale, currentChord],
  );

  return (
    <RadioCard.Root
      orientation={"horizontal"}
      align={"center"}
      justify={"center"}
      w={"full"}
      mb={5}
      value={currentScale}
    >
      <HStack gap={0} w="full" borderRadius={"md"} overflow={"hidden"}>
        {scales.map((scale, index) => {
          return (
            <RadioCardNav
              key={scale.index}
              index={index}
              label={scale.label}
              isChecked={currentScale === scale.value}
              onClick={() => handleSelect(scale.value)}
            />
          );
        })}
      </HStack>
    </RadioCard.Root>
  );
};
