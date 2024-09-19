// components/Card.js

import React from "react";

const Destination = ({ data }) => {
  return (
    <div className="Destinaation-container">
      <div className="Destinaations">
        {data.map((item) => (
          <div key={item.id} className="Destinaation">
            <img src={item.imageUrl} alt={item.title} />
            <div className="Destinaation-content">
              <h3 style={{color:"#333333"}}>{item.title}</h3>
              <div className="description">
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .Destinaation-container {
          display: flex;
          overflow-x: scroll;
          width: 100%;
        }
        p{
          color: #0068f9;
          font-size: 11px;
          font-weight: 500;
          margin-top: 10px;
        }

        .Destinaations {
          display: flex;
        }

        .Destinaation {
          border: 1px solid #ccc;
          border-radius: 10px;
          margin-top: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 200px;
          max-height: 160px;
          overflow: hidden;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
          /* Add your desired box shadow properties here */
        }

        img {
          width: 100%;
          height: 60%;
          object-fit: cover;
        }

        .Destinaation-content {
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
          font-size: 13px;

        }
      `}</style>
    </div>
  );
};

export default Destination;
