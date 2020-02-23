import React from "react";

import Nav from "../../components/Nav";

const { Wrapper } = require("bushido-strap");

export default function Blog() {
  return (
    <Wrapper>
      <Nav />
      <h2>My Blog</h2>
    </Wrapper>
  );
}
