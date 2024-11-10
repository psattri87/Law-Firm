import React from 'react'
import styles from "./Home.module.css"
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'

function Home() {
  return (
    <div className={styles.Home}>
        <div className={styles.container}>
        <Navbar/>
        <Hero/>
        </div>
    </div>
  )
}

export default Home