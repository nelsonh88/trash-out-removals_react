import React from "react";

import Headline from "../UI/Headline";
import Button from "../UI/Button";

const ContactUsCard = () => {
  return (
    <section className="info alternate" id="contact-us-section">
      <Headline text="About Us"></Headline>
      <p>
        Email:{" "}
        <a
          href="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site"
          style={{ color: "#000" }}
        >
          ernstrock@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:617-279-9782" style={{ color: "#000" }}>
          617-279-9782
        </a>
      </p>
      <p>Hours of Operation: Mon - Sun 8:00 AM - 8:00 PM</p>
      <Button
        className="cta"
        link="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site"
        text="Book now"
      ></Button>
    </section>
  );
};

export default ContactUsCard;
