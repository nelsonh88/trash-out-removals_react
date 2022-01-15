import React from "react";

const Navigation = (props) => {
  const listItems = props.navItems.map((item, i) => {
    return (
      <li id={item.link} key={item.key || i}>
        <a href={item.link}>{item.listName}</a>
      </li>
    );
  });

  return (
    <div className="nav-links" id="nav-links">
      <nav>{listItems}</nav>
    </div>
  );
};

export default Navigation;
