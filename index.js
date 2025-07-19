import { createStore } from "https://cdn.skypack.dev/redux";
import { Decrement, Increment } from "./actionCreater.js";

const inisialstate= {value:0}

function reducer(state=inisialstate,action){
switch(action.type){
    case "INCREMENT": return{...state,value:state.value+action.payload}
    case "DECREMENT": return{...state,value:state.value-action.payload}
}
}

const store= createStore(reducer)

store.subscribe(()=>{
    const currentState=store.getState()
    document.getElementById("value").innerText=currentState.value
})

document.getElementById("Increment").onclick=()=>{
    store.dispatch(Increment(1))
}
document.getElementById("Decrement").onclick=()=>{
    store.dispatch(Decrement(1))
}