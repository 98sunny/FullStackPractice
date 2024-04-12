import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() =>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(response) {
      const json=await response.json();
      setTodos(json.todos);
    })
    }, 2000);

    
  },[])

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <h1>Ths is a dumy feature added by Sarb</h1>
>>>>>>> 30372a5 (sarbjit conflict resolved)
    <h2>Yograj singh changed this line</h2>
      <h1>Ths is a dumy feature added by Sarb</h1>
=======
    <h1>This is a line added by Sunny</h1>
>>>>>>> def9233 (Testing github coolab)
    <h2>This is a dummy feature in the master branch</h2>
    <h2>This is 2nd dummy feature in the master branch</h2>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title,description}){
  return <div>
  <h1>{title} and description is {description}</h1> 
  </div>
}

export default App
