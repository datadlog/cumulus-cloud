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
    <Stack>
      <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
        &copy; {new Date().getFullYear()} DataDlog. All rights reserved.
      </Text>
    </Stack>
  </Box>
);
