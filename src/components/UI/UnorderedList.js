import React from "react";

const UnorderedList = (props) => {
  const list = props.listItems.map((listItem, i) => {
    return <li key={listItem.key || i}>{listItem}</li>;
  });

  return <ul>{list}</ul>;
};

export default UnorderedList;
