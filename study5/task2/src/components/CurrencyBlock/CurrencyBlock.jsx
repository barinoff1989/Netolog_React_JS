import './CurrencyBlock.css';

/**
 * Информация о валюте
 * @param {props} a -параметры блока link - ссылка, text - название новости
 */

export const CurrencyBlock = ({props}) => {
  const{link,text} = props
  return (    
        <a href={link} style={{ marginRight: '20px' }}>{text}</a>
)

};
 
