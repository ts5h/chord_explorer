import React, { FC, useCallback, useState } from "react";
import { Icon, IconButton, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { isSoundOnAtom } from "~/store/global/atoms";
import { useFirstTouch } from "~/hooks/useFirstTouch";
import { SoundOn, SoundOff } from "~/components/icons";

export const SoundButton: FC = () => {
  const { handleFirstTouch } = useFirstTouch();

  const [isSoundOn, setSoundOn] = useAtom(isSoundOnAtom);
  const [isTouched, setTouch] = useState(false);

  const handleClick = useCallback(() => {
    void (async () => await handleFirstTouch())();
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
