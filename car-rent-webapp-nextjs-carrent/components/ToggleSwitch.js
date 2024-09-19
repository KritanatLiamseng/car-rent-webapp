import { useState } from 'react';
import styles from "@/styles/etc/noti.module.css";
const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
      setIsChecked((prevState) => !prevState);
    };
  
    return (
      <div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />
          <span className={styles.slider}></span>
        </label>

      </div>
    );
};

export default ToggleSwitch;
