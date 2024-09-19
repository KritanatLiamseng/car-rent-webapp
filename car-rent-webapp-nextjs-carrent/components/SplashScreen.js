// components/SplashScreen.js
import React from "react";
import Image from "next/image";
import icon from "../assets/icon.png";

const SplashScreen = () => {
  const splashScreenStyle = {
    background: "linear-gradient(to bottom, #0068f9, #00347d)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
  };
  const iconStyle = {
    width: "250px",
    height: "auto",
    filter: "invert(100%)",
  };

  return (
    <div style={splashScreenStyle}>
      <Image src={icon} alt="icon" style={iconStyle} />
      <h1
        style={{
          fontFamily: "Prompt",
          fontSize: "40px",
          fontWeight: "inherit",
        }}
      >
        ค้นหารถเช่า
      </h1>
    </div>
  );
};

export default SplashScreen;
