import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears, format } from "date-fns";
import { th } from "date-fns/locale";
import { utcToZonedTime } from "date-fns-tz";
import styles from "@/styles/Main/rental.module.css"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { date } from "yup";

const DatePickerButton = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Set the default date to the current date
    setSelectedDate(new Date());
  }, []);

  const getBuddhistEraYear = (date) => {
    const thaiYear = format(addYears(date, 543), "yy", { locale: th });
    return `${thaiYear}`;
  };

  return (
    <div style={{ width: "100%" ,borderRight:"2px solid rgba(0, 0, 0, 0.1)"}}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd MMMM yyyy"
        locale={th}
        calendarClassName="datepicker-calendar"
        customInput={
          <div style={{alignItems:"flex-start",display:"flex",fontSize:14,color:"#333"}}>
            <CalendarMonthIcon style={{ color: "#0068f9",marginRight:10 }} />
            วันที่รับรถ
          </div>
        }
      />
      {selectedDate && (
        <div className="selected-date">
          <p className="date">{format(selectedDate, "d", { locale: th })}</p>
          <div style={{ flexDirection: "column", marginLeft:5 }}>
            <p className="etc">{format(selectedDate, "EE", { locale: th })}</p>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <p className="etc">
                {format(selectedDate, "MMM", { locale: th })}
              </p>
              <p className="etc">{getBuddhistEraYear(selectedDate)}</p>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .datepicker-calendar {
          color: black;
        }

        .selected-date {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -15px;
        }
        .etc {
          font-size: 14px;
          color: #333;
          margin-right: 7.5px;
        }

        .date {
          font-size: 60px;
          color: #0068f9;

        }
      `}</style>
    </div>
  );
};

export default DatePickerButton;
