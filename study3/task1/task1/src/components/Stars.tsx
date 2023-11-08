import {FC } from 'react'
import {Star} from './Star'; 

type Tcount = { count: number|string|boolean;};

//Stars.propTypes = {};

  export const Stars:FC<Tcount> = (props) => {
    const count = props

    return (
      <>
      {(typeof count.count === 'number'&&count.count > 0 && count.count < 6) ? 
        <ul className="card-body-stars u-clearfix">
            <li>
              {[...Array(count.count)].map((_, i) => <Star key={i} />)}
            </li>
        </ul>: <></>}
      </>
    );
  }