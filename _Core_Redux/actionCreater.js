export function Increment(value) {
  return { type: "INCREMENT", payload: value };
}

export function Decrement(value) {
  return { type: "DECREMENT", payload: value };
}

export function color() {
  return { type: "CLICK"};
}