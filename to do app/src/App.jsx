import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setdata([...data,input])
    setinput("")
  };

  const handleDelete=(removeIndex)=>{
   setdata(data.filter((_,index)=> index !== removeIndex))
  }
  return (
    <>
      <h2>To Do App</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <textarea
          name="input"
          id="input"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit">Add a note</button>
      </form>
      {data.length===0? <p>Add a note now</p>: data.map((value,index)=>{
        return <div key={index}>
          <h2>{value}</h2>
          <button onClick={()=> handleDelete(index)}>Delete</button>
        </div>
      })}
    </>
  );
}

export default App;
