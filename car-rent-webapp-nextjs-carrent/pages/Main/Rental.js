import React, { useState } from "react";
import styles from "@/styles/Main/rental.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CitySelect from "@/components/SelectList.js/CitySelect";
import DatePickerButton from "@/components/Date Picker/DatePickerButton";
import DateSendButton from "@/components/Date Picker/DatePickerButtonSend";
import TimePickerComponent from "@/components/TimePicker";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useRouter } from "next/router";

const Rental = () => {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("");

  const redirectToAnotherPage = () => {
    router.push('../Search/Search');
  };



  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={styles.rentalScreen}>
      <div className={styles.area}>
        <div className={styles.top}>
          <Link href={"/Main/MainScreen"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.header}>จองรถเช่า</h2>
        </div>

        <div className={styles.container}>
          <h3 className={styles.h3}>ค้นหาตามจังหวัด</h3>
          <div>
            <CitySelect value={selectedCity} onChange={handleCityChange} />
            <div className={styles.dateSelect}>
              <DatePickerButton />
              <DateSendButton />
            </div>
            <div className={styles.timeSelect}>
              <div
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  borderRight: "2px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <QueryBuilderIcon
                  style={{ color: "#0068f9", fontSize: "30px" }}
                />
                <div style={{ marginLeft: "10px" ,color:"#333333"}}>
                  เวลารับรถ
                  <TimePickerComponent />
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  flexDirection: "row",
                  display: "flex",
                  marginLeft: 10,
                }}
              >
                <QueryBuilderIcon
                  style={{ color: "#0068f9", fontSize: "30px" }}
                />
                <div style={{ marginLeft: "10px",color:"#333333" }}>
                  เวลาส่งรถ
                  <TimePickerComponent />
                </div>
              </div>
            </div>

            <button className={styles.buttonSearch} onClick={redirectToAnotherPage}>ค้นหารถ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
