import React from "react";

import Button from "../UI/Button";

import hero from "../../assets/trash-out_owner-and-truck.png";

const InfoCard = () => {
  return (
    <section className="info alternate" id="home-section">
      <img src={hero} alt="Trash Out Removals Truck and Owner Ernst Louis" />
      <h1>Welcome To Your Junk&nbsp;Freedom</h1>
      <p>
        Trash Out Removals can turn any space from ugly to beautiful in one
        trip. One thing that often holds people back from cleaning up their
        space is finding out who can take away the trash and all the junk. The
        good news is that we can do that for you! When you hire us for trash and
        junk removal you will experience:
      </p>
      <ul>
        <li>Attention to Detail Junk Removals</li>
        <li>Quick Junk Removals</li>
        <li>Service With a Smile</li>
        <li>Stress Free Junk Removal</li>
        <li>Timely Junk Removal</li>
      </ul>
      <Button
        className="cta"
        link="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site"
        text="Email now"
      ></Button>
    </section>
  );
};

export default InfoCard;
