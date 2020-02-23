import React from "react";

const { Box, Card, Text, Flex, theme } = require("bushido-strap");

export default function ProjectCard(props: {
  url: string;
  github: any;
  img: string;
  youTube: any;
  title: string;
  description: string;
  npm: any;
}) {
  const { url, github, img, youTube, title, description, npm } = props;

  return (
    <Card bg={theme.whiteAlpha5} noshadow>
      <Card
        invert
        noshadow
        stretch
        row
        wrap
        jc_center
        ai_start
        ac_center
        p="1rem"
      >
        <a href={url}>
          <Box w="26rem">
            <img src={img} alt="project logo" />
          </Box>
          {/* <Box h="2rem" /> */}
        </a>
        <Box w="1rem" />
        <Flex drape w="44rem">
          <a href={url}>
            <Text xlf color={theme.gray0}>
              {title}
            </Text>
          </a>
          <Card shadow>
            {youTube ? (
              <a href={youTube}>
                <Text bold color={theme.red6}>
                  Watch our demo video here!
                </Text>
              </a>
            ) : null}
            <Box h="1rem" />
            {github ? (
              <a href={github}>Link to GitHub</a>
            ) : (
              <a href={npm}>Link to NPM profile</a>
            )}
            <Box h="2rem" />
            <p>
              <strong>{title}</strong>: {description}
            </p>
          </Card>
        </Flex>
      </Card>
    </Card>
  );
}
