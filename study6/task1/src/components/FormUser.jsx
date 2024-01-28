import React from 'react'
import { useState } from 'react';
import classes from './FormUser.css'
import moment from 'moment';
import {ClockNameForm} from './ClockNameForm';


export const FormUser = (props) => {
const{item} = props

const [inputValue, setInputValue] =
useState({
  city: '',
  shift: 0
});

const [myArray, setDisplayText] = useState([])

const handleInputChange = (event) => {
  setInputValue({
    ...inputValue,
    [event.target.name]: event.target.value
  });
      };

const handleButtonClick = () => {
  const newObject = { city: inputValue.city, shift: inputValue.shift };
  const newArray = [...myArray, newObject];
  setDisplayText(newArray);
};

const delClock = (index) => {
  const nnum = index.itemnun
  const newArray = [...myArray.slice(0, nnum), ...myArray.slice(nnum + 1)];
  setDisplayText(newArray);
};


return (
  <div>
    <input className = "input" id = "city" name = "city" type="text" value={inputValue.city} onChange={handleInputChange} />
    <input className = "input" id = "shift" name = "shift" type="number"  value={inputValue.shift} onChange={handleInputChange} />  
    <button onClick={handleButtonClick}>Показать</button>       
          <div className="container">
          {myArray.map((item, index) => (
            <ClockNameForm key={index} city = {item.city} shift = {item.shift} itemnun = {index} delClock={delClock}/>
          ))}
        </div>
  </div>
);
};
