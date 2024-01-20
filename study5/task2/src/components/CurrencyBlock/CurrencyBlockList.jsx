import { CurrencyBlock } from './CurrencyBlock';
import './CurrencyBlock.css';

/**
 * Список валют
 * @param {items} a -массив данных
 */

export const CurrencyBlockList = ({items}) => {

  return (    
    <div>
       {items.map(cb => <CurrencyBlock key={cb.text} props={cb}/>)}
    </div>
   )

};