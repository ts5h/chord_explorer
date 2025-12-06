import { Heading, HStack } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router";

export const Header = () => {
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
