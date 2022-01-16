import React from "react";

import UnorderedList from "../../UI/UnorderedList";
import DetailsImg from "./DetailsImg";

const DetailsBody = (props) => {
  return (
    <div className="details">
      <div className="details-text" id={props.id || ""}>
        <h3>
          <span className={props.className}></span>
          {props.subheadline}
        </h3>
        <p>{props.bodyText}</p>
        <UnorderedList listItems={props.listItems}></UnorderedList>
      </div>
      <DetailsImg
        image={props.image}
        altText={props.altText}
        photoCredLink={props.photoCredLink}
        photoAuthor={props.photoAuthor}
      ></DetailsImg>
    </div>
  );
};

export default DetailsBody;
