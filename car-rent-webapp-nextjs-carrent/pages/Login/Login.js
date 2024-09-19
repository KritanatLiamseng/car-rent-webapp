import React, { useState } from "react";
import styles from "@/styles/Login/login.module.css";
import icon from "@/assets/icon.png";
import iconFB from "@/assets/fb-icon.png";
import iconGoogle from "@/assets/googleicon.png";
import iconApple from "@/assets/appleicon.png";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.loginScreen}>
      <div className={styles.logo}>
        <Image src={icon} className={styles.icon} alt="logo"/>
        <h1 className={styles.h1}>ค้นหารถเช่า</h1>
      </div>

      <form className={styles.form}>
        <h2 className={styles.h2}>ล็อกอิน</h2>
        <h3 className={styles.h3}>หมายเลขโทรศัพท์</h3>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={styles.input}
        />
        <h3 className={styles.h3}>รหัสผ่าน</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <p className={styles.forgetPassword}>
          <Link href={"/Register/ForgetPass"}>ลืมรหัสผ่าน</Link>
        </p>
        <Link href={"/Main/MainScreen"} className={styles.loginButton}>
          ลงชื่อเข้าใช้
        </Link>
        <div className={styles.lineContainer}>
          <div className={styles.lineStyle}></div>
          <span className={styles.orTextStyle}>หรือ</span>
          <div className={styles.lineStyle}></div>
        </div>
        <Link href={"/Main/MainScreen"} className={styles.fbButton}>
          <Image src={iconFB} className={styles.iconButton} alt="iconFB"/>
          เข้าสู่ระบบด้วย Facebook
        </Link>
        <Link href={"/Main/MainScreen"} className={styles.etcButton}>
          <Image src={iconGoogle} className={styles.iconButton} alt="iconGoogle"/>
          เข้าสู่ระบบด้วย Google
        </Link>
        <Link href={"/Main/MainScreen"} className={styles.etcButton}>
          <Image src={iconApple} className={styles.iconButton} alt="iconAppleID"/>
          เข้าสู่ระบบด้วย Appl ID
        </Link>
        <Link href={"/Register/Register"} className={styles.etcButton}>
          สมัครสมาชิก
        </Link>
      </form>
    </div>
  );
}
