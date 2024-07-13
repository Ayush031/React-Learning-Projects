import { useState } from "react"; //hook
import "./App.css";

function App() {
  let [limit, setLimit] = useState("In Limit");

  let [counter, setCounter] = useState(5);
  const addValue = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((abc) => abc + 1);
    limit === "Limit Reached" && setLimit("In Limit");
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setLimit("Limit Reached");
    }
  };

  return (
    <>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Increase Value</button>
      <hr />
      <button onClick={decValue}>Decrease Value</button>
      <h3>Status: {limit}</h3>
    </>
  );
}

export default App;
