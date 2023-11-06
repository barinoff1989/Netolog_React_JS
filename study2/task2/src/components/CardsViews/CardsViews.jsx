import React from 'react'
import { ShopCard } from '../ShopCard';


  export const CardsViews = (props) => {
    const{cards} = props
    return (
      <h1 >
       {cards.map(cards =>                
          <ShopCard 
          cards={cards}
          /> 
          )}
    </h1>
    );
  }


  
  