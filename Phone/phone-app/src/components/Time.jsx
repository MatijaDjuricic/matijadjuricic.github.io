import React, { useState, useEffect } from "react";
export const Time = ({ id }) => {
  const style = id === "HomeSc" ? "time-p" : "time";
  const [time, setTime] = useState(new Date());
  const Tick = () => {
    setTime(new Date());
  } 
  useEffect(() => {
    const interval = setInterval(() =>  Tick(), 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  return (
    <p className={style}>{`${hours}:${minutes}`}</p>
  )
}
export default Time;