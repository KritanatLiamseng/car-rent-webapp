import React, { useState } from "react";
import styles from "@/styles/Search/sort.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SortSelct from "@/components/SelectList.js/SortSelct";
import CarSelect from "@/components/SelectList.js/CarSelect";
import StarIcon from "@mui/icons-material/Star";
import { Slider } from "@mui/material";
import { useRouter } from "next/router";

function valuetext(value) {
  return `฿ ${value}`;
}

const Sort = () => {
  const router = useRouter()
  const [selectSort, setSelectSort] = useState("");
  const [selectTypeCar, setTypeCar] = useState("");
  const [selectedRate, setSelectedRate] = useState("");
  const [selectedReview, setSelectedReview] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [selectOffer, setSelectOffer] = useState(true);
  const [value, setValue] = useState([700, 2500]);

  const clear = () =>{
    setSelectSort("")
    setTypeCar("")
    setSelectedRate("")
    setSelectedReview("")
    setSelectedPayment(0)
    setValue([700, 2500])
    setSelectOffer(true)
  }
  const navigate = () => {
    router.push('../Search/Search');
  };

  const handleOffer = () => {
    setSelectOffer(!selectOffer);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(selectedRate);
  const handleSort = (e) => {
    setSelectSort(e.target.value);
  };

  const handleTypeCar = (e) => {
    setTypeCar(e.target.value);
  };

  const handlePayment = (index) => {
    setSelectedPayment(index);
  };

  const handleRate = (index) => {
    setSelectedRate(index);
  };

  const handleReview = (index) => {
    setSelectedReview(index);
  };

  const rate = [
    { text: "1", selected: selectedRate === 0, onClick: handleRate },
    { text: "2", selected: selectedRate === 1, onClick: handleRate },
    { text: "3", selected: selectedRate === 2, onClick: handleRate },
    { text: "4", selected: selectedRate === 3, onClick: handleRate },
    { text: "5", selected: selectedRate === 4, onClick: handleRate },
  ];
  const review = [
    { text: "ดี", selected: selectedReview === 0, onClick: handleReview },
    { text: "ปานกลาง", selected: selectedReview === 1, onClick: handleReview },
    { text: "ดีเยี่ยม", selected: selectedReview === 2, onClick: handleReview },
  ];

  const payment = [
    {
      text: "ชำระเงินวันรับรถ",
      selected: selectedPayment === 0,
      onClick: handlePayment,
    },
    {
      text: "จ่ายทันที",
      selected: selectedPayment === 1,
      onClick: handlePayment,
    },
    {
      text: "ไม่ต้องใช้บัตรเครดิตในการจอง",
      selected: selectedPayment === 2,
      onClick: handlePayment,
    },
    {
      text: "ยกเลิกการจองฟรี",
      selected: selectedPayment === 3,
      onClick: handlePayment,
    },
  ];

  return (
    
    <div className={styles.sortScreen}>
      <div className={styles.header}>
        <Link href={"./Search"}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2 className={styles.titleHeader}>จองรถเช่า</h2>
      </div>
      <div className={styles.container}>
        <p style={{color:"#333333"}}>เรียงตาม</p>
        <SortSelct value={selectSort} onChange={handleSort} />
        <p style={{color:"#333333"}}>ประเภทรถ</p>
        <CarSelect value={selectTypeCar} onChange={handleTypeCar} />
        <p style={{color:"#333333"}}>ระดับดาว</p>
        <div className={styles.rateContainer}>
          {rate &&
            rate.map((button, index) => (
              <button
                key={index}
                className={
                  button.selected ? styles.rateButton : styles.inrateButton
                }
                onClick={() => button.onClick(index)}
              >
                {button.text}
                <StarIcon
                  style={{
                    color: button.selected ? "#fff" : "#EE9A21",
                    fontSize: 12,
                    marginLeft: 5,
                  }}
                />
              </button>
            ))}
        </div>
        <p style={{color:"#333333"}}>คะแนนรีวิว</p>
        <div className={styles.rateContainer}>
          {review &&
            review.map((button, index) => (
              <button
                key={index}
                className={
                  button.selected ? styles.reviewButton : styles.inreviewButton
                }
                onClick={() => button.onClick(index)}
              >
                {button.text}
              </button>
            ))}
        </div>
        <p style={{color:"#333333"}}>ช่วงราคา</p>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <p style={{ fontSize: 14,color:"#333333" }}>฿500</p>
          <p style={{ fontSize: 14,color:"#333333" }}>฿5,000</p>
        </div>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={5000}
          min={500}
          step={100}
          sx={{
            color: "#0068f9",
            height: 3,
            padding: "13px 0",
            "& .MuiSlider-thumb": {
              height: 20,
              width: 20,
              backgroundColor: "#fff",
              border: "2px solid currentColor",

              "& .airbnb-bar": {
                height: 9,
                width: 1,
                backgroundColor: "#c6c6c6",
                marginLeft: 1,
                marginRight: 1,
              },
            },
            "& .MuiSlider-track": {
              height: 3,
            },
          }}
        />
        <p style={{color:"#333333"}}>ข้อเสนอของที่พัก</p>
        <button
          onClick={handleOffer}
          className={selectOffer ? styles.reviewButton : styles.inreviewButton}
        >
          รวมอาหารเช้า
        </button>
        <p style={{ marginTop: 30,color:"#333333" }}>การชำระเงิน</p>
        <div>
          {payment &&
            payment.map((button, index) => (
              <button
                key={index}
                className={
                  button.selected
                    ? styles.paymentButton
                    : styles.inpaymentButton
                }
                onClick={() => button.onClick(index)}
              >
                {button.text}
              </button>
            ))}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.clear} onClick={clear}>ล้าง</button>
        <button className={styles.submit} onClick={navigate}>ใช้ตัวกรอง</button>
      </div>
    </div>
  );
};

export default Sort;
