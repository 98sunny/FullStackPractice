import { useCallback, useState } from 'react'
import React from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
// increment count by 1
  const increment = () => {
    setCount((c) => c + 1);
  };
  // add todo to a todo array
  const addTodo = useCallback(()=>{
    setTodos([...todos,"New Todo"]);
  },[todos])


  return (
    <>
    <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      
    </>
  )
}

const Todos=React.memo(({todos, addTodo})=>{
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo) => {
        return <p>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
})

export default App

