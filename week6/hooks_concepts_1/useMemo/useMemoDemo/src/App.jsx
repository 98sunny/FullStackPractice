import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  
  const count=useMemo(function () {
    let count=0;
    for(let i=0; i<=inputValue; i++) {
      count=count+i;
    }
    return count
    
  },[inputValue])
  
  return (
    <>
      <input type="text" id="num" onChange={function(e){
        setInputValue(e.target.value);
      }}></input>
      <h1>Sum from 1 to {inputValue} is {count}</h1>
      <div id="sum"></div>
      <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
    </>
  )
}

export default App
