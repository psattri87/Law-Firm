import React from "react";
import styles from "./SliderButton.module.css";
import arrowIcon from "../../assets/arrow.svg";

function SliderButton({ direction = "left", onClick = () => {}, className="" }) {
  return (
    <div
      className={`${styles.sliderButton} ${
        direction === "right" ? styles.right : styles.left
      } ${className}`}
      onClick={onClick}
    >
      <img src={arrowIcon} alt="icon" />
    </div>
  );
}

export default SliderButton;
