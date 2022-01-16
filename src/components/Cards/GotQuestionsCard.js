import React from "react";

import Headline from "../UI/Headline";

const GotQuestionsCard = () => {
  return (
    <section className="info alternate" id="questions-section">
      <Headline text="Got Questions?"></Headline>
      <p>
        <a href="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site">
          Reach out to us we love to talk trash
        </a>
      </p>
    </section>
  );
};

export default GotQuestionsCard;
