import React from "react";
import { TabList, Tabs, Tab } from "@chakra-ui/react";
import { categorizeChords } from "~/vo/Chords";

export const NavChords = () => {
  return (
    <Tabs variant="enclosed-colored" w="full">
      <TabList>
        {categorizeChords.map((chord, index) => (
          <Tab
            key={index}
            width="150px"
            px={0}
            bgColor="gray.100"
            borderTopRadius="md"
            borderTopColor="gray.100"
            borderLeftColor="white"
            borderRightColor="white"
            color="gray.500"
            _selected={{
              bgColor: "white",
              borderTopColor: "gray.200",
              borderRightColor: "gray.200",
              borderBottomColor: "white",
              borderLeftColor: "gray.200",
            }}
          >
            {chord.category.charAt(0).toUpperCase() + chord.category.slice(1)}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
