import React, { useState, useEffect } from "react";
import styles from "@/styles/Search/result.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";

const complete = () => {
      const router = useRouter();
    const [counter, setCounter] = useState(3); // Initial counter value (in seconds)

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        } else {
          router.push('../Main/MainScreen'); // Navigate when counter reaches 0
        }
      }, 1000); // Decrease counter every second

      // Clear timeout on unmount to avoid memory leaks
      return () => clearTimeout(timeout);
    }, [counter, router]);

  return (
    <div className={styles.completeScreen}>
      <CheckCircleOutlineIcon style={{ color: "#0068f9", fontSize: 200 }} />
      <h3 style={{ color: "#0068f9", fontSize: 24, marginTop: 20 }}>
        ยืนยันการจองรถสำเร็จ
      </h3>
      <p style={{ fontSize: 14, marginTop: 10 ,color:"#333333"}}>
        กรุณาดูหน้า "การจอง" เพื่อตรวจสอบวันเวลานัดหมาย
      </p>
      <Link
        href={"../Main/MainScreen"}
        style={{
          width: 250,
          backgroundColor: "#0068f9",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          display:"flex",
          padding:10,
          borderRadius:30,
          marginTop:200
        }}
      >
        <HomeIcon />
        กลับหน้าแรก
      </Link>
      <p style={{ fontSize: 10 ,color:"#333333"}}>{"ระบบจะกลับหน้าแรก อัตโนมัติ ("} {counter}{"s)"}</p>
    </div>
  );
};

export default complete;
