import React from "react";
import Card from "../Card";
const LocalTimeZone = ({ date }) => {
  return (
    <Card
      value={date && `${date.toString().split("(")[1].replace(")", "")}`}
      title="Local Time Zone"
    />
  );
};

export default LocalTimeZone;
