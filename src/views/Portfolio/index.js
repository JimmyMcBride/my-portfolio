import React from "react";

import { Wrapper, Box, Card, Col, theme } from "bushido-strap";

import Nav from "../../components/Nav";
import Projects from "./components/Projects";

export default function Portfolio() {
  return (
    <Wrapper>
      <Nav />
      <Card invert bg={theme.blackAlpha8} w="80%" max_w="786.77px">
        <Box h="2.4rem" />
        {/* <Card invert noshadow opacity="0.9"> */}
        <Box h="2rem" />
        <Box>
          <h2>My Portfolio</h2>
        </Box>
        <Box h="2rem" />
        <h5>Some of the recent projects I've worked on:</h5>
        <Box h="2rem" />
        {/* </Card> */}
        <Projects />
        <Box h="8rem" />
      </Card>
    </Wrapper>
  );
}
