import React from "react";

import { Wrapper, Box, Card, theme } from "bushido-strap";

import ReactMarkdown from "react-markdown";

import me from "./assets/me.jpg";
import { about } from "./assets/about.js";

import Nav from "../../components/Nav";

export default function Dashboard() {
  return (
    <Wrapper className="dashboard-wrapper">
      <Nav />
      <Card bg={theme.blackAlpha8} invert opacity="0.9" onMouseEnter="0">
        <Box h="2rem" />
        <h1>Hello, world! I'm Jimmy McBride</h1>
        <Box h="2rem" />
        <Box w="35rem" h="35rem" radius="20rem">
          <img src={me} alt="Jimmy McBride" />
        </Box>

        <Box h="2rem" />
        <ReactMarkdown source={about} />
      </Card>
    </Wrapper>
  );
}
