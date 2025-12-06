import { Icon, IconButton } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { FC, useCallback, useState } from "react";
import { SoundOff, SoundOn } from "@/components/icons";
import { useFirstTouch } from "@/hooks/useFirstTouch";
import { isSoundOnAtom } from "@/store/global/atoms";

export const SoundButton: FC = () => {
  const { handleFirstTouch } = useFirstTouch();

  const [isSoundOn, setSoundOn] = useAtom(isSoundOnAtom);
  const [isTouched] = useState(false);

  const handleClick = useCallback(() => {
    (async () => await handleFirstTouch())();
    setSoundOn((prev) => !prev);
  }, [handleFirstTouch, setSoundOn]);

  return (
    <IconButton
      aria-label="Sound"
      icon={<Icon as={isSoundOn ? SoundOn : SoundOff} boxSize={6} />}
      bgColor={isTouched ? "gray.200" : "white"}
      color="gray.500"
      w="45px"
      h="45px"
      outline="none"
      onClick={handleClick}
      _hover={{
        bgColor: "transparent",
      }}
      sx={{
        WebkitTapHighlightColor: "rgba(0, 0 ,0, 0)",
      }}
    />
  );
};
