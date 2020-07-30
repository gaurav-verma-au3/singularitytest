import React, { useEffect, useState } from "react";
import Card from "../Card";
import {
  setDayUtil,
  setMonthUtil,
  setYearUtil,
  setDateUtil,
} from "../../utils/weekLogic";

const LocalDate = ({ date }) => {
  const [localDay, setLocalDay] = useState(""),
    [localDate, setlocalDate] = useState(""),
    [localMonth, setlocalMonth] = useState(""),
    [localYear, setlocalYear] = useState("");

  useEffect(() => {
    setDateUtil(date, setlocalDate);
    setDayUtil(date, setLocalDay);
    setMonthUtil(date, setlocalMonth);
    setYearUtil(date, setlocalYear);
  }, [date]);
  return (
    <Card
      value={date ? `${localDay} ${localMonth} ${localDate} ${localYear}` : ""}
      title="Local Date"
    />
  );
};

export default LocalDate;
