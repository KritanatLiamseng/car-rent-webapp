import React from 'react';
import city from '../data/City ';
import styles from '@/styles/Main/rental.module.css'

const CitySelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className={styles.selectList} >
      {city.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
