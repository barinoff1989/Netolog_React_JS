import { MainHeads } from './MainHeads';
import './MainHeads.css';

/**
 * Список блоков меню поисковика
 * @param {items} a -массив данных
 */

export const MainHeadsList = ({items}) => {

  return (    
    <main>
       {items.map(mh => <MainHeads key={mh.text} props={mh}/>)}
    </main>
   )

};