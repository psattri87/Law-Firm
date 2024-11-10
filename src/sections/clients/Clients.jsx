import React from "react";
import styles from "./Clients.module.css";
import SliderButton from "../../components/sliderButton/SliderButton";
import MyCarousel from "../../components/carousel/MyCarousel";


function Clients() {
    
  return (
    <div className={`${styles.clients} ${styles.flexBox}`}>
      <div className={`${styles.flexBox} ${styles.fullWidth}`}>
        <h1>What says our happy Clients</h1>
      </div>
      <div className={`${styles.carouselContainer}`}>
        <MyCarousel/>
      </div>
    </div>
  );
}

export default Clients;
