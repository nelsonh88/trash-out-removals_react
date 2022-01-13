import React from "react";

const PhoneContact = (props) => {
  return (
    <div className={props.className}>
      <p>
        {props.children}
        <a href="tel:617-279-9782">617-279-9782</a>
      </p>
    </div>
  );
};

export default PhoneContact;
