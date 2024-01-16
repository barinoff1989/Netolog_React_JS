import {Cards} from './components/Cards';

function App() {
  return (
         <Cards
         image="http://ae01.alicdn.com/kf/UTB8CxMirHPJXKJkSafSq6yqUXXaC.jpg">
         <div>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         <div>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </Cards>        
  );
}

export default App;
