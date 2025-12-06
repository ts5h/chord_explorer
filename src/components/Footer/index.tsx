import { HStack, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaCoffee, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  children: ReactNode;
};

const FooterButton = ({ title, children }: Props) => {
  return (
    <IconButton
      variant="ghost"
      aria-label={title}
      title={title}
      size="sm"
      color="gray.500"
      _hover={{
        bgColor: "transparent",
        color: "gray.600",
      }}
    >
      {children}
    </IconButton>
  );
};

export const Footer = () => {
  return (
    <HStack w="full" pt={10} pb={3}>
      <Text color="gray.500" fontSize="xs">
        &copy;&nbsp;2023&nbsp;ts5h
      </Text>
      <Spacer />
      <HStack gap={0}>
        <Link
          href="https://buymeacoffee.com/atsushiyamazaki"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <FooterButton title={"Buy me a coffee"}>
            <FaCoffee />
          </FooterButton>
        </Link>
        <Link
          href="https://github.com/ts5h/chord_explorer"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <FooterButton title={"GitHub"}>
            <FaGithub />
          </FooterButton>
        </Link>
      </HStack>
    </HStack>
  );
};
