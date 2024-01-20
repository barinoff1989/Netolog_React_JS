import './StartForm.css';
import { PropsWithChildren } from 'react';

/**
 * Стили основного блока страницы
 * @param {children} a -наполнение блока
 */

export const MainBlock = ({children}) => {
  return (    
    <main>{children}</main>
  )
}