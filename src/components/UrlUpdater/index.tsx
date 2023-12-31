import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import { scales } from "~/vo/Scales";
import { chords } from "~/vo/Chords";

export const UrlUpdater: FC = () => {
  const urlParams = useParams<{ scale: string; chord: string }>();
  const { scale, chord } = urlParams;
  const navigate = useNavigate();

  const [_, setCurrentScale] = useAtom(getCurrentScale);
  const [__, setCurrentChord] = useAtom(getCurrentChord);

  // Initialize
  useEffect(() => {
    const checkScale = scales.find((s) => s.value === scale);
    const checkChord = chords.find((c) => c.value === chord);
    const scaleValue = checkScale ? checkScale.value : "c";
    const chordValue = checkChord ? checkChord.value : "major";

    setCurrentScale(scaleValue);
    setCurrentChord(chordValue);
    navigate(`/${scaleValue}/${chordValue}`);
  }, [chord, navigate, scale, setCurrentChord, setCurrentScale]);

  return null;
};
