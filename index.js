import { createStore, applyMiddleware } from "https://cdn.skypack.dev/redux";

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

// ✅ Logger Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("👉 Dispatching:", action);
  const result = next(action); // Pass to reducer
  console.log("✅ Next State:", store.getState());
  return result;
};

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware)
);

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
