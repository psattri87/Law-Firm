import React from "react";
import styles from "./Introduce.module.css";

function Introduce() {
  return (
    <div className={styles.container}>
      <div className={styles.textLeft}>
        <h1>Let’s Introduce Ourself</h1>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.textRight}>
        <h3>Criminal Lawyer</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduce;
