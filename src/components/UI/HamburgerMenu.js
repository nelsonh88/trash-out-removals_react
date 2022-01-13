import react from "react";

const HamburgerMenu = () => {
  return (
    <div class="ham-menu">
      <button class="ham-btn" id="ham-btn" onclick="toggle()">
        <span class="fas fa-bars"></span>
      </button>
    </div>
  );
};

export default HamburgerMenu;
