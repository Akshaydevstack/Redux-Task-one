import { createStore } from "https://cdn.skypack.dev/redux";

const increment = document.getElementById("Increment");
const value = document.getElementById("value");
const decrement = document.getElementById("Decrement");

const inistalstae={value:0}

function appreducer(prevState=inistalstae,action) {
   switch(action.type){
    case "increment": return {...prevState,value:prevState.value+1}
    case "decrement": return {...prevState,value:prevState.value-1}
    default: return prevState
   }
}

const store=createStore(appreducer)
store.subscribe(() => {
  const currentState = store.getState();
  value.innerText = currentState.value;
});

increment.onclick=()=>{store.dispatch({type:"increment"})}
value.innerText=inistalstae.value
decrement.onclick=()=>{store.dispatch({type:"decrement"})}



