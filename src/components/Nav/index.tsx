import React from "react";

import "./styles.scss";

import { NavLink } from "react-router-dom";

const { Box, NavBar, Flex, theme } = require("bushido-strap");

export default function Nav() {
  return (
    <NavBar ai_center jc_center bg={theme.blackAlpha6}>
      {/* <Box w="15rem" /> */}
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
      {/* <Flex ai_center m="0" w="15rem"> */}
      {/* <Button orange>
          <Text f_size="1.4rem">Sign up</Text>
          <Box stretch h="0.2rem" bg={theme.gray1} />
          <Text f_size="1.4rem">Login</Text>
        </Button> */}
      {/* </Flex> */}
    </NavBar>
  );
}
