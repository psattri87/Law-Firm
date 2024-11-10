import React, { useState } from "react";
import styles from "./MyAccordion.module.css";

export const MyAccordion = ({
  id,
  question,
  answer,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div className={styles.myAccordion}>
      {id !== 1 && <div className={styles.hl}></div>}
      <div className={styles.heading}>
        <h2>{question}</h2>
        
          <span className={id === selectedId && styles.hideBtn}
            onClick={() => {
              setSelectedId(id);
            }}
          >
            +
          </span>
        
      </div>
      {/* {id === selectedId ? <p className={`${styles.answer} ${styles.hide}`}>{answer}</p>:""} */}
      <p className={`${styles.hide} ${id === selectedId && styles.show} `}>{answer}</p>
    </div>
  );
};
