import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import {Provider}from 'react-redux'
import { store } from "./Redux/store";
function App() {
  

  return (
    <>
    <Provider store={store}>
    <div>
      <h1>Redux store</h1>
     <Counter/>
    </div>
    </Provider>
    </>
  );
}

export default App;
