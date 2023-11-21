import React from 'react'
import { useState } from 'react';

export const ConverterColour = (props) => {
  const{item} = props
  //let TextError = 'Ошибка';
  function isValidHex(hex) {  
    let ishex = /^#[0-9A-F]+$/.test(hex) && hex.length === 7;
    if (hex == '') 
    {return 0}
    else if (ishex)
    {return 1} 
    else { return 2}
  } 

  function HexToRgb(hex) {  
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb("+parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16)+")"; 
  } 

  const [name, setName] = useState('');
 
  const handleInput = (e) => {
    const { value } = e.target;
    
    if (value.length >= 7) {
      setName(value);
    } else {
      return;//setName('pink');
    }
  };

 // const TextError = (e) => {if }
  //      <input style={{ width: '50%', height: '50%' }} type='text'/>
 // <input></input>
 if (isValidHex(name.toUpperCase()) == 0) {
  return (    
  <div style={{backgroundColor: 'Pink', height: '1000px'}} >
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <input style={{ width: '20%', height: '70%' }} type='text'  onInput={handleInput}/>
  </div>    
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <label style={{ width: '20%', height: '70%' ,backgroundColor: 'green'}}>Введите цвет в формате HEX</label>
  </div>     
 </div>)
} else if (isValidHex(name.toUpperCase()) == 1) {
  return (    
  <div style={{backgroundColor: name, height: '1000px'}} >
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <input style={{ width: '20%', height: '70%' }} type='text'  onInput={handleInput}/>
  </div>    
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <label style={{ width: '20%', height: '70%' ,backgroundColor: 'green'}}>{HexToRgb(name.toUpperCase())}</label>
  </div>     
 </div>)
}
else {
  return (    
  <div style={{backgroundColor: '#e8e23a', height: '1000px'}} >
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <input style={{ width: '20%', height: '70%' }} type='text'  onInput={handleInput}/>
  </div>    
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <label style={{ width: '20%', height: '70%' ,backgroundColor: 'green'}}>Ошибка!</label>
  </div>     
 </div>)
};
 
}