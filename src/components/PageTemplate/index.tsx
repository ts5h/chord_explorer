import React from "react";
import { Spacer, VStack } from "@chakra-ui/react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Contents } from "../Contents";

export const PageTemplate = () => {
  return (
    <VStack spacing={5} h="full">
      <Header />
      <VStack spacing={0} w="full" maxW="1240px" h="full" align="start" px={5}>
        <Contents />
        <Spacer />
        <Footer />
      </VStack>
    </VStack>
  );
};
