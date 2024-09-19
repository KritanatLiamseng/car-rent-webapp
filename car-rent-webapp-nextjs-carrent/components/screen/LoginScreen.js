// components/MainScreen.js
import React, { useState } from "react";
import icon from "../assets/icon.png";
import fbicon from "../assets/fb-icon.png";
import googleicon from "../assets/googleicon.png";
import appleicon from "../assets/appleicon.png";
import Image from "next/image";
import Link from "next/link";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., API call or validation)
  };

  const ScreenStyle = {
    background: "linear-gradient(to bottom, #0068f9, #00347d)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    paddingTop: "30px",
  };
  const iconStyle = {
    width: "125px",
    height: "auto",
    filter: "invert(100%)",
    marginBottom: "-35px",
  };

  const formStyle = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const input = {
    borderRadius: "6px",
    padding: "10px",
    width: "100%",
    marginBottom: "10px",
    boxShadow: "none",
    border: "1px solid #ccc",
  };

  const title = {
    fontFamily: "Prompt",
    fontSize: "14px",
    fontWeight: "inherit",
    marginBottom: "10px",
  };

  const lineContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    marginTop: "30px",
  };
  const lineStyle = {
    flex: "1",
    borderTop: "1px solid #ccc",
  };

  const orTextStyle = {
    padding: "0 10px",
    fontFamily: "Prompt",
    fontSize: "14px",
  };

  const buttonLogin = {};
  const button = {
    background: "#fff",
    width: "100%",
    borderRadius: "20px",
    boxShadow: "none",
    border: "none",
    marginBottom: "10px",
    height: "40px",
    fontFamily: "Prompt",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    color: "#333333",
    justifyContent: "center",
  };

  const iconButtonStyle = {
    width: "20px",
    height: "auto",
    margin: "7px",
    marginRight: "10px",
  };

  return (
    <div className="main-screen" style={ScreenStyle}>
      <Image src={icon} alt="icon" style={iconStyle} />
      <h1
        style={{
          fontFamily: "Prompt",
          fontSize: "20px",
          fontWeight: "inherit",
        }}
      >
        ค้นหารถเช่า
      </h1>
      <form onSubmit={handleLogin} style={formStyle}>
        <h1
          style={{
            fontFamily: "Prompt",
            fontSize: "18px",
            fontWeight: "inherit",
            marginBottom: "10px",
          }}
        >
          ล็อคอิน
        </h1>
        <text style={title}>หมายเลขโทรศัพท์</text>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={input}
        />
        <text style={title}>รหัสผ่าน</text>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />
        <p
          style={{
            fontFamily: "Prompt",
            fontSize: "14px",
            fontWeight: "inherit",
            marginBottom: "10px",
            textAlign: "right",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          ลืมรหัสผ่าน
        </p>
        <button
          type="submit"
          style={{
            background: "#0068f9",
            boxShadow: "none",
            width: "100%",
            borderRadius: 20,
            border: "0px solid #ccc",
            fontFamily: "Prompt",
            color: "#fff",
            height: "40px",
            marginBottom: "10px",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          ลงชื่อเข้าใช้
        </button>
        <div style={lineContainerStyle}>
          <div style={lineStyle}></div>
          <span style={orTextStyle}>หรือ</span>
          <div style={lineStyle}></div>
        </div>
        <button
          type="submit"
          style={{
            background: "#3c5b94",
            width: "100%",
            borderRadius: "20px",
            boxShadow: "none",
            border: "none",
            marginBottom: "10px",
            height: "40px",
            fontFamily: "Prompt",
            color: "#fff",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={fbicon} alt="Icon" style={iconButtonStyle} />
          เข้าสู่ระบบด้วย Facebook
        </button>
        <button type="submit" style={button}>
          <Image src={googleicon} alt="Icon" style={iconButtonStyle} />
          เข้าสู่ระบบด้วย Google
        </button>
        <button type="submit" style={button}>
          <Image src={appleicon} alt="Icon" style={iconButtonStyle} />
          เข้าสู่ระบบด้วย Apple ID
        </button>
        <Link href="/register" style={button}>
         สมัครสมาชิก
        </Link>
      </form>
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      ></div>
    </div>
  );
};

export default LoginScreen;
