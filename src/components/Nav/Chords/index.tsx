import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai/react";
import { getCurrentChord } from "~/store/global/atoms";
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
import { useNavigate, useParams } from "react-router-dom";

export const NavChords: FC = () => {
  const urlParams = useParams<{ scale: string; chord: string }>();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(0);

  const categorizeChords = useMemo(() => {
    return categories.map((category) => {
      const filtered = chords.filter((chord) => chord.category === category);
      return { category, chords: filtered };
    });
  }, []);

  useEffect(() => {
    if (!urlParams.chord) return;

    const checkChord = chords.find(
      (chord) => chord.value === urlParams.chord?.toLowerCase(),
    );

    const index = categories.indexOf(checkChord?.category ?? "major");
    setCurrentTab(index);
  }, [urlParams]);

  const handleClick = useCallback(
    (chord: string) => {
      navigate(`/${urlParams.scale}/${chord}`);
    },
    [navigate, urlParams.scale],
  );

  return (
    <Tabs variant="enclosed-colored" w="full" index={currentTab}>
      <TabList>
        {categorizeChords.map((chord, index) => (
          <Tab
            key={index}
            width="160px"
            ml={index === 0 ? 0 : 0.5}
            px={0}
            py={2.5}
            bgColor="gray.100"
            borderTopRadius="md"
            borderTopColor="white"
            borderLeftColor="white"
            borderRightColor="white"
            color="gray.500"
            _hover={{
              bgColor: currentTab === index ? "white" : "gray.300",
            }}
            _selected={{
              bgColor: "white",
              borderTopColor: "gray.200",
              borderRightColor: "gray.200",
              borderBottomColor: "white",
              borderLeftColor: "gray.200",
            }}
            transition="background-color 0.3s"
            onClick={() => setCurrentTab(index)}
          >
            {chord.category.charAt(0).toUpperCase() + chord.category.slice(1)}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {categorizeChords.map((chord, index) => (
          <TabPanel key={index} px={0} py={5}>
            <Stack spacing={3} direction="row" flexWrap="wrap">
              {chord.chords.map((chord, idx) => (
                <Button
                  key={idx}
                  flexShrink={0}
                  w="calc((100% - 72px) / 7)"
                  h="46px"
                  p={2}
                  bgColor={
                    chord.label === urlParams.chord ? "gray.400" : "gray.100"
                  }
                  color={chord.label === urlParams.chord ? "white" : "gray.500"}
                  fontWeight="normal"
                  _hover={{
                    bgColor:
                      chord.label === urlParams.chord ? "gray.400" : "gray.300",
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
