import React, { useState } from "react";
import styles from "@/styles/etc/support.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import line from '@/assets/line.png'
import Image from "next/image";

const Support = () => {
  return (
    <div className={styles.supScreen}>
    <div className={styles.top}>
      <Link href={"/Main/MainScreen"}>
        <ChevronLeftIcon style={{color:"#333333"}}/>
      </Link>
      <h2 className={styles.header}>ศูนย์ช่วยเหลือ</h2>
    </div>
    <div className={styles.supContainer}>
      <h4>ติดต่อเรา</h4>
        <div className={styles.box}>
            <LocalPhoneIcon style={{color:"#0068f9",marginRight:10}}/>
            <p style={{color:"#333333"}}>091-234-5678</p>
        </div>
        <div className={styles.box}>
            <Image src={line} alt={line} className={styles.icon}/>
            <p style={{color:"#333333"}}>Line id : @xxxxx</p>
        </div>
        <p className={styles.des}>เวลาให้บริการตั้งแต่ 9:00 น. - 21:00 น.</p>
    </div>
  </div>
  )
}

export default Support