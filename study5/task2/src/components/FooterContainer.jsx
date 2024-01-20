import './StartForm.css';
import { PropsWithChildren } from 'react';

/**
 * Стили подвала страницы
 * @param {children} a -наполнение 
 */

export const FooterContainer = ({children}) => {
  return (    
    <div className="container">{children}</div>
  )
}