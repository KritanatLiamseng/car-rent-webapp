import React, { useState } from "react";
import styles from "@/styles/etc/language.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className={styles.languageScreen}>
      <div className={styles.top}>
        <Link href={"/Main/MainScreen"}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2 className={styles.header}>ภาษา / Language</h2>
      </div>
      <div className={styles.languageContainer}>
        <h4 style={{color:"#333333"}}>ภาษา / Language</h4>
        <div className={styles.selectContainer}>
        <p style={{color:"#333333"}}>ภาษา</p>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className={styles.select}
        >
          <option value="thai">ไทย</option>
          <option value="eng">English</option>
          <option value="Mandarin">官话</option>s
          <option value="Spanish">español</option>
          <option value="Arabic">اَلْعَرَبِيَّةُ</option>
          <option value="Japanese">اَにほんご</option>
          <option value="Russian">اَрусский</option>
          <option value="Korean">한국어</option>
          
        </select>
        </div>

      </div>
    </div>
  );
};

export default Language;
