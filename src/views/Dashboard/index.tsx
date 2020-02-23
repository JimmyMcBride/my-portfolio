import React from "react";

import ReactMarkdown from "react-markdown";

import me from "./assets/me.jpg";
import { about } from "./assets/about.js";

import Nav from "../../components/Nav";

const { Wrapper, Box, Card, theme } = require("bushido-strap");

export default function Dashboard() {
  return (
    <Wrapper>
      <Nav />
      <Card
        bg={theme.blackAlpha8}
        invert
        m="0"
        stretch
        max_w="80rem"
        ta_center
        noshadow
      >
        <Box h="2rem" />
        <h1>Hello, world! I'm Jimmy McBride</h1>
        <Box h="2rem" />
        <Box w="35rem" h="35rem" radius="20rem">
          <img src={me} alt="Jimmy McBride" />
        </Box>

        <Box h="2rem" />
        <Box w="80%" ta_center>
          <ReactMarkdown source={about} />
        </Box>
        <Box h="4rem" />
      </Card>
    </Wrapper>
  );
}
