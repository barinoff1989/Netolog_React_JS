import { FooterInfo } from './FooterInfo';
import './FooterInfo.css';

/**
 * Новости подвала страницы
 * @param {items} a -массив новостей
 * @param {title} a - Заголовок
 */


export const FooterInfoList = ({items,title}) => {

  return ( 
    <div> 
      <div>
       <a href="#" class="blue-link">{title}</a>
      </div>
      <div> 
        {items.map(hn => <FooterInfo key={hn.text} props={hn}/>)}
      </div>
    </div>  )

};