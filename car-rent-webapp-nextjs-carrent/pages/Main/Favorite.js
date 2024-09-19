import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Fav from "@/components/Card Data/Fav";
import favData from "@/components/data/fav";

const Favorite = () => {
  return (
    <div
      style={{
        backgroundColor: "#c6c6c6",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          height: 60,
          alignItems: "center",
          boxShadow: "0 5px 4px rgba(0,0,0,0.2",
        }}
      >
        <Link href={"/Main/MainScreen"}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2
          style={{
            fontFamily: "Prompt",
            fontWeight: "normal",
            fontSize: "18px",
            marginLeft: "130px",
            color: "#333333",
          }}
        >
          รายการโปรด
        </h2>
      </div>
      <div style={{display:"flex",width:"100%"}}>
      <Fav data={favData} />
      </div>
    </div>
  );
};
export default Favorite;
