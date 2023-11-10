import {FC } from 'react'
import type {Titem} from './Titem';
import './Listing.css'

    type Props = {
        items: Titem[]
      };


  export const Listing: FC<Props> = ({ items }) =>{
   // const items = props
  let curcode:string = ""
    return (
     <div style = {{display: 'inline-block'}}>
                    {items.map(item => 
      
         //   (curcode==""?curcode="":curcode="")
        <div className="item-list" >
        <div className="item">
  

            <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage}/>
            </a>
            </div>
            <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.currency_code === "USD" ? "$"+parseInt(item.price).toFixed(2) :
                                       item.currency_code === "EUR" ? "€"+parseInt(item.price).toFixed(2) :
                                       parseInt(item.price).toFixed(2)+" "+item.currency_code}</p>
            <p className={item.quantity <= 10 ? "item-quantity level-low" :
                          item.quantity <= 20 ? "item-quantity level-medium":
                          "item-quantity level-high"}>{item.quantity}</p>
           

            </div>
        </div>
        </div>
        )}
     </div>
    );
  }

