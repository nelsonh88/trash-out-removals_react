import React from "react";

const MainWrapper = (props) => {
  return (
    <main className="wrapper" id="wrapper">
      {props.children}
    </main>
  );
};

export default MainWrapper;
