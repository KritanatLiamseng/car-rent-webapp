import React, { useState } from "react";
import styles from "@/styles/Login/register.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });
  const [selectedOption, setSelectedOption] = useState("Accept");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("../api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
        setFormData({ name: "", surname: "", email: "", phoneNumber: "" });
      } else {
        const errorData = await response.json();
        alert("Error registering user: " + errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleOption = () => {
    setSelectedOption(selectedOption === "Accept" ? "deny" : "Accept");
  };

  return (
    <div className={styles.registerScreen}>
      <div>
        <div className={styles.top}>
          <Link href={"/"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.title}>สร้างบัญชี</h2>
        </div>

        <div className={styles.container}>
          <h2 className={styles.h2}>ข้อมูลส่วนตัว</h2>
          <form className={styles.form}>
            <h3 className={styles.h3}>ชื่อ</h3>
            <input
              placeholder="ชื่อ"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={styles.input}
            />
            <h3 className={styles.h3}>นามสกุล</h3>
            <input
              placeholder="นามสกุล"
              type="text"
              value={formData.surname}
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
              className={styles.input}
            />
            <h3 className={styles.h3}>อีเมลล์</h3>
            <input
              placeholder="อีเมลล์"
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={styles.input}
            />
            <h3 className={styles.h3}>เบอร์โทร</h3>
            <input
              placeholder="เบอร์โทร"
              type="text"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className={styles.input}
            />
            <div className={styles.policy}>
              <input
                type="checkbox"
                name="gender"
                value={selectedOption}
                onChange={toggleOption}
                style={{backgroundColor:"#fff"}}
              />
              <h4 className={styles.h4}>
                ในการสมัครสมาชิก{" "}
                <a className={styles.a}>ฉันยอมรับข้อกำหนดและเงื่อนไข</a>
                และ
                <a className={styles.a}>นโยบายความเป็นส่วนตัว</a>
              </h4>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href={"/"} className={styles.confirmButton} type="submit">
          ยืนยัน
        </Link>
      </div>
    </div>
  );
}
