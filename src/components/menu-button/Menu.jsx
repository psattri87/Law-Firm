import React from 'react'
import styles from "./Menu.module.css"

function Menu({className}) {
  return (
    <div className={`${styles.menu} ${className}`}>
        <div>Home</div>
        <div>Attorneys</div>
        <div>Practice Area</div>
        <div>About Us</div>
    </div>
  )
}

export default Menu