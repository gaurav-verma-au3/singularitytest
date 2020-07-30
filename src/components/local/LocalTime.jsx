import React, { useEffect, useState } from 'react'
import { hourMap } from '../../utils/hourMap';
import Card from "../Card";
const LocalTime = ({ date }) => {
    const [Hours, setHours] = useState(""),
      [Minutes, setMinutes] = useState(""),
      [Seconds, setSeconds] = useState(""),
      [Time, setTime] = useState(""),
      [format, setFormat] = useState("12")
  
    useEffect(() => {
      setHours(
        date
          ? `${date.getHours()}`.length === 1
            ? `0${date.getHours()}`
            : `${date.getHours()}`
          : ""
      );
    }, [date]);
    useEffect(() => {
      setMinutes(
        date
          ? `${date.getMinutes()}`.length === 1
            ? `0${date.getMinutes()}`
            : `${date.getMinutes()}`
          : ""
      );
    }, [date]);
    useEffect(() => {
      setSeconds(
        date
          ? `${date.getSeconds()}`.length === 1
            ? `0${date.getSeconds()}`
            : `${date.getSeconds()}`
          : ""
      );
    }, [date]);
  
    useEffect(() => {
      setTime(
        format === "24"
          ? `${Hours} : ${Minutes} : ${Seconds}`
          : `${hourMap[Hours]} : ${Minutes} : ${Seconds} ${
              parseInt(Hours) < 13 ? "AM" : "PM"
            }`
      );
    }, [Hours, Minutes, Seconds, format]);
  
    return <Card value={Time} title="Local Time" time={true} format={format} setFormat={setFormat} />;
  };

export default LocalTime
