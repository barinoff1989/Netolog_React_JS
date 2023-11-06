import React from 'react'
import { IconSwitch } from '../IconSwitch';
import { CardsViews } from '../CardsViews';
import { ListView } from '../ListView';
import { useState } from 'react';


  export const Store = () => {

           
      const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green", 
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];
      
    //  const iconname = "view_module"//{name:["view_list", "view_module"]}
      const intiatialState = true;
      const [changeView,setView] = useState(intiatialState);
      

      return ( 
        <>
          <div>
          <IconSwitch 
            icon={changeView?"view_list":"view_module"} 
            onSwitch={() => setView(prev => !prev )}
          />
          </div>
          <div>
          {changeView? <div><ListView 
                              item={products} 
                            />
                       </div> : 
                       <div><CardsViews 
                              cards={products} 
                            />
                       </div>}
          </div>
        </>
      );
  }



