import React from "react";
import ReviewList from "@/components/ReviewList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import styles from '@/styles/Search/review.module.css'
import reviewsData from "@/components/data/reviewData";


const review = () => {
  return (
    <div className={styles.reviewScreen}>
      <div className={styles.header}>
        <Link href={"./detail"}>
          <ChevronLeftIcon style={{color:"#333333"}}/>
        </Link>
        <h2 className={styles.titleHeader}>คะแนนและรีวิว</h2>
      </div>
      <ReviewList reviews={reviewsData} />
    </div>
  );
};

export default review;
