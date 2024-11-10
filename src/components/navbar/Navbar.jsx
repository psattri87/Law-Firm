import Styles from "./Navbar.module.css";
import React from "react";
import Logo from "../logo/Logo";
import Menu from "../menu-button/Menu";
import Button from "../button/Button";

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <Logo />
      <Menu />
      <Button>Contact Now</Button>
    </div>
  );
}

export default Navbar;
