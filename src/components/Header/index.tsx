import React, { FC } from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export const Header: FC = () => {
  return (
    <HStack w="full" justify="center" bgColor="gray.400" color="white">
      <HStack w="full" maxW="1240px" px={5} py={1.5}>
        <Heading
          as="h1"
          size={isMobile ? "sm" : "xs"}
          fontWeight="normal"
          lineHeight={1}
        >
          <Link to="/c/major">Chord Explorer</Link>
        </Heading>
      </HStack>
    </HStack>
  );
};
