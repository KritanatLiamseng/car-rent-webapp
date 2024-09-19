import React from "react";
import styles from "@/styles/Search/sort.module.css";

const rateSelect = ({ rate, children }) => {
  return (
    <div className={styles.rateContainer} onClick={(e) => e.stopPropagation()}>
        {children}
      {rate &&
        rate.map((rates, index) => (
          <button
            key={index}
            onClick={() => rates.onClick(index)}
            className={rates.selected ? styles.selected : ""}
          >
            {rate.text}
          </button>
        ))}
    </div>
  );
};

export default rateSelect;
