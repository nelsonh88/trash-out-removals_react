import React from "react";

import Logo from "../UI/Logo";

const Footer = () => {
  return (
    <footer>
      <Logo className="footer-content">
        <p>
          <a href="#top">Home</a> |{" "}
          <a href="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site">
            Contact Us
          </a>
        </p>
        <p>
          <a href="tel:617-279-9782">617-279-9782</a>
        </p>
        <p>Based out of Everett, MA</p>
        <p id="copyright">© Copyright 2022 Nelson Huezo</p>
      </Logo>
    </footer>
  );
};

export default Footer;
