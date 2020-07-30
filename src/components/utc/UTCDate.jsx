import React, { useEffect, useState } from "react";
import Card from "../Card";
import {
  setDayUtil,
  setMonthUtil,
  setYearUtil,
  setDateUtil,
} from "../../utils/weekLogic";
const UTCDate = ({ date }) => {
  const [day, setDay] = useState(""),
    [UTCDate, setUTCDate] = useState(""),
    [UTCMonth, setUTCMonth] = useState(""),
    [UTCYear, setUTCYear] = useState("");

  useEffect(() => {
    setDateUtil(date, setUTCDate, true);
    setDayUtil(date, setDay, true);
    setMonthUtil(date, setUTCMonth, true);
    setYearUtil(date, setUTCYear, true);
  }, [date]);

  return (
    <Card
      value={date ? `${day} ${UTCMonth} ${UTCDate} ${UTCYear}` : ""}
      title="UTC Date"
    />
  );
};

export default UTCDate;
