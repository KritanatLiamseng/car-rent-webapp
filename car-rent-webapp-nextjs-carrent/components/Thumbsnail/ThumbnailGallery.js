// components/ThumbnailGallery.js
import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import styles from "@/styles/Components/thumbsnail.module.css";

const ThumbnailGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageChange = (src, alt) => {
    setMainImage({ src, alt });
  };

  return (
    <div style={{ width: "100%"}}>
      <div >
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          width={"100%"}
          height={250}
          objectPosition="center"
          className={styles.mainImage}
        />
      </div>
      <div className={styles.thumbnail}>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={handleImageChange}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGallery;
