import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import { useAtom } from "jotai";
import { audioContextAtom } from "~/store/global/atoms";

export const useFirstTouch = () => {
  const [audioContext] = useAtom<AudioContext>(audioContextAtom);
  const [isFirstTouch, setFirstTouch] = useState(true);

  const handleFirstTouch = useCallback(() => {
    if (!isMobile || !isFirstTouch) return;

    const source = audioContext.createBufferSource();
    source.buffer = audioContext.createBuffer(1, 1, 22050);
    source.onended = () => source.disconnect();

    source.connect(audioContext.destination);
    source.start(0);
    source.stop(0.001);

    setFirstTouch(false);
  }, [audioContext, isFirstTouch]);

  return { handleFirstTouch };
};
