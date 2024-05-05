import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex',justifyContent: 'center'}}>
      <div style={{backgroundColor:"red"}}>Hello</div>
      <div style={{backgroundColor:"blue"}}>Hello</div>
      <div style={{backgroundColor:"green"}}>Hello</div>
      </div>
      <br></br>
      {/* using Tailwind below */}
      <div className='flex justify-between'>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      </div>

      {/* using grid with Tailwind */}
      <div className="grid grid-cols-6">
      <div className='bg-red-400 col-span-3'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      </div>

      {/* demo of responsiveness */}
      <div className='sm:bg-pink-400 md:bg-blue-500 lg:bg-purple-500 '>Hello</div>

    <br></br>
      <div className='grid grid-cols-1 md:grid grid-cols-3'>
      <div className='bg-green-400'>Hello</div>
      <div className='bg-blue-400'>Hello</div>
      <div className='bg-red-400'>Hello</div>
      </div>


    </>
  )
}

export default App
