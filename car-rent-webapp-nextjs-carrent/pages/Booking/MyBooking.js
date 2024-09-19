import React, { useState } from "react";
import styles from "@/styles/Booking/MyBooking.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import favData from "@/components/data/fav";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MyBooking = () => {
  const [expand, setExpand] = useState(false);
  const [status, setStatus] = useState(false);


  const handleStatus = () => {
    setStatus(!status);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };
  function generateRandomNumberId() {
    const idLength = 10;
    let randomNumberId = "";

    for (let i = 0; i < idLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      randomNumberId += randomDigit;
    }

    return randomNumberId;
  }
  const randomIdNumber = generateRandomNumberId();

  return (
    <div className={styles.MyBookingScreen}>
      <div style={{width:"100%",backgroundColor:"#c6c6c6"}}>
        <div className={styles.top}>
          <Link href={"/Main/MainScreen"}>
            <ChevronLeftIcon  style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.header}>จองรถเช่า</h2>
        </div>
        <p className={styles.bookingNumber}>หมายเลขการจอง : {randomIdNumber}</p>
        <div className={styles.car}>
          <img src={favData[0].imageUrl} className={styles.img} />
          <div
            style={{
              marginLeft: 10,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p className={styles.titleCar}>{favData[0].title}</p>
            <div className={styles.desscription}>
              <TimeToLeaveIcon className={styles.icon} />
              <p className={styles.desText}>{favData[0].type}</p>

              <SettingsSuggestIcon className={styles.icon} />
              <p className={styles.desText}>{favData[0].transmission}</p>

              <PersonIcon className={styles.icon} />
              <p className={styles.desText}>{favData[0].seat}</p>

              <WorkIcon className={styles.icon} />
              <p className={styles.desText}>{favData[0].bag}</p>
            </div>
            <p className={styles.rental}>{favData[0].rental}</p>
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
                  />{" "}
                  15/07/22 10:00 - 16/07/22 10:00
                </p>
                <p className={styles.detail}>1 วัน</p>
              </div>
              <div className={styles.rowData}>
                <p className={styles.title}>สถานที่รับ-ส่งรถ</p>
                <p className={styles.detail}>{"เชียงราย>สนามบินเชียงราย"}</p>
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
          <p style={{ fontFamily: "Prompt", fontSize: 12,color:"#333333" }}>วิธีชำระเงิน</p>
          <div className={styles.typePay}>
            <p style={{ fontFamily: "Prompt", fontSize: 12, color: "#0068f9" }}>
              ชำระเงินเป็นเงินสด
            </p>
            <p style={{ fontFamily: "Prompt", fontSize: 12 ,color:"#333333"}}>
              ชำระเงินเป็นเงินสด ณ วันที่รับรถ
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
                <div className={styles.waitingStatus} />
                <p className={styles.textWaiting}>รอการติดต่อจากบริษัทรถเช่า</p>
              </div>
              <div className={styles.statusRow}>
                <div className={styles.noneStatus} />
                <p className={styles.textNone}>ได้รับอนุมัติการจองแล้ว</p>
              </div>
              <div className={styles.statusRow}>
                <div className={styles.noneStatus} />
                <p className={styles.textNone}>รอชำระเงิน</p>
              </div>
              <div className={styles.statusRow}>
                <div className={styles.noneStatus} />
                <p className={styles.textNone}>รอรับรถ</p>
              </div>
              <div className={styles.statusRow}>
                <div className={styles.noneStatus} />
                <p className={styles.textNone}>คืนรถ การเช่าเสร็จสิ้น</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.buttonCancel}>ยกเลิกการจอง</button>
        <p className={styles.footerDetail}>
          ท่านสามารถยกเลิกการจองได้ก่อนถึงเวลาจอง 72 ชั่วโมง
          โดยการติดต่อเจ้าหน้าที่
        </p>
      </div>
    </div>
  );
};

export default MyBooking;
