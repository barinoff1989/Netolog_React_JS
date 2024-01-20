import { HeadNews } from './HeadNews';
import './HeadNews.css';

/**
 * Список блоков верхнего меню новостей
 * @param {items} a -массив данных
 */

export const HeadNewsList = ({items}) => {

  return (    
    <div>
     <header className="card-header">
      <nav>   
      {items.map(hn => <HeadNews key={hn.text} props={hn}/>)}
      </nav>
      </header>
    </div>)

};