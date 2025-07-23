export const Loagger = (store) => (next) => (action) => {
  console.log(action);
};
