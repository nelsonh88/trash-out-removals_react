import React from "react";

const EmailContact = (props) => {
  return (
    <div className={props.className}>
      <p>
        {props.children}
        <a href="mailto:ernstrock@gmail.com?subject=Mail%20from%20Our%20Site">
          {props.text}
        </a>
      </p>
    </div>
  );
};

export default EmailContact;
