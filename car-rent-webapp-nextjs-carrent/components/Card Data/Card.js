
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <div className="card-content">
              <div style={{display:"flex",justifyContent:"space-between",marginRight:5}}>
                <h3>{item.title}</h3>
                <FavoriteIcon style={{ fontSize: "small", color: "#c6c6c6" }} />
              </div>

              <div className="description">
                <div className="data">
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
                </div>

                <h3 style={{marginTop:7.5}}>{item.rental}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          overflow-x: scroll;
          width: 100%;
        }
        .cards {
          display: flex;
        }
        .data {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
        }
        p {
          color: #333333;
          font-size: 8px;
          font-family: "Prompt";
          font-weight: 500;
          margin-right: 5px;
        }
        .card {
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-top: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 150px;
          max-height: 160px;
          overflow: hidden;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        }

        img {
          width: 100%;
          height: 60%;
          object-fit: cover;
        }

        .card-content {
          padding-left: 10px;
        }
        .description {
          max-height: 100px;
          overflow-y: auto;
          color: #0068f9;
        }
        h3 {
          color: #333333;
          font-family: "Prompt";
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Card;
