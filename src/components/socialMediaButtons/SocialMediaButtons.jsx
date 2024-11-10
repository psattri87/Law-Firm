import React from "react";
import styles from "./SocialMediaButtons.module.css";
import instaIcon from "../../assets/social-media-icons/instagram.svg";
import fbIcon from "../../assets/social-media-icons/facebook.svg";
import twitterIcon from "../../assets/social-media-icons/twitter.svg";
import pinterestIcon from "../../assets/social-media-icons/pinterest.svg";

function SocialMediaButtons() {
  return (
    <div className={styles.container}>
      <img src={instaIcon} alt="socialMedia Icon" />
      <img src={fbIcon} alt="socialMedia Icon" />
      <img src={twitterIcon} alt="socialMedia Icon" />
      <img src={pinterestIcon} alt="socialMedia Icon" />
    </div>
  );
}

export default SocialMediaButtons;
