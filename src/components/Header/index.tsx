import React from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HStack w="full" justify="center" bgColor="gray.400" color="white">
      <HStack w="full" maxW="1240px" align="end" p={5} pt={7} pb={3}>
        <Heading as="h1" size="lg" fontWeight="500" lineHeight={1}>
          <Link to="/">Chord Player</Link>
        </Heading>
      </HStack>
    </HStack>
  );
};
