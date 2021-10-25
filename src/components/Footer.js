import { Box, Stack, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import * as React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = (props) => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} DataDlog. All rights reserved.
      </Text>

      <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton
          as="a"
          href="https://github.com/datadlog"
          aria-label="GitHub"
          icon={<FaGithub fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://twitter.com/datadlog"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="20px" />}
        />
      </ButtonGroup>
    </Stack>
  </Box>
);
