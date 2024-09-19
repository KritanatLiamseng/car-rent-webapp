import React from "react";
import styles from "@/styles/etc/noti.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ToggleSwitch from "@/components/ToggleSwitch";

const Notification = () => {
  return (
    <div className={styles.notiScreen}>
      <div className={styles.top}>
        <Link href={"/Main/MainScreen"}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2 className={styles.header}>การแจ้งเตือนของแอพ</h2>
      </div>
      <div className={styles.notiContainer}>
        <h4>การแจ้งเตือนของแอพ</h4>
        <div className={styles.switchArea}>
            <p style={{color:"#333333"}}>โปรโมชั่น</p>
            <ToggleSwitch/>
        </div>
        <div className={styles.switchArea}>
            <p style={{color:"#333333"}}>ข้อความ</p>
            <ToggleSwitch/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Notification;
