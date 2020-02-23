import nutricon from "../assets/nutri-icon.png";
import lambda from "../assets/lambda-icon.png";
import firebot from "../assets/fire.png";
import danger from "../assets/guitar-art.jpg";
import picklerick from "../assets/pickle-rick.png";
import bushido from "../assets/react-logo.png";

const projects = {
  nutri: {
    title: "NutriJournal",
    url: "https://getnutrijournal.com/",
    github:
      "https://github.com/orgs/Lambda-School-Labs/teams/labs-pt5-nutrition-tracker/repositories",
    img: nutricon,
    youTube: "https://youtu.be/dfo-dKgYai8",
    description:
      "A nutrition tracking app that allows you to set custom nutrition goals and tracks your progress."
  },
  bug: {
    title: "Lambda Bug Tracker",
    url: "https://lambda-bug-tracker.firebaseapp.com/",
    github: "https://github.com/Lambda-Bug-Tracker",
    img: lambda,
    youTube: "https://youtu.be/0bfnV-ZGwKc",
    description:
      "A bug tracking application. Start keeping track of your projects today!"
  },
  bushido: {
    title: "The Bushido React Pack",
    url: "https://www.npmjs.com/~jimmymcbride",
    npm: "https://www.npmjs.com/~jimmymcbride",
    youTube: null,
    img: bushido,
    description:
      "A group of templates and a style library for efficiently bootstrapping your React projects!"
  },
  fireBot: {
    title: "FireBot",
    url: "https://fire-bot-docs.firebaseapp.com/",
    github: "https://github.com/JimmyMcBride/FireBot",
    youTube: null,
    img: firebot,
    description:
      "An incredibly useful discord bot I built using node and discord.js."
  },
  theory: {
    title: "DANGER! Music Theory",
    url: "https://jimmymcbride.github.io/DANGER-Music-Theory/",
    github: "https://github.com/JimmyMcBride/DANGER-Music-Theory",
    youTube: null,
    img: danger,
    description:
      "A group of templates and a style library for efficiently bootstrapping your React projects!"
  },
  rick: {
    title: "Rick and Morty API",
    url: "https://rick-and-morty-redux-hooks.firebaseapp.com/",
    github: "https://github.com/JimmyMcBride/rick-and-morty-redux-hooks",
    youTube: null,
    img: picklerick,
    description:
      "A group of templates and a style library for efficiently bootstrapping your React projects!"
  }
};

export default projects;
