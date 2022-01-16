import React from "react";

import Headline from "../UI/Headline";
import Button from "../UI/Button";
import DetailsBody from "./Details/DetailsBody";

import clocksImg from "../../assets/clocks.png";
import junkyardImg from "../../assets/junkyard.png";

const LetsTalkTrash = () => {
  return (
    <section className="info" id="service-section">
      <Headline text="Let's Talk Trash"></Headline>
      <DetailsBody
        className="fas fa-trash-alt"
        subheadline="What we take:"
        bodyText="If you need it out then don't waste time! We take the following but not limited to:"
        listItems={[
          "Appliances",
          "Furniture, Mattresses and Box Springs",
          "Hot Tubs and Spas",
          "Radiators",
          "Televisions and Monitors",
          "Tires",
          "Wood, Metal, and Plastic",
          "Yard Waste",
        ]}
        image={clocksImg}
        altText="Clocks"
        photoCredLink="https://unsplash.com/@heatherz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        photoAuthor="Heather Zabriskie"
      ></DetailsBody>
      <Button
        className="cta"
        link="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site"
        text="Get a free quote"
      ></Button>
      <DetailsBody
        id="reverse"
        className="fas fa-trash-alt"
        subheadline="Types of services we provide:"
        bodyText="We love to provide removal services. The type of services we provide are but not limited to:"
        listItems={[
          "Basement, Garage, and Yard Clean Outs",
          "Construction and Demolition Removal",
          "Estate Clean Outs",
          "New Home Unwanted Junk Removal",
          "Office Clean Outs",
        ]}
        image={junkyardImg}
        altText="Junkyard"
        photoCredLink="https://unsplash.com/@joshstyle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        photoAuthor="Joshua Coleman"
      ></DetailsBody>
      <Button
        className="cta"
        link="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site"
        text="Get a free quote"
      ></Button>
    </section>
  );
};

export default LetsTalkTrash;
