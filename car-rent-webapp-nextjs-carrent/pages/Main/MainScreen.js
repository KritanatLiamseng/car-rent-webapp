import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Main/MainScreen.module.css";
import Image from "next/image";
import icon from "@/assets/icon.png";
import example1 from "@/assets/template/example-car1.jpg";
import example2 from "@/assets/template/example-car2.jpg";
import example3 from "@/assets/template/example-car3.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Card from "@/components/Card Data/Card";
import carData from "@/components/data/car";
import popData from "@/components/data/popular";
import Destination from "@/components/Card Data/Destination";
import city from "@/components/data/Des";
import News from "@/components/Card Data/News";
import news from "@/components/data/news";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { useRouter } from "next/router";
import rentalData from "@/components/data/rental";
import Etc from "../ETC/Etc";

export default function MainScreen() {
  const router = useRouter();
  const [coming, setcoming] = useState(true);
  const [returnCancel, setReturnCancel] = useState(false);
  const [home, setHome] = useState(true);
  const [rental, setRental] = useState(false);
  const [messages, setMessages] = useState(false);
  const [etc, setEtc] = useState(false);

  const navigate = () => {
    router.push("../Booking/MyBooking");
  };

  const goReturn = () => {
    router.push("../Booking/Return");
  };
  const goCancel = () => {
    router.push("../Booking/Cancel");
  };
  const chat = () => {
    router.push("../Chat/Chat");
  };

  const tapHome = () => {
    setHome(true);
    setRental(false);
    setMessages(false);
    setEtc(false);
  };
  const tapRental = () => {
    setHome(false);
    setRental(true);
    setMessages(false);
    setEtc(false);
  };
  const tapMessage = () => {
    setHome(false);
    setRental(false);
    setMessages(true);
    setEtc(false);
    console.log(messages);
  };
  const tapEtc = () => {
    setHome(false);
    setRental(false);
    setMessages(false);
    setEtc(true);
  };
  const tapComing = () => {
    setcoming(true);
    setReturnCancel(false);
  };
  const tapReturnCancel = () => {
    setcoming(false);
    setReturnCancel(true);
  };

  function generateRandomNumberId() {
    const idLength = 10; // Change the length of the ID as needed
    let randomNumberId = "";

    for (let i = 0; i < idLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
      randomNumberId += randomDigit;
    }

    return randomNumberId;
  }

  const randomIdNumber = generateRandomNumberId();
  return (
    <div className={styles.mainScreen}>
      <div >
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image src={icon} className={styles.icon} alt="logo" />
            รถเช่า
          </div>
          <Link href={"/Main/Favorite"}>
            <FavoriteIcon />
          </Link>
        </div>
        {home && (
          <div className={styles.container}>
            <div style={{ flexDirection: "row" }} className={styles.slider}>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay
              >
                <div>
                  <Image src={example1} alt="1" className={styles.image} />
                </div>
                <div>
                  <Image src={example2} alt="2" className={styles.image} />
                </div>
                <div>
                  <Image src={example3} alt="3" className={styles.image} />
                </div>
              </Carousel>
            </div>

            <div className={styles.box}>
              <h2 className={styles.title}>เข้าดูล่าสุด</h2>
              <Card data={carData} />
            </div>
            <div className={styles.box}>
              <h2 className={styles.title}>ได้รับความนิยม</h2>
              <Card data={popData} />
            </div>
            <div className={styles.box}>
              <h2 className={styles.title}>ปลายทางแนะนำ</h2>
              <Destination data={city} />
            </div>
            <div className={styles.box}>
              <h2 className={styles.title}>กิจการข่าวสาร</h2>
              <News data={news} />
            </div>
          </div>
        )}
        {rental && (
          <div style={{height:"100vh"}} >
            <div className={styles.state}>
              <button
                className={coming ? styles.ActiveRental : styles.InactiveRental}
                onClick={tapComing}
              >
                กำลังจะมาถึง
              </button>
              <button
                className={
                  returnCancel ? styles.ActiveRental : styles.InactiveRental
                }
                onClick={tapReturnCancel}
              >
                คืนรถแล้ว/ยกเลิกการจอง
              </button>
            </div>
            {coming && (
              <div className={styles.coming} onClick={navigate}>
                <div style={{ flexDirection: "row", display: "flex",backgroundColor:"#fff" }}>
                  <img
                    src={carData[0].imageUrl}
                    alt={carData[0].imageUrl}
                    className={styles.imgrental}
                  />
                  <div style={{ marginLeft: 10,backgroundColor:"#fff" }}>
                    <p style={{ fontFamily: "Prompt",color:"#333333" }}>{carData[0].title}</p>
                    <p
                      style={{
                        fontFamily: "Prompt",
                        fontSize: 10,
                        marginTop: 10,
                        color:"#333333"
                      }}
                    >
                      หมายเลขการจอง : {randomIdNumber}
                    </p>
                  </div>
                </div>
                <div className={styles.rowData}>
                  <div className={styles.rowTitle}>
                    <CalendarMonthIcon className={styles.iconData} />
                    <p className={styles.titleData}>
                      15/07/22 10:00 - 16/07/22 10:00
                    </p>
                  </div>
                  <p className={styles.titleData}>1 วัน</p>
                </div>
                <div className={styles.rowData}>
                  <div className={styles.rowTitle}>
                    <DirectionsCarIcon className={styles.iconData} />
                    <p className={styles.titleData}>สถานที่รับ-ส่งรถ</p>
                  </div>
                  <p className={styles.titleData2}>
                    {"เชียงราย>สนามบินเชียงราย"}
                  </p>
                </div>
                <div className={styles.rowData}>
                  <div className={styles.rowTitle}>
                    <AssignmentTurnedInOutlinedIcon
                      className={styles.iconData}
                    />
                    <p className={styles.titleData}>สถานะการจอง</p>
                  </div>
                  <p className={styles.stateData}>
                    รอการติดต่อกลับจากบริษัทรถเช่า
                  </p>
                </div>
              </div>
            )}
            {returnCancel &&
              rentalData.map((item) => (
                <div
                  key={item.id}
                  className={styles.coming}
                  onClick={item.statusRental === "return" ? goReturn : goCancel}
                >
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <img
                      src={item.imageUrl}
                      alt={item.imageUrl}
                      className={styles.imgrental}
                    />
                    <div style={{ marginLeft: 10 }}>
                      <p style={{ fontFamily: "Prompt" ,color:"#333333"}}>{item.title}</p>
                      <p
                        style={{
                          fontFamily: "Prompt",
                          fontSize: 10,
                          marginTop: 10,
                          color:"#333333"
                        }}
                      >
                        หมายเลขการจอง : {item.rentNumber}
                      </p>
                    </div>
                  </div>
                  <div className={styles.rowData}>
                    <div className={styles.rowTitle}>
                      <CalendarMonthIcon className={styles.iconData} />
                      <p className={styles.titleData}>{item.date}</p>
                    </div>
                    <p className={styles.titleData}>{item.day} วัน</p>
                  </div>
                  <div className={styles.rowData}>
                    <div className={styles.rowTitle}>
                      <DirectionsCarIcon className={styles.iconData} />
                      <p className={styles.titleData}>สถานที่รับ-ส่งรถ</p>
                    </div>
                    <p className={styles.titleData2}>
                      {item.PickUp}
                      {">"}
                      {item.DropOff}
                    </p>
                  </div>
                  <div className={styles.rowData}>
                    <div className={styles.rowTitle}>
                      <AssignmentTurnedInOutlinedIcon
                        className={styles.iconData}
                      />
                      <p className={styles.titleData}>สถานะการจอง</p>
                    </div>
                    <p
                      className={
                        item.statusRental === "return"
                          ? styles.stateReturn
                          : styles.stateNone
                      }
                    >
                      {item.statusRental === "return"
                        ? "คืนรถ การเช่าเสร็จสิ้น"
                        : "ยกเลิกการจอง"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
        {messages &&
          rentalData.map((item) => (
            <div key={item.id} className={styles.messages} onClick={chat}>
              <img
                src={item.imageUrl}
                alt={item.imageUrl}
                className={styles.imgMessage}
              />
              <div className={styles.infoMessage}>
                <p className={styles.rentItem}>{item.title}</p>
                <p className={styles.rentNumber}>
                  หมายเลขการจอง : {item.rentNumber}
                </p>
              </div>
            </div>
          ))}
        {etc && (
          <Etc/>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.centerButton}>
          <Link href={"/Main/Rental"} className={styles.seachButton}>
            <Image src={icon} className={styles.icon2} alt="logo" />
            ค้นหารถเช่า
          </Link>
        </div>

        <div className={styles.buttonArea}>
          <button
            className={home ? styles.ActiveMenu : styles.InactiveMenu}
            onClick={tapHome}
          >
            <HomeOutlinedIcon />
            หน้าแรก
          </button>
          <div className={styles.buttonArea2}>
            <button
              className={rental ? styles.Activemenu2 : styles.Inactivemenu2}
              onClick={tapRental}
            >
              <BookOutlinedIcon />
              การจอง
            </button>

            <button
              className={messages ? styles.Activemenu2 : styles.Inactivemenu2}
              onClick={tapMessage}
            >
              <ForumOutlinedIcon />
              ข้อความ
            </button>
          </div>

          <button
            className={etc ? styles.ActiveMenu : styles.InactiveMenu}
            onClick={tapEtc}
          >
            <GridViewOutlinedIcon />
            อื่นๆ
          </button>
        </div>
      </div>
    </div>
  );
}
