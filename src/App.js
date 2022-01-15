import React from "react";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const navItems = [
  {
    listName: "Home",
    link: "#wrapper",
  },
  {
    listName: "Services",
    link: "#service-section",
  },
  {
    listName: "About Us",
    link: "#about-us-section",
  },
  {
    listName: "Contact Us",
    link: "#contact-us-section",
  },
];

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Navigation navItems={navItems}></Navigation>
    </React.Fragment>
  );
}

export default App;
