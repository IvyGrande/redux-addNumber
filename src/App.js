import './App.css';
import React from "react";
import Home from "./Pages/Home";
import {decrement, increment} from "./Action";
import {store} from "./Store";

function App() {

  return (
          <div className="App">
              <Home
                onIncrement={()=>{store.dispatch(increment({type:"INCREMENT"}))}}
                onDecrement={()=>{store.dispatch(decrement({type:"DECREMENT"}))}}
                num={store.getState()}
              />
          </div>
  );
}

export default App;


