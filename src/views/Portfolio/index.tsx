import React from "react";

import Nav from "../../components/Nav";
import Projects from "./components/Projects";

const { Wrapper, Box, Card, Text, Linkton, theme } = require("bushido-strap");

export default function Portfolio() {
  return (
    <Wrapper>
      <Nav />
      <Card invert m="0" bg={theme.blackAlpha8} stretch max_w="80rem" noshadow>
        <Box h="2.4rem" />
        <Card invert noshadow opacity="0.9" p="2rem">
          <Box h="2rem" />
          <Box>
            <Text bold f_size="5rem" color={theme.gray0}>
              My Portfolio
            </Text>
          </Box>
          <Box h="2rem" />
          <Text xlf>Some of the recent projects I've worked on:</Text>
          <Box h="2rem" />
          {/* <Linkton to="/">Home</Linkton> */}
        </Card>
        <Projects />
        <Box h="8rem" />
      </Card>
    </Wrapper>
  );
}
