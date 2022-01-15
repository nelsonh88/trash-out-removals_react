import React from "react";

const Button = (props) => {
  return (
    <button className={props.className}>
      <a href={props.link}>{props.text}</a>
    </button>
  );
};

export default Button;
