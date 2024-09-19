// components/Card.js

import React from "react";

const News = ({ data }) => {
  return (
    <div className="News-container">
      <div className="News">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <div className="News-content">
              <h3 style={{color:"#333333"}}>{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .News-container {
          display: flex;
          overflow-x: scroll;
          width: 100%;
        }
        p {
          color: #0068f9;
          font-size: 11px;
          font-weight: 500;
          margin-top: 10px;
        }

        .News {
          display: flex;
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

        .News-content {
          padding: 10px;
        }
        .description {
          max-height: 100px;
          overflow-y: auto;
          font-family: "Prompt";
          font-weight: 500;
        }
        h3 {
          margin: 0;
          font-family: "Prompt";
          font-size: 16px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default News;
