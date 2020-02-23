import React from "react";

// Set up all routes in App
import { Route, Switch } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "bushido-strap";

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";

// Importing all routes
import Dashboard from "./views/Dashboard";
import Portfolio from "./views/Portfolio";
import Blog from "./views/Blog";
import Bushido from "./views/Bushido";

const h_font = "Comfortaa";
const r_font = "Montserrat";

WebFont.load({
  google: {
    families: [h_font, r_font]
  }
});

const img_url =
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
