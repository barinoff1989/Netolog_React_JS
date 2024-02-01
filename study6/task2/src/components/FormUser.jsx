import React from 'react'
import { useState, useEffect } from 'react';
import classes from './FormUser.css'
import moment from 'moment';
import {CardForm} from './CardForm';


export const FormUser = (props) => {
const{item} = props

const [loading, setLoading] = useState(true);

const [inputValue, setInputValue] =
useState({
  mess: ''
});

const [myArray, setDisplayText] = useState([])

const getFetch = () => {
  fetch('http://localhost:7070/notes')
  .then(response => response.json())
  .then(data => {
    setDisplayText(data)
    setLoading(false);
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
    setLoading(false);
  });
}

const postFetch = (item) => {
  fetch('http://localhost:7070/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
      return console.log('Результат:ok');;
    }) 
    .catch(error => {
      // Обработка ошибки
      console.error('Ошибка при выполнении POST-запроса:', error);
    });   
}

const delFetch = (url) => {
  fetch(url, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          console.log('Запрос успешно выполнен');
        } else {
          console.error(`Ошибка при выполнении запроса: ${response.status}`);
        }
      })
      .catch(error => {
        console.error(`Ошибка при выполнении запроса: ${error}`);
      });  
}

useEffect(() => {
  const fetchData = async () => {
  try {
  const response = await fetch('http://localhost:7070/notes');
  const data = await response.json();
  console.log(data);
  setDisplayText(data);
  }
  catch (error) {
      // Обработка ошибки
      console.error('Ошибка при загрузке данных:', error);
      // Дополнительные действия по обработке ошибки
    }
  }
  fetchData();
}, []);


const handleInputChange = (event) => {
  setInputValue({
    ...inputValue,
    [event.target.name]: event.target.value
  });
      };

const handleButtonClick = () => {

  const newObject = { id: "0",
                      content:  inputValue.mess};
  postFetch(newObject)
  getFetch()
};

const handleButtonUpdate = () => {
  getFetch()
};

const delItem = (index) => {
  const nnum = index.itemnun
  const url = `http://localhost:7070/notes/${nnum}`;
  delFetch(url)
  getFetch()
  }

return (
  <div>
    <h1 className="notes">Notes</h1>
    <button className="button" onClick={handleButtonUpdate}>upd</button> 
    {loading ? (
        <p>Загрузка данных...</p>
      ) : (
          <div className="container">
          {myArray.map((item, index) => (
            <CardForm key={index} mess = {item.content} itemnun = {item.id} delItem={delItem}/>
          ))}
        </div>
      )}
        <div className="containerStyle1">
      <textarea className="textareaStyle" placeholder="Напишите текст здесь" name = "mess"  value={inputValue.mess} onChange={handleInputChange} />
      <button className="buttonStyle" onClick={handleButtonClick}>Сохранить</button>
    </div>   
  </div>
);
};
