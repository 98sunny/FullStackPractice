import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { AppBar } from './components/AppBar'
import { Dashboard } from './components/Dashboard'
import Overview from './components/Overview'
import { SearchBar } from './components/SearchBar'
import { BlueCard } from './components/BlueCard'

function App() {

  return (
    <>
    <AppBar/>
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-3 m-5"><Overview/></div>
      <BlueCard title={"Amount Pending"} showWarning={true} amount={1000} orderCount={12}/>
      <RevenueCard title={"Amount Pending"} showWarning={true} amount={1000} orderCount={12}/>
      <RevenueCard title={"Amount Processed"} showWarning={false} amount={1000} orderCount={12}/>
      <div className="bg-red-100 grid col-span-3">Hello</div>
    </div>
    </>
  )
}

export default App
