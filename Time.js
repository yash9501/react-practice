import React from "react";
const date = new Date();
const hours = date.getHours();
var timeofday;

if (hours < 12) {
  timeofday = "morning";
} else {
  timeofday = "afternoon";
}

function Time() {
  return <h3 style={{ backgroundColor: "#997678" }}>good {timeofday}</h3>;
}
export default Time;
