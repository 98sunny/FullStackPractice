# Creating a react app
1. Header component that takes title as a prop and renders it inside a div.
2. Top level App component renders 2 Headers.

# Update the last app to allow to update the title of the first hHeader with a new title.


## Re-rendering in React
1. Helps to create Dynamic websites.
2. We append or remove or update at a DOM is called dynamic.
3. This is what React helps us to do.
4. **Rule of Thumb**: Minimize the number of re renders

But the code below will cause all the components to render again and again:
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  return (
   <>
   {/* Here all these functions gets re rendered together everytime the state changes.
   This can cause problems and slowlness in big applications */}
   <button onClick={updateTitle}>click here to change the title</button>
   <br></br><br></br>
   <Header title={title}></Header>
   <Header title="Hello2"></Header>
   <Header title="Hello2"></Header>
   <Header title="Hello2"></Header>

   </>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
```



## Re-Render
React did something to calculate what all got updated in the component.
### When does this happen?
- It happens when a state variable that is being used in a component changes.
- It happens when parent component re-renders, it causes all the child components to re render

## How to minimize the number of Re-rendering in REACT?
1. We push the state down.

### Approach 1
**Solution:** We push the state down.

**
Tip: In my cases, we will get a situation where a component will have child components. And these child components will further have child components. *Rule is, if you want to change the state of a child component, declare the state variable affecting it in the latest parent.* **
```
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  // function updateTitle(){
  //   setTitle("My name is "+Math.random())
  // }
  return (
   <>
   <HeaderWithButton/>
   <Header title="This is component 2"></Header>
   <Header title="This is component 3"></Header>
   </>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Sunny");

  function updateTitle(){
    setTitle("My name is "+Math.random())
  }
  return <div>
  <button onClick={updateTitle}> Click on me to change title</button>
    <Header title={title}></Header>
  </div>
}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App


````

Basically only the child component which needs to have the re rendering will have the state. And only that child will change and not the whole parent component. 

### Approach 2- Using memo
Memo lets us skip re-rendering a component when its props are unchanged.

```
import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Sunny");
  function updateTitle(){
    setTitle("My name is "+Math.random());
  }
  return (
   <div>
   <button onClick={updateTitle}> Click on me to change title</button>
   <Header title={title}></Header>
   <Header title="This is component 2"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>
   <Header title="This is component 3"></Header>
   
   </div>
  )
}

const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App

```


## React Keys
- These are neede for react to understand vcarious contents in an array.
- Helps it to understand which element to move, update or do something specific in a DOM. 
- More info: [click here](https://www.geeksforgeeks.org/reactjs-keys/)

Example:
```
{todos.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
```

## Wrapper components
A wrapper component refers to a component that encapsulates another component or elements within it. This encapsulation can serve various purposes such as adding extra functionality, modifying behavior, or simply styling the wrapped content.

### Use Case
1. Styling
2. Behavior Modification of children
3. Context management
4. High order components
5. Stete manegement
6. Accessibility enhancement

## Hooks
Hooks in react are functions which allows us to "hook into" a React state and lifecycle feature from function components
- useEffect
- useMemo
- useCallback
- useRef
- useReducer
- useContext
- useLayoutEffect

What is Side Effects?
React has functional components. Side effects are operations that reach outside the functional scope of React components. 
Anything which is not related to rendering components in React.
For example, interacting with the browswem or performing data fetching. 
Example: setTimeOut, fetch, setInterval, document.getelementById

Why am I writing about this?
There are some things which happens when one a component is rendered

### Hooks
- It allows us to use state and other React features **without writing** **Classes**
- Enable functional components to have access to stateful logic and life cycle features.
- Life cycle features meaning, component has mounted or component was unmounted
- Hooks made writing components readable and concise.

### UseState
**In simple words:: ** Whenever the state updates, it triggers a re-render which finally results in a DOM update.

### UseEffect
Data Fetching should not be done during rendering. This would mean, every time a new render happen, data fetch will also happen.
If we try doing fetching data/ or any other side effect operation during rendering, we do a lot of rendering in React, we might see many fetch calls than required.

This is why we need useEffect to perform side effect operation on the side in a function component.

**Side Effect-->** Side effects are operations that can affect other components or cant be done during rendering such as fata fetching, subscriptions, or manually changing the DOM in the React component.

#### An Example for UseEffect
A car racer has to do 100 laps acorss a stadium.
We are allowed to take a pit stop only when needed.
This means, we won't do pit stop, unless needed.
We make pit stop only after a certain time. We will have the option of making a pit stop, but we won't make it in every lap. May be we will make stop after every 20 laps for tire check, gas fil etc.
This is a good example of Side effect. We do this operation, but not after every lap, but only when necessary or after a certain number of laps.

In tech world, we fetch data from backe end only when needed. 

Syntax:
useEffect(()=>{
  Logic which we want to happen
},[When should the operation happen--->Dependancy Array])

```
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [btnId,setBtnId]=useState(1);
  

  return (
    <>
      {/* <TodoList todoList={todos}></TodoList> */}
      <button onClick={function(){setBtnId(1)}}>1</button>
      <button onClick={function(){setBtnId(2)}}>2</button>
      <button onClick={function(){setBtnId(3)}}>3</button>
      <button onClick={function(){setBtnId(4)}}>4</button>
      <TodoById todoById={btnId}></TodoById>
      {/* <TodoById todoByid={5}></TodoById> */}
    </>
  )
}

function TodoById({todoById}) {
  const [todoListByid, setTodosListById]=useState([]);
  
  useEffect(()=>{
    setTimeout(() => {
      axios.get('https://sum-server.100xdevs.com/todo?id='+todoById)
      // axios.get(`https://sum-server.100xdevs.com/todo?id=${todoByid}`)
      .then(function(response){
        console.log(response.data.todo)
        setTodosListById(response.data.todo);
      })  
    }, 2000);
    
  },[todoById]); //basically jab bhi todoById ki value change ho jaayegi
  return <div>
    <h1>{todoListByid.id}</h1>
    <h1>{todoListByid.title}</h1>
    <h2>{todoListByid.description}</h2>
  </div> 
}



export default App

```

### useMemo
#### What is memoization?
It means remembering some output given an input and not computing it again.

Real life analogy example: 
- When a racer is driving a car and making a lap.
- In oder to make a stop at pit for oil fill, how will he decide that?
- He know how much gas his car has initially.
- Will he check the gas meter after every lap? OR will he check after a certain time or certain number of laps?
- Surely, racer would check after a while. Till then, he will remember the gas he had in the car.
- Maybe after 10 out of 20 laps, he will check the gas meter and then stop at the pit. 

In React world:
- For example, it helps to meoize the result of the function of a component as it gets rendered due to some change of state of state variable.
- When we use useMemo, it keeps the result of the function we provide until certain values, which we specify, change.
- This means it doesn't have to recompute that result every time your component re-renders, which can save time and resources, especially if the computation is expensive.
  
```
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  <!-- if I use a regular function, the belwo given part will be rendered again and again.
  By using useMemo, it will store the result of the computation till ven if a rerender happens -->
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

```


   