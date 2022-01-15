import react from "react";

const HamburgerMenu = (props) => {
  return (
    <div className="ham-menu">
      <button
        className="ham-btn"
        id="ham-btn"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        <span className="fas fa-bars"></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
