import React from 'react'
import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <div className={styles.container}>
        <h1>Subscribe Our Newsletter</h1>
        <form action="submit">
            <input type="text" name="fullName" id="fullName" placeholder='Name'/>
            <input type="email" name="email" id="email" placeholder='Enter your Email'/>
            <button type="submit">SEND</button>
        </form>
    </div>
  )
}

export default Subscribe