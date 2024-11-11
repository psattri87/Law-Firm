import React, { useEffect, useState } from "react";
import styles from "./Accordion.module.css";
import { MyAccordion } from "./MyAccordion";

function Accordion({ questions }) {
  const [data, setData] = useState(questions);
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    const element = document.getElementsByClassName("answer");
  
    return () => {
      
    }
  }, [selectedId])
  

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return (
          <MyAccordion
            key={item.id}
            {...item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
