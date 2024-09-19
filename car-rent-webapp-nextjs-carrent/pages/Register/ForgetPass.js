import React, { useState } from "react";
import styles from "@/styles/Login/forget.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

export default function ForgetPass() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("Accept");



  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.registerScreen}>
      <div>
        <div className={styles.top}>
          <Link href={"/"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.title}>ลืมรหัสผ่าน</h2>
        </div>

        <div className={styles.container}>
          <h2 className={styles.h2}>ลืมรหัสผ่าน</h2>
          <form className={styles.form}>
            <h3 className={styles.h3}>หมายเลขโทรศัพท์</h3>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.input}
            />
          </form>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href={"/"} className={styles.confirmButton}>
          ขอรหัสผ่าน
        </Link>
      </div>
    </div>
  );
}
