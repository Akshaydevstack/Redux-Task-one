import { InisialSate } from "../InisialSate/InisialSate";

export default function userReducer(state = InisialSate, action) {
  switch (action.type) {
    case "FETCH_STARED":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCESSFUL":
      return { ...state, loading: false, user: action.payload };
    case "FETCH_FAILD":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
