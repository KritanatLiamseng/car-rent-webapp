import React,{useState} from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import styles from "@/styles/Search/result.module.css";

const result = () => {
  const [numberInput, setNumberInput] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    // Regex to allow only numbers and limit input to 10 digits
    const filteredInput = input.replace(/\D/g, "").slice(0, 10);
    setNumberInput(filteredInput);
  };
  return (
    <div className={styles.resultScreen}>
      <div style={{height:"100%",marginBottom:80}}>
        <div className={styles.header}>
          <Link href={"./summary"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.titleHeader}>จองรถเช่า</h2>
        </div>
        <div className={styles.container}>
          <h4 style={{ marginBottom: 10,color:"#333333" }}>รายละเอียดของผู้ขับรถ</h4>
          <p style={{ marginTop: 10,color:"#333333" }}>ชื่อ</p>
          <input type="text" placeholder="ชื่อ" className={styles.input} />
          <p style={{ marginTop: 10 ,color:"#333333"}}>นามสกุล</p>
          <input type="text" placeholder="นามสกุล" className={styles.input} />
          <p style={{ marginTop: 10,color:"#333333" }}>อีเมล</p>
          <input
            type="text"
            placeholder="อีเมลสำหรับยืนยันการจอง"
            className={styles.input}
          />
          <p style={{ marginTop: 10,color:"#333333" }}>เบอร์โทร</p>
          <input
            type="number"
            placeholder="หมายเลขโทรศัพท์มือถือ 10 หลัก"
            value={numberInput}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Link href={'./payment'} className={styles.buttonNext}>ถัดไป</Link>
      </div>
    </div>
  );
};

export default result;
