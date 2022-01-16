import React, { useState } from "react";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import MainWrapper from "./components/UI/MainWrapper";
import InfoCard from "./components/Cards/InfoCard";
import LetsTalkTrash from "./components/Cards/LetsTalkTrash";

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
  const [displayNav, setDisplayNav] = useState(false);
  const onToggleHandler = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <React.Fragment>
      <Header toggle={onToggleHandler}></Header>
      {displayNav ? <Navigation navItems={navItems}></Navigation> : ""}
      <MainWrapper>
        <InfoCard></InfoCard>
        <LetsTalkTrash></LetsTalkTrash>
      </MainWrapper>
    </React.Fragment>
  );
}

export default App;
