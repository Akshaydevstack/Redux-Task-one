import { createStore } from "https://cdn.skypack.dev/redux";

function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.payload };
    case "DECREMENT":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

document.getElementById("Increment").onclick = () => {
  store.dispatch({ type: "INCREMENT", payload: 1 });
};

document.getElementById("Decrement").onclick = () => {
  store.dispatch({ type: "DECREMENT", payload: 1 });
};

store.subscribe(() => {
  const currentValue = store.getState();
  document.getElementById("value").innerText = currentValue.value;
});
