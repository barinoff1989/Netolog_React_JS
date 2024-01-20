import './StartForm.css';
import { PropsWithChildren } from 'react';

/**
 * Стили блока новостей подвала страницы
 * @param {children} a -наполнение блока
 */

export const FooterBlock = ({children}) => {
  return (    
    <div cclassNameass="block">{children}</div>
  )
}