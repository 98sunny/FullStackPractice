import { useState } from 'react'
import { useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function App() {
  const [inputValue,setInputValue]=useState(0);
  const factorial=useMemo(function(){
    let answer=1;
    for(let i=inputValue;i>=1;i--){
      answer=answer*i;
      // console.log(answer);
    }
    return answer;
  },[inputValue])
  console.log("Answer:"+typeof(factorial)); 
  
  return (
    <div>
            <input 
                type="number"
                onChange={(e) => setInputValue(Number(e.target.value))} 
            />
            <p>Calculated Value: {factorial}</p>
        </div>
  )
}

export default App
