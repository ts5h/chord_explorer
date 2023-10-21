import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import { useAtom } from "jotai/react";
import { getCurrentChord, getCurrentScale } from "~/store/global/atoms";
import {
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { categories, chords } from "~/vo/Chords";
import { useNavigate } from "react-router-dom";

export const NavChords: FC = () => {
  const navigate = useNavigate();

  const [currentScale] = useAtom(getCurrentScale);
  const [currentChord, setCurrentChord] = useAtom(getCurrentChord);

  const [currentTab, setCurrentTab] = useState(0);

  const categorizeChords = useMemo(() => {
    return categories.map((category) => {
      const filtered = chords.filter((chord) => chord.category === category);
      return { category, chords: filtered };
    });
  }, []);

  useEffect(() => {
    const checkChord = chords.find((chord) => chord.value === currentChord);
    const index = categories.indexOf(checkChord?.category ?? "major");
    setCurrentTab(index);
  }, [currentChord]);

  const handleClick = useCallback(
    (chord: string) => {
      setCurrentChord(chord);
      navigate(`/${currentScale}/${chord}`);
    },
    [currentScale, navigate, setCurrentChord],
  );

  return (
    <Tabs variant="enclosed" w="full" index={currentTab}>
      <TabList>
        {categorizeChords.map((chord, index) => (
          <Tab
            key={index}
            width="150px"
            px={0}
            py="9px"
            color="gray.400"
            _hover={{
              bgColor: currentTab === index ? "white" : "gray.100",
            }}
            _selected={{
              bgColor: "white",
              borderTopColor: "gray.200",
              borderRightColor: "gray.200",
              borderBottomColor: "white",
              borderLeftColor: "gray.200",
              color: "gray.700",
            }}
            transition="background-color 0.3s"
            onClick={() => setCurrentTab(index)}
          >
            {chord.category.charAt(0).toUpperCase() + chord.category.slice(1)}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categorizeChords.map((category, index) => (
          <TabPanel key={index} px={0} pt={5} pb={isMobile ? 5 : 10}>
            <Stack spacing={3} direction="row" flexWrap="wrap">
              {category.chords.map((chord, idx) => (
                <Button
                  key={idx}
                  flexShrink={0}
                  w="calc((100% - 84px) / 8)"
                  h="44px"
                  p={isMobile ? 1.5 : 2}
                  bgColor={
                    chord.value === currentChord ? "gray.400" : "gray.100"
                  }
                  color={chord.value === currentChord ? "white" : "gray.500"}
                  fontWeight="normal"
                  _hover={{
                    bgColor:
                      chord.value === currentChord ? "gray.400" : "gray.300",
                  }}
                  onClick={() => {
                    handleClick(chord.value);
                  }}
                >
                  {chord.label}
                </Button>
              ))}
            </Stack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
