// components/Thumbnail.js
import React from 'react';
import styles from '@/styles/Components/thumbsnail.module.css'

const Thumbnail = ({ src, alt, onClick }) => {
  return (
    <div  onClick={() => onClick(src, alt)}>
      <img src={src} alt={alt}  className={styles.img}/>
    </div>
  );
};

export default Thumbnail;
