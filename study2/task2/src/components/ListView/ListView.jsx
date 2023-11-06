import React from 'react'
import { ShopItem } from '../ShopItem';


  export const ListView = (props) => {
    const{item} = props
    return (
      <h1 >
       {item.map(item =>                
          <ShopItem 
          item={item}
          /> 
          )}
      </h1>
    );
  }


  
  