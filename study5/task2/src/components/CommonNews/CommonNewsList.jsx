import { CommonNews } from './CommonNews';
import './CommonNews.css';

/**
 * Список новостей
 * @param {items} a - массив данных
 */

export const CommonNewsList = ({items}) => {

  return (    
    <div> 
      {items.map(cn => <CommonNews key={cn.text} props={cn}/>)}
    </div>)
};