import React from "react";
import StarRatings from "react-star-ratings";
import styles from "@/styles/Search/review.module.css";

const ReviewList = ({ reviews }) => {
  // Calculate average rating
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;

    const totalStars = reviews.reduce((accumulator, review) => {
      return accumulator + review.star;
    }, 0);

    return totalStars / reviews.length;
  };

  // Calculate the percentage of each rating type
  const calculatePercentage = (ratingType) => {
    const filteredReviews = reviews.filter(
      (review) => review.rating === ratingType
    );
    return (filteredReviews.length / reviews.length) * 100;
  };
  // Count the number of each rating type
  const countRating = (ratingType) => {
    return reviews.filter((review) => review.rating === ratingType).length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.pointReview}>
        <div className={styles.point}>
          <h3 style={{ fontWeight: "normal", fontSize: 14 ,  color:"#333333"}}>คะแนน</h3>
          <div style={{ flexDirection: "row", display: "flex", marginTop: 0 }}>
            <StarRatings
              rating={calculateAverageRating()}
              starRatedColor="#0068f9"
              numberOfStars={5}
              starDimension="12px"
              starSpacing="1px"
            />
            <p style={{ marginLeft: 5 }}>
              {calculateAverageRating().toFixed(1)}{" "}
            </p>
          </div>
          <p className={styles.textDetail}>รีวิว : {reviews.length}</p>
        </div>
        <div className={styles.review}>
          <div className={styles.progressLayout}>
            <p className={styles.textDetail}>ดีมาก</p>
            <div className={styles["progress-bar-container"]}>
              <div
                className={`${styles["progress-bar-fill"]} ${styles["ดีมาก"]}`}
                style={{
                  width: `${(countRating("ดีมาก") / reviews.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className={styles.textDetail}>{countRating("ดีมาก")}</span>
          </div>
          <div className={styles.progressLayout}>
            <p className={styles.textDetail}>ปานกลาง</p>
            <div className={styles["progress-bar-container"]}>
              <div
                className={`${styles["progress-bar-fill"]} ${styles["ปานกลาง"]}`}
                style={{
                  width: `${(countRating("ปานกลาง") / reviews.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className={styles.textDetail}>{countRating("ปานกลาง")}</span>
          </div>
          <div className={styles.progressLayout}>
            <p className={styles.textDetail}>น้อย</p>
            <div className={styles["progress-bar-container"]}>
              <div
                className={`${styles["progress-bar-fill"]} ${styles["น้อย"]}`}
                style={{
                  width: `${(countRating("น้อย") / reviews.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className={styles.textDetail}>{countRating("น้อย")}</span>
          </div>
        </div>
      </div>
      <h3 className={styles.reviewTitle}> คะแนนและรีวิว</h3>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewContainer}>
            <p className={styles.text}>{review.name}</p>
            <StarRatings
            rating={review.star}
            starRatedColor="#0068f9"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="0px"
          />
          <p className={styles.text}>{review.car}</p>
          <p className={styles.text}>รับรถ: {review.date}</p>
          <p className={styles.text}>{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
