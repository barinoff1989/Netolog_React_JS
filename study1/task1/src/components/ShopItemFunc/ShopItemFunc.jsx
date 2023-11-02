import React from 'react'
import classes from './shopItemFunc.css'

export const ShopItemFunc = (props) => {
  const{item} = props
  return (
    <div className="main-content">
    <h2 className="h2">{item.brand}</h2>
    <h1 className="h1">{item.title}</h1>
    <h3 className="h3">{item.description}</h3>
    <div className="description">
    {item.descriptionFull}
    </div>
    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div className="purchase-info">
      <div className="price">{item.currency}{item.price.toFixed(2)}</div>
      <button className="button">Добавить в корзину</button>
    </div>
  </div>
  );
}


