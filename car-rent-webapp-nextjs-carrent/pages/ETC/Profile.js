import React from "react";
import styles from "@/styles/etc/profile.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Profile = () => {
  return (
    <div className={styles.profileScreen}>
      <div style={{ width: "100%" }}>
        <div className={styles.top}>
          <Link href={"/Main/MainScreen"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.header}>ข้อมูลของฉัน</h2>
        </div>
        <div className={styles.profileContainer}>
          <h4 style={{marginBottom:20,color:"#333333"}}>ข้อมูลของฉัน</h4>
          <p className={styles.title}>ชื่อ</p>
          <input type="text" placeholder="ชื่อ" className={styles.textInput} />
          <p className={styles.title}>นามสกุล</p>
          <input
            type="text"
            placeholder="นามสกุล"
            className={styles.textInput}
          />
          <p className={styles.title}>อีเมล</p>
          <input
            type="email"
            placeholder="อีเมลสำหรับยืนยันการจอง"
            className={styles.textInput}
          />
          <p className={styles.title}>เบอร์โทร</p>
          <input
            type="number"
            placeholder="หมายเลขโทรศัพท์มือถือ 10 หลัก"
            maxLength={10}
            className={styles.textInput}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>บันทึก</button>
      </div>
    </div>
  );
};

export default Profile;
