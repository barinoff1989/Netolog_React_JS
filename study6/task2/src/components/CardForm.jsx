import React, { useState, useEffect } from 'react';
import classes from './CardForm.css'

export const CardForm = (props) => {
  const{mess,itemnun,delItem} = props
  const delxItem = () => {
    
    delItem({itemnun});
  };

  return (
    <div>
        <div className="containercl">
           <div className="containerStyle">
            <textarea className="textareaStyle" value={mess} readOnly/>
            <button className="circle-button" onClick={delxItem}>x</button>
           </div>

        </div>
    </div>
  );
};
