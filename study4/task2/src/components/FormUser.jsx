import React from 'react'
import { useState } from 'react';
import classes from './FormUser.css'
import moment from 'moment';

export const FormUser = (props) => {
const{item} = props

function sortArray(arr) {
    return arr.sort((a, b) => (a.dd > b.dd ? 1 : -1));
  }

function addArray(tdd,tdistance) {
    datatable.push({ dd: tdd, distance: tdistance });
  }

const findElement = (date) => {
    const poisk =  datatable.filter(({ dd }) => moment(dd).format('YYYY-MM-DD')=== date);//dd.toLocaleDateString() === date);
    return poisk[0]
  };

const[form,setForm] = useState({
    dd:"",
    distance:""
})

const [datatable, setData] = useState([]); 

const handleChange = (e) =>{
    const{name,value} = e.target;
    setForm((prevForm) =>({
        ...prevForm,
        [name]:value,       
    }))
}

const handleSubmit = (e) =>{
    e.preventDefault();
    const poisk = findElement(form.dd)
    if (typeof poisk !== 'undefined'){
         const indexarr = datatable.findIndex(el => moment(el.dd).format('YYYY-MM-DD') === form.dd);
         datatable.splice(indexarr, 1)
        addArray(moment(form.dd, 'YYYY-MM-DD').toDate(),parseInt(form.distance)+parseInt(poisk.distance))
    }
    else addArray(moment(form.dd, 'YYYY-MM-DD').toDate(),form.distance)
    setData(datatable);
    form.dd = ""
    form.distance = ""
    setForm((prevForm) =>({
        ...prevForm,      
    }))
}
const delChange = (ind) =>{
    datatable.splice(ind, 1);
    setData(datatable);
    console.log(datatable);
    setForm((prevForm) =>({
        ...prevForm,      
    }))
}

    return (    
       <div >
        <form autoComplete="off" onSubmit={handleSubmit}>  
            <div>
                <label>Дата(ДД.ММ.ГГГГ)</label> 
                <input className = "input" name = "dd" type="date" value={form.dd} onChange={handleChange}/>
                <label>Пройдено км</label> 
                <input className = "input" name = "distance" type="number" value={form.distance} onChange={handleChange}/>  
                <button className = "button" name="ok" type="submit" >OK</button> 
            </div>
       </form> 
       <table className="table">
        <tr>
            <th>Дата(ДД.ММ.ГГГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
        </tr>
        {sortArray(datatable).map((item, index) => (
        <tr key={index}>
            <td>{item.dd.toLocaleDateString()}</td>
            <td>{item.distance}</td>
            <td>
            <button className = "buttonx" name="del" type="button" onClick={() => delChange(item.id)}>x</button>
            </td>
        </tr>
        ))}
        </table>
       </div>  
       )
      }
