import React, { useState } from "react";
import styles from "@/styles/Search/search.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Fav from "@/components/Card Data/Fav";
import favData from "@/components/data/fav";
import Modal from "@/components/ModalSort";

const Search = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState('รถเช่าแนะนำ');
  const [selectedButton, setSelectedButton] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRecomand = (index) => {
    setButtonText('รถเช่าแนะนำ');
    setSelectedButton(index);
    closeModal(); 
  };

  const handlelowest = (index) => {
    setButtonText('ราคาต่ำที่สุด');
    setSelectedButton(index);
    closeModal();
  };
  const handleHighest = (index) => {
    setButtonText('ราคาสูงที่สุด');
    setSelectedButton(index);
    closeModal(); 
  };

  const handleMostReview = (index) => {
    setButtonText('คะแนนรีวิวสูงที่สุด');
    setSelectedButton(index);
    closeModal(); 
  };
  const handleNear= (index) => {
    setButtonText('ใกล้ที่สุด');
    setSelectedButton(index);
    closeModal(); 
  };


  const buttons = [
    { text: 'รถเช่าแนะนำ', onClick: handleRecomand  ,selected: selectedButton === 0  },
    { text: 'ราคาต่ำที่สุด', onClick: handlelowest ,selected: selectedButton === 1 },
    { text: 'ราคาสูงที่สุด', onClick: handleHighest,selected: selectedButton === 2  },
    { text: 'คะแนนรีวิวสูงที่สุด', onClick: handleMostReview ,selected: selectedButton === 3 },
    { text: 'ใกล้ที่สุด', onClick: handleNear,selected: selectedButton === 4},
  ];
  return (
    <div className={styles.SearchScreen}>
      <div className={styles.areaHeader}>
        <div className={styles.top}>
          <Link href={"/Main/MainScreen"}>
            <ChevronLeftIcon style={{color:"#333333"}}/>
          </Link>
          <h2 className={styles.header}>จองรถเช่า</h2>
        </div>
        <div className={styles.searchArea}>
          <div className={styles.search}>
            <div>
              <h3 className={styles.h3}>{"เชียงราย > สนามบินเชียงราย"}</h3>
              <h3 className={styles.h3}>{"15/97/22 10:00 - 16/07/22 10:00"}</h3>
            </div>
            <SearchIcon style={{ color: "#EE9A21" }} />
          </div>
          <Link href={"./Sort"}>
          <FilterAltOutlinedIcon style={{ color: "#EE9A21" }} />
          </Link>
         
        </div>
        <button className={styles.sort} onClick={openModal}>
          {buttonText}
          <ExpandMoreOutlinedIcon />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} buttons={buttons}>
        <p>เรียงตาม</p>
      </Modal>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Fav data={favData} />
      </div>
    </div>
  );
};

export default Search;
