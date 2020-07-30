import React, { useState, useEffect } from "react";
import { FormControl, TextField } from "@material-ui/core";
import { KeyboardDatePicker, TimePicker } from "@material-ui/pickers";
import Paper from "@material-ui/core/Paper";
import {
  AiOutlineExpand,
  AiFillClockCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

const DateInput = () => {
  const [selectedDate, handleDateChange] = useState(null);
  const [selectedTime, handleTimeChange] = useState(null);
  const [UNIXTimeStamp, setUNIXTimestamp] = useState("");
  const handleChange = (date) => {
    handleDateChange(date);
    handleTimeChange(date);
  };

  useEffect(
    () => {
      const date = selectedDate ? `${selectedDate}`.slice(0, 15) : null;
      const time = selectedTime ? `${selectedTime}`.slice(16, 24) : null;
      const timestamp = Date.parse(
        date && time ? `${date} ${time}` : date ? date : time ? `Thu Nov 30 1899 ${time}` : ""
      );
      setUNIXTimestamp(timestamp ? timestamp/1000 : "");
    },
    // eslint-disable-next-line
    [selectedDate, selectedTime]
  );

  return (
    <Paper
      elevation={3}
      className="container-fluid border border-1 rounded py-3 shadow shadow-sm"
    >
      <FormControl className=" w-100">
        <KeyboardDatePicker
          clearable
          error={false}
          value={selectedDate}
          label="Select Date"
          className={`w-100 mt-3`}
          inputVariant="outlined"
          onChange={(date) => handleDateChange(date)}
          format="MM/dd/yyyy"
        />

        <TimePicker
          ampm={false}
          clearable
          openTo="hours"
          inputVariant="outlined"
          className={`w-100 mt-3`}
          views={["hours", "minutes", "seconds"]}
          format="HH:mm:ss"
          label="Select Time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
        <TextField
          variant="outlined"
          className={`w-100 mt-3`}
          label="UNIX Timestamp"
          value={UNIXTimeStamp}
          readOnly
        />
      </FormControl>
      <div className="d-flex justify-content-center align-items-center py-3">
        <AiFillClockCircle className="mx-2 pointer" />
        <AiOutlineExpand
          className="mx-2 pointer"
          onClick={(e) => handleChange(new Date())}
        />
        <AiFillCloseCircle
          className="mx-2 pointer"
          onClick={(e) => handleChange(null)}
        />
      </div>
    </Paper>
  );
};

export default DateInput;
