import React, { useState, useEffect } from "react";
import Card from "../Card";
import { hourMap } from "../../utils/hourMap";
const UTCTime = ({ date }) => {
  const [UTCHours, setUTCHours] = useState(""),
    [UTCMinutes, setUTCMinutes] = useState(""),
    [UTCSeconds, setUTCSeconds] = useState(""),
    [UTCTime, setUTCTime] = useState(""),
    [format, setFormat] = useState("12")
  useEffect(() => {
    setUTCHours(
      date
        ? `${date.getUTCHours()}`.length === 1
          ? `0${date.getUTCHours()}`
          : `${date.getUTCHours()}`
        : ""
    );
  }, [date]);
  useEffect(() => {
    setUTCMinutes(
      date
        ? `${date.getUTCMinutes()}`.length === 1
          ? `0${date.getUTCMinutes()}`
          : `${date.getUTCMinutes()}`
        : ""
    );
  }, [date]);
  useEffect(() => {
    setUTCSeconds(
      date
        ? `${date.getUTCSeconds()}`.length === 1
          ? `0${date.getUTCSeconds()}`
          : `${date.getUTCSeconds()}`
        : ""
    );
  }, [date]);

  useEffect(() => {
    setUTCTime(
      format === "24"
        ? `${UTCHours} : ${UTCMinutes} : ${UTCSeconds}`
        : `${hourMap[UTCHours]} : ${UTCMinutes} : ${UTCSeconds} ${
            parseInt(UTCHours) < 13 ? "AM" : "PM"
          }`
    );
  }, [UTCHours, UTCMinutes, UTCSeconds, format]);

  return <Card value={UTCTime} title="UTC Time" time={true} format={format} setFormat={setFormat} />;
};

export default UTCTime;
