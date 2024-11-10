import React from "react";
import styles from "./PracticeArea.module.css";

import image3 from "../../assets/practice-area-images/image-3.png";
import image4 from "../../assets/practice-area-images/image-4.png";
import image5 from "../../assets/practice-area-images/image-5.png";
import image6 from "../../assets/practice-area-images/image-6.png";

const image1 = require("../../assets/practice-area-images/image-1.png");
const image2 = require("../../assets/practice-area-images/image-2.png");

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context(
    "../../assets/practice-area-images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const ImageGallery = () => {
  return (
    <div className={styles.gridContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`item ${index + 1}`}
          className={styles.item}
        />
      ))}
    </div>
  );
};

// console.log(ImageGallery);

function PracticeArea() {
  return (
    <div className={styles.practiceArea}>
      <h1>Area of Practices</h1>
      <div className={styles.gridContainer}>
        <div className={`${styles.itemContainer} ${styles.col2}`}>
          <div className={`${styles.item} ${styles.col2} ${styles.item1}`}>
            <h2 className={styles.content}>BUSINESS LAW</h2>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={`${styles.item} ${styles.item2}`}>
            <h2 className={styles.content}>Partnership LAW</h2>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={`${styles.item} ${styles.item3}`}>
            <h2 className={styles.content}>REAL ESTATE LAW</h2>
          </div>
        </div>
        <div className={`${styles.itemContainer} ${styles.col2}`}>
          <div className={`${styles.item} ${styles.col2} ${styles.item4}`}>
            <h2 className={styles.content}>BUSINESS LAW</h2>
          </div>
        </div>
        <div className={`${styles.itemContainer} ${styles.col2}`}>
          <div className={`${styles.item} ${styles.col2} ${styles.item5}`}>
            <h2 className={styles.content}>LANDLORD DISPUTES</h2>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={`${styles.item} ${styles.item6}`}>
            <h2 className={styles.content}>ELDER ABUSE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
