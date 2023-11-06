import React from 'react'
import classes from './IconSwitch.css'

export const IconSwitch = (props) => {
  const{icon,onSwitch} = props
     // const{filters,selected,onSelectFilter} = this.props
      return (
<button class="material-icons"
        onClick={onSwitch}
>{icon}</button>
      );
  } 


  
  