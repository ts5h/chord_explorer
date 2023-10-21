import React, { FC, useCallback } from "react";
import { HStack, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { scales } from "~/vo/Scales";
import { useAtom } from "jotai";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";

export const MobileNav: FC = () => {
  const navigate = useNavigate();

  const [currentScale, setCurrentScale] = useAtom(getCurrentScale);
  const [currentChord] = useAtom(getCurrentChord);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentScale(event.target.value);
      navigate(`/${event.target.value}/${currentChord}`);
    },
    [currentChord, navigate, setCurrentScale],
  );

  return (
    <HStack>
      <Select value={currentScale} onChange={handleChange}>
        {scales.map((scale) => (
          <option key={scale.value} value={scale.value}>
            {scale.label}
          </option>
        ))}
      </Select>
    </HStack>
  );
};
