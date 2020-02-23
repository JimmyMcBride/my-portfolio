import React from "react";

import { NavLink } from "react-router-dom";

const { Box, Flex, Button, NavBar } = require("bushido-strap");

export default function Nav() {
  return (
    <NavBar h="3.6rem" jc_around>
      <Box w="154.56px" />
      <Flex m="0">
        <Box className="nav-box">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </Box>
        <Box className="nav-box">
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </Box>
        {/* <Box className="nav-box">
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </Box>
      <Box className="nav-box">
        <NavLink to="/bushido" activeClassName="active">
          Bushido React Pack
        </NavLink>
      </Box> */}
      </Flex>
      <Flex ai_center m="0">
        <Button>Sign up/Login</Button>
      </Flex>
    </NavBar>
  );
}
