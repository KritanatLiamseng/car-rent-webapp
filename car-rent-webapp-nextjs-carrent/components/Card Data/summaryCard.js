import React from 'react';
import styles from '@/styles/Search/summary.module.css'
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
const SummaryCard = ({ car }) => {

      return (
        <div className={styles.card}>
          <img src={car.imageUrl} alt="Car" className={styles.MainImg}/>
          <div className={styles.textoverlay}>
              <h4>ลด 48%</h4>
            </div>
            <div className={styles.data}>
              <div className={styles.top}>
                <div className={styles.title}>
                  <h3 className={styles.h3}>{car.title}</h3>
                </div>
                <div className={styles.detail}>
                  <TimeToLeaveIcon
                    style={{ fontSize: "small", marginRight: 2 }}
                  />
                  <p className={styles.p}>{car.type}</p>
                  <SettingsSuggestIcon
                    style={{ fontSize: "small", marginRight: 2 }}
                  />
                  <p className={styles.p}>{car.transmission}</p>
                  <PersonIcon style={{ fontSize: "small", marginRight: 2 }} />
                  <p className={styles.p}>{car.seat}</p>
                  <WorkIcon style={{ fontSize: "small", marginRight: 2 }} />
                  <p className={styles.p}>{car.bag}</p>
                </div>
              </div>
              <div>
                <div className={styles.service}>
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className={styles.p}>{car.service1}</p>
                </div>
                <div className={styles.service}>
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className={styles.p}>{car.service2}</p>
                </div>
                <div className={styles.service}>
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className={styles.p}>{car.service3}</p>
                </div>
                <p className={styles.credit}>ไม่ต้องใช้บัตรเครดิตจอง</p>
                <p className={styles.doc}>ต้องใช้เอกสารเพิ่มเติม</p>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    aligncars: "center",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    src={car.rentalImage}
                    alt={car.title}
                    className={styles.renimg}
                  />
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: 5,
                        justifyContent: "space-between",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <p className={styles.p}>{car.rental}</p>
                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          aligncars: "center",
                        }}
                      >
                        <StarIcon
                          style={{
                            fontSize: "10px",
                            marginRight: 2,
                            color: "#FFA625",
                          }}
                        />
                        <p className={styles.rate}>{car.rate} ดีเยี่ยม</p>
                        <p className={styles.text}>| {car.amountRate}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        aligncars: "flex-end",
                      }}
                    >
                      <p className={styles.p}>สำหรับ 1 วัน</p>
                      <p className={styles.price}>{car.price} /วัน</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
  
};

export default SummaryCard;