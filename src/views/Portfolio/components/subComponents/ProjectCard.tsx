import React from "react";

const { Box, Card } = require("bushido-strap");

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
    <Card invert noshadow m="3rem 0" w="30rem">
      <a href={url}>
        <h3>
          <strong>{title}</strong>
        </h3>
      </a>
      <a href={url}>
        <Box w="29rem">
          <img src={img} alt="project logo" />
        </Box>
        <Box h="2rem" />
      </a>
      {youTube ? (
        <a href={youTube}>
          <strong>Watch our demo video here!</strong>
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
  );
}
