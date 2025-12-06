import { HStack, NativeSelect } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { getCurrentChord, getCurrentScale } from "@/store/global/atoms";
import { Chord } from "@/vo/Chords";
import { scales } from "@/vo/Scales";

type Props = {
  categorizedChords: {
    category: string;
    chords: Chord[];
  }[];
};

export const MobileNav = ({ categorizedChords }: Props) => {
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord, setCurrentChord] = useAtom(getCurrentChord);

  const handleScaleChange = useCallback(
    (value: string) => {
      setCurrentScale(value);
      navigate(`/${value}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale],
  );

  const handleChordChange = useCallback(
    (value: string) => {
      setCurrentChord(value);
      navigate(`/${currentScale}/${value}`);
    },
    [currentScale, navigate, setCurrentChord],
  );

  return (
    <HStack gap={3} w="full" mb={5}>
      {/* NOTE: It's not an exact value, but will be adjusted as appropriate */}
      <NativeSelect.Root w={"35%"}>
        <NativeSelect.Field
          px={4}
          fontSize={"md"}
          value={currentScale}
          onChange={(e) => handleScaleChange(e.target.value)}
        >
          {scales.map((scale) => (
            <option key={scale.value} value={scale.value}>
              {scale.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>

      <NativeSelect.Root w={"65%"}>
        <NativeSelect.Field
          px={4}
          fontSize={"md"}
          value={currentChord}
          onChange={(e) => handleChordChange(e.target.value)}
        >
          {categorizedChords.map((chord) => (
            <optgroup key={chord.category} label={chord.category}>
              {chord.chords.map((crd) => (
                <option key={crd.value} value={crd.value}>
                  {crd.label}
                </option>
              ))}
            </optgroup>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </HStack>
  );
};
