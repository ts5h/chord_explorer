import React, { FC } from "react";
import { Box, Link, Text } from "@chakra-ui/react";

export const Footer: FC = () => {
  return (
    <Box pt={10} pb={5}>
      <Text color="gray.400" fontSize="xs">
        &copy; 2023{" "}
        <Link href="https://github.com/ts5h" target="_blank">
          ts5h
        </Link>
      </Text>
    </Box>
  );
};
