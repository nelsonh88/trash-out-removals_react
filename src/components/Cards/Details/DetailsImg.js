import React from "react";

const DetailsImg = (props) => {
  return (
    <div className="details-img">
      <figure>
        <img src={props.image} alt={props.altText} />
        <figcaption>
          <span className="photo-credit">
            Photo by{" "}
            <a href={props.photoCredLink} target="_blank" rel="noreferrer">
              {props.photoAuthor}
            </a>
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default DetailsImg;
