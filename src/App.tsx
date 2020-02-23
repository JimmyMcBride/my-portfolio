import React from "react";

// Importing all routes
import Dashboard from "./views/Dashboard";
import Portfolio from "./views/Portfolio";
import Blog from "./views/Blog";
import Bushido from "./views/Bushido";

// Using Web Font Loader for google fonts
const WebFont = require("webfontloader");

// Using custom styled components from Global folder in components
const { AppWrapper } = require("bushido-strap");

// Set up all routes in App
const { Route, Switch } = require("react-router-dom");

const h_font = "Comfortaa";
const r_font = "Montserrat";

WebFont.load({
  google: {
    families: [h_font, r_font],
  },
});

const img_url: string =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fcolorful-qhd-3840x2160.jpg&f=1&nofb=1";

export default function App() {
  return (
    <AppWrapper bg_src={img_url} head_font={h_font} font={r_font}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/bushido" component={Bushido} />
      </Switch>
    </AppWrapper>
  );
}
