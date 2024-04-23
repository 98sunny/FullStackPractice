import { useState,React ,lazy, Suspense} from 'react'
import {BrowserRouter,Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
// import { Dashboard } from './components/Dashboard'
// import Landing from './components/Landing'

const Dashboard=lazy(()=>import('./components/Dashboard'));
const Landing=lazy(()=>import('./components/Landing'));


function App() {
  
  
  return (
    <div>
    <div style={{background:"black"}}>
      Hi this is top bar
    </div>  
      <BrowserRouter>
      <AppBar/>
    <Routes>

    <Route path="/dashboard" element={<Suspense fallback={<Loading/>}><Dashboard/></Suspense>}/>
    <Route path="/" element={<Suspense fallback={<Loading/>}><Landing/></Suspense>}/>
    </Routes>

    </BrowserRouter>
    </div>
  )
}
function AppBar() {
  const navigate=useNavigate();
  return <div>
  
  <button onClick={()=>{
      navigate("/")
    }}>Landing</button>

    <button onClick={()=>{
      navigate("/dashboard")
    }}>Dashboard</button> 

  </div>
}
function Loading(){
  return <h2>🌀 Loading...</h2>;
}

export default App
