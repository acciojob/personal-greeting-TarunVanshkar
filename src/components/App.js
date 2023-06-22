
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [greet, setGreet] = useState("");

  function greetFunction(e){
    setGreet("Hello " + e.target.value + "!");
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name:</h1>
        <input type="text" onChange={greetFunction}/>
        <p>{greet}</p>
    </div>
  )
}

export default App
