import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { useRouter } from "next/router";
const Fav = ({ data }) => {
  const router = useRouter()
  const navigate=()=>{
    router.push('../../Search/detail')
  }
  return (
    <div className="card-container">

      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            
            <img src={item.imageUrl} alt={item.title} className="MainImg" />
            <div className="text-overlay">
              <h4>ลด 48%</h4>
            </div>
            <div className="data">
              <div className="top">
                <div className="title">
                  <h3>{item.title}</h3>
                  <FavoriteIcon
                    style={{ fontSize: "20px", color: "#c6c6c6" }}
                  />
                </div>
                <div className="detail">
                  <TimeToLeaveIcon
                    style={{ fontSize: "small", marginRight: 2 }}
                  />
                  <p className="icon">{item.type}</p>
                  <SettingsSuggestIcon
                    style={{ fontSize: "small", marginRight: 2 }}
                  />
                  <p className="icon">{item.transmission}</p>
                  <PersonIcon style={{ fontSize: "small", marginRight: 2 }} />
                  <p className="icon">{item.seat}</p>
                  <WorkIcon style={{ fontSize: "small", marginRight: 2 }} />
                  <p className="icon">{item.bag}</p>
                </div>
              </div>
              <div>
                <div className="service">
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className="icon">{item.service1}</p>
                </div>
                <div className="service">
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className="icon">{item.service2}</p>
                </div>
                <div className="service">
                  <CheckCircleOutlineIcon
                    style={{ fontSize: "10px", marginRight: 2 }}
                  />
                  <p className="icon">{item.service3}</p>
                </div>
                <p className="credit">ไม่ต้องใช้บัตรเครดิตจอง</p>
                <p className="doc">ต้องใช้เอกสารเพิ่มเติม</p>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    src={item.rentalImage}
                    alt={item.title}
                    className="renimg"
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
                      <p className="icon">{item.rental}</p>
                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarIcon
                          style={{
                            fontSize: "10px",
                            marginRight: 2,
                            color: "#FFA625",
                          }}
                        />
                        <p className="rate">{item.rate} ดีเยี่ยม</p>
                        <p className="text">| {item.amountRate}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      }}
                    >
                      <p className="icon">สำหรับ 1 วัน</p>
                      <p className="price">{item.price} /วัน</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button" onClick={navigate}>รายละเอียด</button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
      h4{
        font-family: "Prompt";
        font-weight: normal;
        font-size: 12px;
      }
      .text-overlay {
        position: absolute;
        text-align: right;
        background-color: #FFA625;
        color: #fff;
        border-start-end-radius: 40px;
        border-end-end-radius: 40px;
        width:65px;
        padding:1.5px;
        margin-top:7px;
        
       
      }
      .price{
        color:#FFA625;
        font-size: 14px;
      }
      .text{
        color:#333333;
      }
      .rate{
        color:#FFA625;
      }
      .renimg{
        width:25px;
        height: 25px;
        object-fit: cover;
        border-radius: 3px;
      }
      .button{
        background-color: #0068f9;
        color:#fff;
        font-family: "Prompt";
        border-radius: 6px;
        height: 25px;
        border-color: rgba(0, 0, 0, 0);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      }
      .doc{
        background-color: #04800D;
        color: #fff;
        width: 60%;
        border-radius: 40px;
        padding:2px
        align-items: center;
        text-align: center;
        margin-top: 5px;
      }
      .credit{
        background-color: #FFA625;
        color: #fff;
        width: 60%;
        border-radius: 40px;
        padding:2px
        align-items: center;
        text-align: center;
        margin-top: 5px;
      }
       .service {
          flex-direction: row;
          display: flex;
          color: #0068f9;
          align-items: center;
        }
        .top {
          border-bottom: 1.5px solid #ccc;
          width: 100%;
          flex-direction: column;
          padding-bottom: 3px;
          margin-bottom: 5px;
        }
        .title {
          justify-content: space-between;
          width: 100%;
          flex-direction: row;
          display: flex;
        }
        .card-container {
          width: 100%;
          display: flex;
        }

        .data {
          display: flex;
          flex-direction: column;
          padding: 10px;
          width: 100%;
        }
        .detail {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #0068f9;
        }
        .card {
          margin-top: 10px;
          width: 100%;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
          background-color: #fff;
          height: 230px;
          display: flex;
          flex-direction: row;
        }

        .MainImg {
          width: 40%;
          height: 100%;
          object-fit: cover;
        }
        .cards {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        p {
          font-size: 10px;
          color: #333333;
          margin-right: 10px;
          font-family: "Prompt";
        }
        h3 {
          color: #333333;
          font-family: "Prompt";
        }
      `}</style>
    </div>
  );
};

export default Fav;
