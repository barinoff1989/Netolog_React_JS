import './FooterInfo.css';

/**
 * Блок новости
 * @param {props} a -параметры блока link - ссылка, text - название новости
 */

export const FooterInfo = ({props}) => {
  const{link,text} = props
  return (    
        <div>
         <a href={link}>{text}</a>
        </div>
)

};
 
