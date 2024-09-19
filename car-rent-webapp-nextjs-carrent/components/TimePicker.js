import React, { useState, useEffect } from 'react';
import styles from "@/styles/Main/rental.module.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const format = "HH:mm";
const TimePickerComponent = () => {
    const [selectedTime, setSelectedTime] = useState(new Date());

    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };
  
    return (
      <div style={{height:"100%"}}>
        <DatePicker
          selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="h:mm"
          timeCaption="Time"
          timeInputLabel="Hour:"
          className={styles.timestyle}
        />
      </div>
    );
};

export default TimePickerComponent;
