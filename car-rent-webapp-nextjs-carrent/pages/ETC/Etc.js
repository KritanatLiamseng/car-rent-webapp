import React from 'react'
import styles from '@/styles/etc/etc.module.css'
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useRouter } from 'next/router';

const Etc = () => {
  const router = useRouter();

  const gotoLogin = () =>{
    router.push('../Login/Login')
  }
  const gotoProfile = () =>{
    router.push('../ETC/Profile')
  }
  const gotoNoti = () =>{
    router.push('../ETC/Notification')
  }
  const gotoLanguage = () =>{
    router.push('../ETC/Language')
  }
  const gotoPolicy = () =>{
    router.push('../ETC/Policy')
  }
  const gotoSupport = () =>{
    router.push('../ETC/Support')
  }

  return (
    <div className={styles.etc}>
    <button className={styles.buttonEtc} onClick={gotoProfile}>
      <div className={styles.titleButton}>
        <PermIdentityOutlinedIcon
          style={{ color: "#ff4d25", marginRight: 20 }}
        />
        ข้อมูลของฉัน
      </div>
      <ChevronRightOutlinedIcon style={{ color: "#c6c6c695" }} />
    </button>
    <button className={styles.buttonEtc} onClick={gotoNoti}>
      <div className={styles.titleButton}>
        <NotificationsOutlinedIcon
          style={{ color: "#ff0000", marginRight: 20 }}
        />
        การแจ้งเตือนของแอพ
      </div>
      <ChevronRightOutlinedIcon style={{ color: "#c6c6c695" }} />
    </button>
    <button className={styles.buttonEtc} onClick={gotoLanguage}>
      <div className={styles.titleButton}>
        <TranslateOutlinedIcon
          style={{ color: "#4369f9", marginRight: 20 }}
        />
        ภาษา / Language
      </div>
      <div className={styles.titleButton}>
        <p style={{ color: "#c6c6c695" }}>ไทย</p>
        <ChevronRightOutlinedIcon style={{ color: "#c6c6c695" }} />
      </div>
    </button>
    <button className={styles.buttonEtc} onClick={gotoPolicy}>
      <div className={styles.titleButton}>
        <NewReleasesOutlinedIcon
          style={{ color: "#0068f9", marginRight: 20 }}
        />
        นโยบาย
      </div>
    </button>
    <button className={styles.buttonEtc} onClick={gotoSupport}>
      <div className={styles.titleButton}>
        <SupportAgentOutlinedIcon
          style={{ color: "#ffa625", marginRight: 20 }}
        />
        ศูนย์ความช่วยเหลือ
      </div>
      <ChevronRightOutlinedIcon style={{ color: "#c6c6c695" }} />
    </button>
    <button className={styles.buttonLogout} onClick={gotoLogin}>
      ออกจากระบบ
    </button>
  </div>
  )
}

export default Etc