import React, { useState } from "react";
import styles from "@/styles/Booking/MyBooking.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import rentalData from "@/components/data/rental";

const Cancel = () => {
    const [expand, setExpand] = useState(false);
    const [status, setStatus] = useState(false);
    const handleStatus = () => {
      setStatus(!status);
    };
  
    const handleExpand = () => {
      setExpand(!expand);
    };
  
    return (
      <div className={styles.MyBookingScreen}>
        <div style={{ width: "100%", backgroundColor: "#c6c6c6" }}>
          <div className={styles.top}>
            <Link href={"/Main/MainScreen"}>
              <ChevronLeftIcon style={{color:"#333333"}}/>
            </Link>
            <h2 className={styles.header}>การจองของฉัน</h2>
          </div>
          <div className={styles.bookingCancel}>
            <p>หมายเลขการจอง : {rentalData[1].rentNumber}</p>
            <p>ยกเลิก</p>
          </div>
  
          <div className={styles.car}>
            <img src={rentalData[1].imageUrl} className={styles.img} />
            <div
              style={{
                marginLeft: 10,
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className={styles.titleCar}>{rentalData[1].title}</p>
              <div className={styles.desscription}>
                <TimeToLeaveIcon className={styles.icon} />
                <p className={styles.desText}>{rentalData[1].type}</p>
  
                <SettingsSuggestIcon className={styles.icon} />
                <p className={styles.desText}>{rentalData[1].transmission}</p>
  
                <PersonIcon className={styles.icon} />
                <p className={styles.desText}>{rentalData[1].seat}</p>
  
                <WorkIcon className={styles.icon} />
                <p className={styles.desText}>{rentalData[1].bag}</p>
              </div>
              <p className={styles.rental}>{rentalData[1].rental}</p>
            </div>
          </div>
          <div className={styles.detailBooking}>
            <div
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <h3 style={{ fontFamily: "Prompt",color:"#333333" }}>รายละเอียดการจอง</h3>
              <button onClick={handleExpand} className={styles.expand}>
                {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
            {expand && (
              <div style={{ margin: "10px 10px" }}>
                <div className={styles.rowData}>
                  <p className={styles.title}>
                    <CalendarMonthIcon
                      style={{ color: "#0068f9", marginRight: 5, fontSize: 12 }}
                    />{rentalData[1].date}
                  </p>
                  <p className={styles.detail}>{rentalData[1].day} วัน</p>
                </div>
                <div className={styles.rowData}>
                  <p className={styles.title}>สถานที่รับ-ส่งรถ</p>
                  <p className={styles.detail}>{rentalData[1].PickUp}{">"}{rentalData[1].DropOff}</p>
                </div>
                <div className={styles.rowData}>
                  <p className={styles.title}>ชื่อผู้จอง</p>
                  <p className={styles.detail}>มงคล สอนสุนันท์</p>
                </div>
                <div className={styles.rowData}>
                  <p className={styles.title}>อีเมล</p>
                  <p className={styles.detail}>mongc.mail.com</p>
                </div>
                <div className={styles.rowData}>
                  <p className={styles.title}>เบอร์โทร</p>
                  <p className={styles.detail}>0869005965</p>
                </div>
                <div className={styles.rowData}>
                  <p className={styles.title}>วันที่จอง</p>
                  <p className={styles.detail}>10/07/22</p>
                </div>
                <div className={styles.rowData}>
                  <h3 className={styles.title}>ยอดรวมสุทธิ</h3>
                  <h3 className={styles.detail}>฿ 1,9999</h3>
                </div>
                <div className={styles.rowData2}>
                  <div>
                    <p className={styles.in}>ค่ามัดจำเพื่อประกันความเสียหาย</p>
                    <p className={styles.desin}>
                      ชำระ ณ วันที่รับรถเช่า และได้รับคืนเมื่อสิ้นสุดการเช่า
                    </p>
                  </div>
                  <p className={styles.PriceIn}>฿3,000</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.payment}>
            <p style={{ fontFamily: "Prompt", fontSize: 12 ,color:"#333333"}}>วิธีชำระเงิน</p>
            <div className={styles.typePay}>
              <p style={{ fontFamily: "Prompt", fontSize: 12 ,color:"#333333"}}>
                Credit Card
              </p>
              <p style={{ fontFamily: "Prompt", fontSize: 12 ,color:"#333333"}}>
                xxxx-xxxx-xxx-9999
              </p>
            </div>
          </div>
          <div className={styles.status}>
            <div
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <h3 style={{ fontFamily: "Prompt",color:"#333333" }}> สถานะการจอง</h3>
              <button onClick={handleStatus} className={styles.expand}>
                {status ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
            {status && (
              <div>
                <div className={styles.line}></div>
                <div className={styles.statusRow}>
                  <div className={styles.confirmStatus} />
                  <p className={styles.textConfirm}>ทำการจอง</p>
                </div>
                <div className={styles.statusRow}>
                  <div className={styles.cancelStatus} />
                  <p className={styles.textCancel}>ยกเลิกการจอง</p>
                </div>
              
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.rentAgain}>จองอีกครั้ง</button>
        </div>
      </div>
    );
}

export default Cancel