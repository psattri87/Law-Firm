import React from "react";
import styles from "./Avatar.module.css";

function Avatar({ children, className="" }) {
  return <div className={`${styles.avatar} ${className}`}>{children}</div>;
}

export default Avatar;
