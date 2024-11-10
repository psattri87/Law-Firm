import React from "react";
import styles from "./Faqs.module.css";
import { questions } from "./api.js";
import Accordion from "../../components/accordion/Accordion.jsx";

function Faqs() {
  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      <div className={styles.contentBox}>
        <div className={styles.leftDiv}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <Accordion questions={questions} />
      </div>
    </div>
  );
}

export default Faqs;
