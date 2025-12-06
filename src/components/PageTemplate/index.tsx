import { Spacer, VStack } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
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
          <Footer />
        </VStack>
      </VStack>
    </>
  );
};
