import React from 'react'
import classes from './ShopCard.css'

  export const ShopCard = (props) => {
    const{cards} = props
    return (
      <div class="product-card" style = {{display: 'inline-block'}}>
        <article>{cards.name}</article>
        <article>{cards.color}</article>
        <img src ={cards.img} style = {{display: 'inline-block', width: '100%', height: 'auto'}}/>
        <article>{cards.proice}</article>
        <button>add to cart</button>
      </div>
    );
  }


  
  