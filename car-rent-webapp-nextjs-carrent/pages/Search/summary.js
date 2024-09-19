import React, { useState } from "react";
import styles from "@/styles/Search/summary.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CancelIcon from "@mui/icons-material/Cancel";
import SummaryCard from "@/components/Card Data/summaryCard";
import favData from "@/components/data/fav";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const summary = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const currentCar = favData[currentCarIndex];
  const [code, setCode] = useState("");
  const [reducedAmount, setReducedAmount] = useState(0);
  const [appliedDiscount, setAppliedDiscount] = useState(false);
  const [error, setError] = useState(false);
  const [productPrice, setProductPrice] = useState(1999);
  const applyDiscount = () => {
    if (code === "a") {
      setAppliedDiscount(true);
      const discountAmount = productPrice - 100;
      setReducedAmount(discountAmount);
      setProductPrice(discountAmount);
    } else {
      setAppliedDiscount(0);
      setReducedAmount(0);
      setAppliedDiscount(true);
      setError(true);
    }
  };

  const clearDiscount = () => {
    setCode("");
    setAppliedDiscount(false);
    setError(false);
    setReducedAmount(0);
    setProductPrice(1999);
  };
  return (
    <div className={styles.summaryScreen}>
      <div>
        <div className={styles.header}>
          <Link href={"./detail"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.titleHeader}>จองรถเช่า</h2>
        </div>
        <div className={styles.container}>
          <SummaryCard car={currentCar} />
          <div className={styles.detailRental}>
            <h3>รายละเอียดการจอง</h3>
            <div className={styles.dataRental}>
              <p className={styles.text}>
                <CalendarMonthIcon
                  style={{ color: "#0068f9", fontSize: 10, marginRight: 5 }}
                />
                15/07/22 10:00 - 16/07/22 10:10
              </p>
              <p className={styles.rentalData}>1 วัน x 1,999</p>
            </div>
            <div className={styles.dataRental}>
              <p className={styles.text}>สถานที่รับ-ส่งรถ</p>
              <p className={styles.rentalData}>{"เชียงราย>สนามบินเชียงราย"}</p>
            </div>
            <div className={styles.dataRental}>
              <p className={styles.text}>ค่าบริการรับส่ง-ส่งรถ</p>
              <p className={styles.rentalData}>ฟรี</p>
            </div>
            <div className={styles.dataRental}>
              <p className={styles.text}>ค่ารับส่งรถนอกเวลาทำการ</p>
              <p className={styles.rentalData}>ฟรี</p>
            </div>
            <div className={styles.codeArea}>
              <div className={styles.codeInput}>
                <input
                  placeholder="ใส่รหัสส่วนลด"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  style={{
                    width: "100%",
                    fontFamily: "Prompt",
                    border: "rgba(0,0,0,0)",
                    height: 20,
                    backgroundColor:"#fff",
                    color:"#333333"
                  }}
                />
                {appliedDiscount > 0 && (
                  <button onClick={clearDiscount} className={styles.clear}>
                    <CancelIcon />
                  </button>
                )}
              </div>

              <button className={styles.codeButton} onClick={applyDiscount}>
                ใช้ส่วนลด
              </button>
            </div>
            {error && (
              <div className={styles.error}>
                ไม่สามารถใช้ส่วนลดนี้ได้ กรุณาลองอีกครั้ง
              </div>
            )}
            {reducedAmount > 0 && (
              <div className={styles.discountArea}>
                <h4 className={styles.discounttitle}>ส่วนลด</h4>
                <h4 className={styles.totalDiscount}>
                  {"-฿ 100"}
                </h4>
              </div>
            )}
            <div className={styles.amoutArea}>
              <h3 className={styles.amout}>ยอดสุทธิ</h3>
              <h3 className={styles.priceAmout}> {productPrice}</h3>
            </div>
            <div className={styles.Deposit}>
              <div>
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                    color: "#333333",
                  }}
                >
                  ค่ามัดจำเพื่อประกันความเสียหาย
                </h4>
                <h4
                  style={{
                    fontSize: 10,
                    fontWeight: "normal",
                    color: "#333333",
                  }}
                >
                  ชำระ ณ วันที่รับเช่า และได้รับคืนเมื่อสิ้นสุดการเช่า
                </h4>
              </div>
              <h4
                style={{ fontSize: 16, fontWeight: "normal", color: "#333333" }}
              >
                ฿ 3,000
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Link href={"./result"} className={styles.buttonNext}>ถัดไป</Link>
      </div>
    </div>
  );
};

export default summary;
