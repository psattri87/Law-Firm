import React from 'react'
import logo from "../../assets/Logo_svg.svg"

function Logo() {
  return (
    <div style={{cursor:'pointer'}}>
        <img src={logo} alt="logo-image" />
    </div>
  )
}

export default Logo