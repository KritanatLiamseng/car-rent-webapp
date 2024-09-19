import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import styles from "@/styles/Search/result.module.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import bank from "@/components/data/bankImg";

const payment = () => {
  const [selectCash, setSelctCash] = useState(false);
  const [selectCard, setSelectCard] = useState(false);
  const [selectBank, setSelectBank] = useState(false);
  const [selectKT, setSelectKT] = useState(false);
  const [selectKB, setSelectKB] = useState(false);
  const [selectKTH, setSelectKTH] = useState(false);
  const [selectKS, setSelectKS] = useState(false);
  const [selectSCB, setSelectSCB] = useState(false);

  const handleSelectCash = () => {
    setSelctCash(true);
    setSelectCard(false);
    setSelectBank(false);
    setSelectKB(false);
    setSelectKS(false);
    setSelectKT(false);
    setSelectKTH(false);
    setSelectSCB(false);
  };
  const handleSelectCard = () => {
    setSelctCash(false);
    setSelectCard(true);
    setSelectBank(false);
    setSelectKB(false);
    setSelectKS(false);
    setSelectKT(false);
    setSelectKTH(false);
    setSelectSCB(false);
  };

  const handleSelectKT = () => {
    setSelctCash(false);
    setSelectCard(false);
    setSelectBank(true);
    setSelectKB(false);
    setSelectKS(false);
    setSelectKT(true);
    setSelectKTH(false);
    setSelectSCB(false);
  };
  const handleSelectKB = () => {
    setSelctCash(false);
    setSelectCard(false);
    setSelectBank(true);
    setSelectKB(true);
    setSelectKS(false);
    setSelectKT(false);
    setSelectKTH(false);
    setSelectSCB(false);
  };
  const handleSelectKTH = () => {
    setSelctCash(false);
    setSelectCard(false);
    setSelectBank(true);
    setSelectKB(false);
    setSelectKS(false);
    setSelectKT(false);
    setSelectKTH(true);
    setSelectSCB(false);
  };
  const handleSelectKS = () => {
    setSelctCash(false);
    setSelectCard(false);
    setSelectBank(true);
    setSelectKB(false);
    setSelectKS(true);
    setSelectKT(false);
    setSelectKTH(false);
    setSelectSCB(false);
  };
  const handleSelectSCB = () => {
    setSelctCash(false);
    setSelectCard(false);
    setSelectBank(true);
    setSelectKB(false);
    setSelectKS(false);
    setSelectKT(false);
    setSelectKTH(false);
    setSelectSCB(true);
  };

  return (
    <div className={styles.resultScreen}>
      <div style={{height:"100%",marginBottom:80}}>
        <div className={styles.header}>
          <Link href={"./result"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.titleHeader}>จองรถเช่า</h2>
        </div>
        <div className={styles.container}>
          <h4 style={{ marginBottom: 10 ,color:"#333333"}}>เลือกวิธีการชำระเงิน</h4>
          <div className={styles.payment}>
            <button
              className={selectCash ? styles.AccashButton : styles.incashButton}
              onClick={handleSelectCash}
            >
              <AccountBalanceWalletIcon
                style={{ color: "#0068f9", marginRight: 10 }}
              />
              ชำระเงินสด
            </button>
            <button
              className={selectCard ? styles.AccashButton : styles.incashButton}
              onClick={handleSelectCard}
            >
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <div style={{ alignItems: "center", display: "flex" }}>
                  <CreditCardIcon style={{ marginRight: 10 }} />
                  Credit card
                </div>
                <ArrowForwardIosIcon />
              </div>
            </button>
            <div
              className={selectBank ? styles.AccashButton : styles.incashButton}
            >
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  width: "100%",
                }}
              >
                ออนไลน์แบงค์กิ้ง
                <div className={styles.areaButton}>
                  <button
                    className={
                      selectKT ? styles.Acbankbutton : styles.inbankbutton
                    }
                    onClick={handleSelectKT}
                  >
                    <img
                      src={bank[0]}
                      alt={bank[0]}
                      className={styles.imgBank}
                    />
                  </button>
                  <button
                    className={
                      selectKB ? styles.Acbankbutton : styles.inbankbutton
                    }
                    onClick={handleSelectKB}
                  >
                    <img
                      src={bank[1]}
                      alt={bank[1]}
                      className={styles.imgBank}
                    />
                  </button>
                  <button
                    className={
                      selectKS ? styles.Acbankbutton : styles.inbankbutton
                    }
                    onClick={handleSelectKS}
                  >
                    <img
                      src={bank[2]}
                      alt={bank[2]}
                      className={styles.imgBank}
                    />
                  </button>
                  <button
                    className={
                      selectKTH ? styles.Acbankbutton : styles.inbankbutton
                    }
                    onClick={handleSelectKTH}
                  >
                    <img
                      src={bank[3]}
                      alt={bank[3]}
                      className={styles.imgBank}
                    />
                  </button>
                  <button
                    className={
                      selectSCB ? styles.Acbankbutton : styles.inbankbutton
                    }
                    onClick={handleSelectSCB}
                  >
                    <img
                      src={bank[4]}
                      alt={bank[4]}
                      className={styles.imgBank}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Link href={"./complete"} className={styles.buttonNext}>
          ยืนยันการจอง
        </Link>
      </div>
    </div>
  );
};

export default payment;
