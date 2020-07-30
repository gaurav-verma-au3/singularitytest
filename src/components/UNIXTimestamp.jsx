import React from "react";
import Card from "./Card"

const UNIXTimestamp = ({ timestamp }) => {
  return <Card value={timestamp} title="UNIX time" />;
};

export default UNIXTimestamp;
