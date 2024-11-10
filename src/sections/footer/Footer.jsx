import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu-button/Menu";
import SocialMediaButtons from "../../components/socialMediaButtons/SocialMediaButtons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div>
        <Logo />
        <Menu className={styles.menu}/>
        <SocialMediaButtons />

        </div>
        <div className={styles.lastContent}>
            <h3>© 2020 Acme. All right reserved.</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
        </div>
      </div>
    </div>
  );
}
