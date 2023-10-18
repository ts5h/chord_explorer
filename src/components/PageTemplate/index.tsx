import React, { FC } from "react";
import { Spacer, VStack } from "@chakra-ui/react";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Contents } from "~/components/Contents";
import { UrlUpdater } from "~/components/UrlUpdater";

export const PageTemplate: FC = () => {
  return (
    <>
      <UrlUpdater />
      <VStack spacing={6} h="full">
        <Header />
        <VStack
          spacing={0}
          w="full"
          maxW="1240px"
          h="full"
          align="start"
          px={5}
        >
          <Contents />
          <Spacer />
          <Footer />
        </VStack>
      </VStack>
    </>
  );
};
