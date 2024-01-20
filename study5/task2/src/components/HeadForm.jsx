import './StartForm.css';
import { PropsWithChildren } from 'react';

/**
 * Стили верхнего блока страницы
 * @param {children} a -наполнение блока
 */
export const HeadForm = ({children}) => {
  return (    
      <header className="card-header">{children}</header>
  )
}