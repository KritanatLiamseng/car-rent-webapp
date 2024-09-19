import React, { useState } from "react";
import styles from "@/styles/etc/policy.module.css";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Policy = () => {
  return (
    <div className={styles.policyScreen}>
      <div className={styles.top}>
        <Link href={"/Main/MainScreen"}>
          <ChevronLeftIcon style={{color:"#333333"}} />
        </Link>
        <h2 className={styles.header}>นโยบายความเป็นส่วนตัว</h2>
      </div>

      <div className={styles.policyContainer}>
        <h4 style={{color:"#333333"}}>นโยบายความเป็นส่วนตัว</h4>
        <p style={{margin:"10px 10px",color:"#333333"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tellus
          ac augue ultricies luctus. Integer nec pellentesque nulla. Nullam quis
          vehicula felis, non sollicitudin mi. Aenean non accumsan lorem, sed
          pharetra sapien. Fusce tortor est, luctus nec risus id, congue ornare
          massa. Fusce eu vestibulum urna. Maecenas ac suscipit leo, a efficitur
          justo. Ut nisl erat, maximus eget placerat quis, vulputate sit amet
          nulla. Vivamus elit urna, porttitor sed ex non, interdum ullamcorper
          neque. Curabitur ac purus non quam pretium semper quis in lacus.
          Integer fringilla sapien eget ipsum condimentum maximus. Morbi
          tristique sem quis risus aliquet, at imperdiet lectus interdum.
          Aliquam in vulputate libero. Integer ac scelerisque enim, ac mattis
          felis. Suspendisse sagittis vel felis vel dignissim. Nullam et neque
          dui. Cras orci odio, accumsan vel quam nec, condimentum egestas nibh.
          Sed a fringilla lacus. Mauris facilisis, leo nec ultricies hendrerit,
          nisi dui aliquam tortor, ut euismod elit velit nec eros. 
         
        </p>
      </div>
    </div>
  );
};

export default Policy;
