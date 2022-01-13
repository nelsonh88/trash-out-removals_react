import react from "react";

import HeaderWrapper from "./HeaderWrapper";
import Logo from "../UI/Logo";
import PhoneContact from "../UI/PhoneContact";
import EmailContact from "../UI/EmailContact";
import HamburgerMenu from "../UI/HamburgerMenu";

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <Logo className="header-logo"></Logo>
        <PhoneContact className="phone-contact">
          <span class="fas fa-phone-alt"></span>
        </PhoneContact>
        <EmailContact className="email-contact" text="Email Us">
          <span class="far fa-envelope"></span>
        </EmailContact>
      </HeaderWrapper>
      <HamburgerMenu></HamburgerMenu>
    </header>
  );
};

export default Header;
