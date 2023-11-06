import React from 'react'
import classes from './ShopItem.css'

  export const ShopItem = (props) => {
    const{item} = props
    return (
        <div class="product-info">
          <img src = {item.img} style = {{width: '5%', height: 'auto'}}/>
          <div>{item.name}</div>
          <div>{item.color}</div>
          <div>{item.price}</div>
          <button>add to cart</button>
        </div>
    );
  }


  
  