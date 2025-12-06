import { Heading, Popover, Portal } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { useCallback, useMemo, useState } from "react";
import { useCustomMobileDetect } from "@/hooks/useCustomMobileDetect";
import { getCurrentChord, getCurrentScale } from "@/store/global/atoms";
import { chords } from "@/vo/Chords";
import { scales } from "@/vo/Scales";

export const GlobalHeading = () => {
  const { isCustomMobile } = useCustomMobileDetect();

  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const [open, setOpen] = useState(false);

  const scaleObj = useMemo(
    () => scales.find((scale) => scale.value === currentScale),
    [currentScale],
  );
  const chordObj = useMemo(
    () => chords.find((chord) => chord.value === currentChord),
    [currentChord],
  );

  const handlePopover = useCallback(() => {
    if (!isCustomMobile) return;
    setOpen(!open);
  }, [isCustomMobile, open]);

  return (
    <Popover.Root
      positioning={{ placement: "bottom-start" }}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Popover.Trigger asChild>
        <Heading
          as={"h2"}
          size={{ base: "3xl", md: "4xl" }}
          color={"gray.500"}
          fontWeight={"normal"}
          lineHeight={"shorter"}
          lineClamp={1}
          onClick={handlePopover}
        >
          {scaleObj?.label} {chordObj?.label}
        </Heading>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content w={"auto"} mt={-1.5}>
            <Popover.Arrow />
            <Popover.Body px={3} py={2}>
              {scaleObj?.label} {chordObj?.label}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
