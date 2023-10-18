import React, { FC, ReactNode } from "react";
import { Spacer, VStack } from "@chakra-ui/react";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { UrlUpdater } from "~/components/UrlUpdater";

type Props = {
  children: ReactNode;
};

export const PageTemplate: FC<Props> = ({ children }) => {
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
          {children}
          <Spacer />
          <Footer />
        </VStack>
      </VStack>
    </>
  );
};
