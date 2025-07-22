import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => {
    return state.count;
  });
  const color= useSelector((state)=>{
    return state.color
  })
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor:color? "green":"red" }}>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Derement
      </button>
      <button onClick={() => dispatch({ type: "COLOR" })}>Change color</button>
    </div>
  );
}
