import React, { useState, useEffect } from 'react';
import classes from './ClockForm.css'

export const ClockForm = (hh) => {
  
  const [time, setTime] = useState(new Date());
  const ff = hh
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const timezoneOffset = date.getTimezoneOffset();
      const move = ff.hh + timezoneOffset/60
      date.setHours(date.getHours() + move);
      setTime(date);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [ff]);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHandRotation = `rotate(${seconds * 6}deg)`;
  const minuteHandRotation = `rotate(${minutes * 6}deg)`;
  const hourHandRotation = `rotate(${(hours * 30) + (minutes * 0.5)}deg)`;

  return (
    <div className="clock">
        <div className="hand second-hand" style={{ transform: secondHandRotation }}></div>
        <div className="hand minute-hand" style={{ transform: minuteHandRotation }}></div>
        <div className="hand hour-hand" style={{ transform: hourHandRotation }}></div>
    </div>
  );
};