import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/Hero_image.png";
import emailIcon from "../../assets/Email_icon.svg";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <div>
          <h1>You don’t have to <span>Fight them Alone.</span> </h1>
          
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.talkBox}>
          <div className={styles.email}>
            <img src={emailIcon} alt="email_icon" />
            <input type="email" placeholder="Enter you email address" />
          </div>
          <div className={styles.talkButton}>Let's Talk</div>
        </div>
      </div>
      <div >
        <img src={heroImage} alt="Hero_Image" />
      </div>
    </div>
  );
}

export default Hero;
