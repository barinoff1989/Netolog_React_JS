import React,{PropsWithChildren} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export function Cards(props) {
  const {empty} = ""
    return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.image} className="card-img-top" alt="..." />
        {React.Children.map(props.children, (c) =>( 
        <div className="card-body">
          <div className="spacer" />
          <div>{empty}</div>
          <div>{empty}</div>
          <div className="card">{c}</div>
       </div>
      ))}
    </div>
        )
        }