import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { UrlUpdater } from "@/components/UrlUpdater";

type Props = {
  children: ReactNode;
};

export const PageTemplate = ({ children }: Props) => {
  return (
    <>
      <UrlUpdater />
      <VStack gap={6} h="full">
        <Header />
        <VStack gap={0} w="full" maxW="1240px" h="full" align="start" px={5}>
          {children}
          <Footer />
        </VStack>
      </VStack>
    </>
  );
};
