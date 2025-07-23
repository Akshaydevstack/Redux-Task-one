import "./App.css";
import Displayuser from "./components/Displayuser";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux Thunk</h1>
        <Displayuser />
      </Provider>
    </>
  );
}

export default App;
