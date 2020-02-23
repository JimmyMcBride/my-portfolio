import React from "react";

import Nav from "../../components/Nav";
import Projects from "./components/Projects";

const { Wrapper, Box, Card, Text, theme } = require("bushido-strap");

export default function Portfolio() {
  return (
    <Wrapper>
      <Nav />
      <Card invert m="0" bg={theme.blackAlpha8} stretch max_w="80rem" noshadow>
        <Box h="2.4rem" />
        <Card bg={theme.gray7} noshadow>
          <Card bg={theme.whiteAlpha5} noshadow stretch>
            <Card noshadow p="2rem" stretch invert>
              <Box h="2rem" />
              <Box>
                <Text bold f_size="5rem">
                  My Portfolio
                </Text>
              </Box>
              <Box h="2rem" />
              <Text xlf>Some of the recent projects I've worked on:</Text>
              <Box h="2rem" />
            </Card>
          </Card>
          <Projects />
        </Card>
      </Card>
    </Wrapper>
  );
}
