import React, { useState, useEffect } from 'react';
import classes from './ClockForm.css'
import {ClockForm} from './ClockForm';

export const ClockNameForm = (props) => {
  const{city,shift,itemnun,delClock} = props

  const delxClock = () => {
    
    delClock({itemnun});
    console.log({itemnun})
  };

  return (
    <div>
        <div className="containercl">
            <div className="row">{city}</div>
            <button className="circle-button" onClick={delxClock}>x</button>
            <ClockForm hh = {parseInt(shift)}/>
        </div>
    </div>
  );
};
