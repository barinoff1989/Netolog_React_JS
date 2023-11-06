import React from 'react'
import classes from './ToolBar.css'

export  class ToolBar extends React.Component {
    render() {
      const{filters,selected,onSelectFilter} = this.props
      return (
        <article> 
        {filters.name.map(filtername =>                
          <button onClick={onSelectFilter}  
                  style={{ backgroundColor: filtername == selected? 'black': 'white',
                           color: filtername == selected? 'white': 'black'}} 
                  name={filtername}
          >
           {filtername} 
          </button>  
          )}
        </article>
      );
    }
  }


  
  