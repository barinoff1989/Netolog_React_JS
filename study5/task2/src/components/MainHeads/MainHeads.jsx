import './MainHeads.css';

/**
 * Блок меню поисковика
 * @param {props} a -параметры блока link - ссылка, text - название новости
 */

export const MainHeads = ({props}) => {
  const{link,text} = props
  return (    
        <a href={link} style={{ marginRight: '10px' }}>{text}</a>
)

};
 
