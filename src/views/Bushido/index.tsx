import React from "react";

import Nav from "../../components/Nav";

const { Wrapper } = require("bushido-strap");

export default function Bushido() {
  return (
    <Wrapper>
      <Nav />
      <h2>The Bushido React Pack</h2>
    </Wrapper>
  );
}
