import React from 'react';
import {Listing} from './components/Listing';
import type {Titem} from './components/Titem';
import {datalist} from './datalist/datalist';
import './App.css';

const dataJson = JSON.stringify(datalist);
let items: Titem[] = [];
items = JSON.parse(dataJson);

function App() { 
  return (
    <Listing items = {items}/>
  );
}

export default App;
