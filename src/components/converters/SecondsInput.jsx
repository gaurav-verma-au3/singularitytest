import React, { useState, useEffect } from "react";
import { FormControl, TextField } from "@material-ui/core";
import {
  setUTCTimeAndDateUtil,
  setLocalTimeAndDateUtil,
} from "../../utils/converterLogic";
import Paper from "@material-ui/core/Paper";
import {
  AiOutlineExpand,
  AiFillClockCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

const SecondsInput = () => {
  const [UTCTimeAndDate, setUTCTimeAndDate] = useState(""),
    [LocalTimeAndDate, setLocalTimeAndDate] = useState(""),
    [timestamp, setTimestamp] = useState(""),
    initialError = {
      status: false,
      message: "",
    },
    [error, setError] = useState(initialError);

  const handleChange = (e) => {
    setTimestamp(e.target.value);
  };

  useEffect(() => {
    if (isNaN(timestamp)) {
      setError({
        status: true,
        message: "invalid input",
      });
    } else {
      setError(initialError);
      setUTCTimeAndDateUtil(timestamp, setUTCTimeAndDate);
      setLocalTimeAndDateUtil(timestamp, setLocalTimeAndDate);
    }
    // eslint-disable-next-line
  }, [timestamp]);

  return (
    <Paper
      elevation={3}
      className="container-fluid border border-1 rounded py-3 shadow shadow-sm"
    >
      <FormControl className=" w-100">
        <TextField
          variant="outlined"
          error={error.status}
          value={timestamp}
          type="number"
          className={`w-100 mt-3`}
          label="Convert Seconds"
          name="seconds"
          onChange={(e) => handleChange(e)}
        />
        {error.status ? (
          <small className="text-danger textcenter">{error.message}a</small>
        ) : null}
        <TextField
          variant="outlined"
          className={`w-100 mt-3`}
          label="to UTC time & date"
          value={UTCTimeAndDate}
          readOnly
        />
        <TextField
          variant="outlined"
          className={`w-100 mt-3`}
          label="to Local time & date"
          value={LocalTimeAndDate}
          readOnly
        />
      </FormControl>
      <div className="d-flex justify-content-center align-items-center py-3">
        <AiFillClockCircle className="mx-2 pointer" />
        <AiOutlineExpand
          className="mx-2 pointer"
          onClick={(e) =>
            handleChange({ target: { value: Date.now() / 1000 } })
          }
        />
        <AiFillCloseCircle
          className="mx-2 pointer"
          onClick={(e) => handleChange({ target: { value: "" } })}
        />
      </div>
    </Paper>
  );
};

export default SecondsInput;
