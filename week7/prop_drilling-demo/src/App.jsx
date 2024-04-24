import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Count } from './components/Count'
import { Countrenderer } from './components/Countrenderer'
import Buttons from './components/Buttons'
import { CountContext } from './context'
import ButtonUsingContextAPI from './components/ButtonUsingContextAPI'
function App() {
  const [count, setCount] = useState(0);

  return (
    
    <>
    {/* What if we wanted the Count component and Button component together?
    The only way to do so is passing the prop */}
      {/* <Count count={count} setCount={setCount}/> */}
      <Count count={count} setCount={setCount}/>

      {/* // wrap ayone that wants to use the "teleported value" inside a provider.

  // We have wrap anyone who wants to us ContextAPI in a Provider
  // Provider-> Provider is something which provides some value later on needed by other components. */}
  <h3>Using ContextAPI</h3>
      <CountContext.Provider value={{count, setCount}}>
      {/* We dont need to pass as a prop --> count={counterContext} . it will automatically get the value from the CounterContext.Provider */}
      <Countrenderer setCount={setCount}></Countrenderer>
      <ButtonUsingContextAPI count={count} setCount={setCount}></ButtonUsingContextAPI>
      </CountContext.Provider>
    </>
  )
}

export default App
