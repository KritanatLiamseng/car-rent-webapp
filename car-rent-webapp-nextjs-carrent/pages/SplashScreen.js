import styles from '@/styles/splash.module.css'
import React from 'react'
import Image from 'next/image'
import icon from '../assets/icon.png'

export default function SplashScreen() {
  return (
<div className={styles.splashscreen} >
    <Image src={icon} className={styles.icon} alt='logo'/>
    <h1 className={styles.text}>ค้นหารถเช่า</h1>
</div>
  )
}