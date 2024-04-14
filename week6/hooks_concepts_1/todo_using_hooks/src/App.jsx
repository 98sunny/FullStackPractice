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
