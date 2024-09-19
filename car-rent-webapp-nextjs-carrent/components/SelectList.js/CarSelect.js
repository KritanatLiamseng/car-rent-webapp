import React from "react";
import styles from "@/styles/Search/sort.module.css";
import typeCar from "../data/typecar";

const CarSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className={styles.Select} >
      {typeCar.map((typeCar, index) => (
        <option key={index} value={typeCar}>
          {typeCar}
        </option>
      ))}
    </select>
  );
};

export default CarSelect;
