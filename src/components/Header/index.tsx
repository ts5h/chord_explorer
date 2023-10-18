import React, { FC } from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <HStack w="full" justify="center" bgColor="gray.400" color="white">
      <HStack w="full" maxW="1240px" align="end" px={5} py={2}>
        <Heading as="h1" size="xs" fontWeight="normal" lineHeight={1}>
          <Link to="/c/major">Chord Explorer</Link>
        </Heading>
      </HStack>
    </HStack>
  );
};
