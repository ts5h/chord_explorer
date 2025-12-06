import { HStack, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <HStack w="full" pt={10} pb={5}>
      <Text color="gray.500" fontSize="xs">
        &copy;&nbsp;2023&nbsp;ts5h
      </Text>
      <Spacer />
      <HStack gap={0}>
        <Link href="https://github.com/ts5h/chord_explorer" target="_blank">
          <IconButton
            aria-label="GitHub"
            title="GitHub"
            size="sm"
            bgColor="transparent"
            color="gray.500"
            _hover={{
              bgColor: "transparent",
              color: "gray.600",
            }}
          >
            <FaGithub />
          </IconButton>
        </Link>
      </HStack>
    </HStack>
  );
};
