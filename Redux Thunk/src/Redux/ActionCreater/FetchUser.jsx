import axios from "axios";
export default function fetchUser() {
  return async (dispatch) => {
    dispatch({ type: "FETCH_STARED" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      dispatch({ type: "FETCH_SUCESSFUL", payload: response.data });
    } catch (err) {
      dispatch({ type: "FETCH_FAILD", payload: err.message });
    }
  };
}
