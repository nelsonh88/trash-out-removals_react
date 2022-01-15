import React from "react";

import logoImage from "../../assets/trash-out-removals-logo.png";

const Logo = (props) => {
  return (
    <div className={props.className}>
      <a href="#wrapper">
        <img src={logoImage} alt="Trash Out Removals Logo" />
      </a>
    </div>
  );
};

export default Logo;
