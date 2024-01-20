import './CommonNews.css';

/**
 * Блок новости
 * @param {props} a -параметры блока img - картинка, link - ссылка, text - название новости
 */

export const CommonNews = ({props}) => {
  const{link,text,img} = props
  return (  
      <div>
        <img src={img}/>  
        <a href={link}>{text}</a>
      </div>
)

};
 
