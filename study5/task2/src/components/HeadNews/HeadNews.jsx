import './HeadNews.css';

/**
 * Блок верхнего меню новостей
 * @param {props} a -параметры блока link - ссылка, text - название новости
 */

export const HeadNews = ({props}) => {
  const{link,text} = props
  return (    
        <a href={link} style={{ marginRight: '20px' }}>{text}</a>
)

};
 
