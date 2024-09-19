import React from "react";
import styles from "@/styles/Components/Modal.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const Modal = ({ isOpen, onClose, buttons, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        {children}
        <div className={styles.buttonContainer}>
          {buttons &&
            buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => button.onClick(index)}
                className={button.selected ? styles.selected : ""}
              >
                {button.text}
                <ChevronRightOutlinedIcon />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
