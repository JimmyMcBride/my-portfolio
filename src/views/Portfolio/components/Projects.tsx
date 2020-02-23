import React from "react";

import ProjectCard from "./subComponents/ProjectCard";

import projects from "./assets/projects";

const { Flex } = require("bushido-strap");

export default function Projects() {
  return (
    <Flex col>
      <ProjectCard
        title={projects.nutri.title}
        url={projects.nutri.url}
        github={projects.nutri.github}
        img={projects.nutri.img}
        youTube={projects.nutri.youTube}
        npm={null}
        description={projects.nutri.description}
      />
      <ProjectCard
        title={projects.bug.title}
        url={projects.bug.url}
        github={projects.bug.github}
        img={projects.bug.img}
        youTube={projects.bug.youTube}
        npm={null}
        description={projects.bug.description}
      />
      <ProjectCard
        title={projects.bushido.title}
        url={projects.bushido.url}
        github={null}
        img={projects.bushido.img}
        youTube={projects.bushido.youTube}
        npm={projects.bushido.npm}
        description={projects.bushido.description}
      />
      <ProjectCard
        title={projects.fireBot.title}
        url={projects.fireBot.url}
        github={projects.fireBot.github}
        img={projects.fireBot.img}
        youTube={projects.fireBot.youTube}
        npm={null}
        description={projects.fireBot.description}
      />
      <ProjectCard
        title={projects.theory.title}
        url={projects.theory.url}
        github={projects.theory.github}
        img={projects.theory.img}
        youTube={projects.theory.youTube}
        npm={null}
        description={projects.theory.description}
      />
      <ProjectCard
        title={projects.rick.title}
        url={projects.rick.url}
        github={projects.rick.github}
        img={projects.rick.img}
        youTube={projects.rick.youTube}
        npm={null}
        description={projects.rick.description}
      />
    </Flex>
  );
}
