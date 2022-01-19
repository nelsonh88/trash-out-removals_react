import React, { useState, useEffect } from "react";

import useScreenWidth from "./Hooks/use-screen-width";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import MainWrapper from "./components/UI/MainWrapper";
import InfoCard from "./components/Cards/InfoCard";
import LetsTalkTrash from "./components/Cards/LetsTalkTrash";
import GotQuestionsCard from "./components/Cards/GotQuestionsCard";
import AboutUsCard from "./components/Cards/AboutUsCard";
import ContactUsCard from "./components/Cards/ContactUsCard";
import Footer from "./components/Footer/Footer";

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
  const width = useScreenWidth();

  useEffect(() => {
    width > 768 && setDisplayNav(false);
  }, [width]);

  const onToggleHandler = () => {
    setDisplayNav(!displayNav);
  };

  return (
    <React.Fragment>
      <Header toggle={onToggleHandler}></Header>
      {displayNav ? <Navigation navItems={navItems}></Navigation> : ""}
      <MainWrapper>
        {width >= 768 ? <Navigation navItems={navItems}></Navigation> : ""}
        <InfoCard></InfoCard>
        <LetsTalkTrash></LetsTalkTrash>
        <GotQuestionsCard></GotQuestionsCard>
        <AboutUsCard></AboutUsCard>
        <ContactUsCard></ContactUsCard>
      </MainWrapper>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
