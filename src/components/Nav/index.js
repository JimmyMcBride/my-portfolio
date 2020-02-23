import React from "react";

import "./styles.scss";

import { Box, NavBar, FlexBox, Linkton } from "bushido-strap";

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <NavBar h="3.6rem" jc_around background="rgba(0, 0, 0, 0.4)">
      <Box w="154.56px" />
      <FlexBox margin="0">
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
      </FlexBox>
      <FlexBox align="center" margin="0">
        <Linkton>Sign up/Login</Linkton>
      </FlexBox>
    </NavBar>
  );
}
