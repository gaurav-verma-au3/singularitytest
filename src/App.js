import React, { useState, useEffect } from "react";
import UNIXTimestamp from "./components/UNIXTimestamp";
import UTCDate from "./components/utc/UTCDate";
import LocalDate from "./components/local/LocalDate";
import UTCTime from "./components/utc/UTCTime";
import LocalTime from "./components/local/LocalTime";
import LocalTimeZone from "./components/local/LocalTimeZone";
import SecondsInput from "./components/converters/SecondsInput";
import DateInput from "./components/converters/DateInput";
function App() {
  const [timeStamp, setTimeStamp] = useState(Date.now());
  const [date, setDate] = useState(null);
  const updateTime = () => {
    setInterval(() => {
      setTimeStamp(Date.now());
    }, 1000);
  };
  useEffect(() => {
    updateTime();
  }, []);
  useEffect(() => {
    setDate(new Date(timeStamp));
  }, [timeStamp]);
  return (
    <div className="App">
      <div className="container">
        <div className="row py-2">
          <div className="col-md-6 col-xs-12">
            <UTCDate date={date} />
          </div>
          <div className="col-md-6 col-xs-12">
            <LocalDate date={date} />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6 col-xs-12">
            <UTCTime date={date} />
          </div>
          <div className="col-md-6 col-xs-12">
            <LocalTime date={date} />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6 col-xs-12">
            <UNIXTimestamp timestamp={timeStamp} />
          </div>
          <div className="col-md-6 col-xs-12">
            <LocalTimeZone date={date} />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6 col-xs-12">
            <SecondsInput />
          </div>
          <div className="col-md-6 col-xs-12">
            <DateInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
