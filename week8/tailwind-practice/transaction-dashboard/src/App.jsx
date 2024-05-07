import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { AppBar } from './components/AppBar'
// import { Dashboard } from './components/Dashboard'
import Overview from './components/Overview'
import { SearchBar } from './components/SearchBar'
import { BlueCard } from './components/BlueCard'
import { Transaction } from './components/Transaction'
import { TransactionTable } from './components/TransactionTable'
import { SideNavigation } from './components/SideNavigation'

function App() {

  return (
    <>
    {/* <SideNavigation/> */}
    <AppBar/>
    <div className="m-4 grid grid-cols-3">
      <div className="col-span-3 m-5"><Overview/></div>
      <BlueCard title={"Amount Pending"} showWarning={true} amount={1000} orderCount={12}/>
      <RevenueCard title={"Amount Pending"} showWarning={true} amount={1000} orderCount={12}/>
      <RevenueCard title={"Amount Processed"} showWarning={false} amount={1000} orderCount={12}/>
      <div className="grid col-span-3"><Transaction/></div>
      <div className="grid col-span-3 p-4 pt-0">
        <div className="flex justify-between">
        <SearchBar/>
        <div className="flex">
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sort</button>
        
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg></button>
        
        
        </div>
        
        </div>


        

      </div>
      <div className="grid col-span-3"><TransactionTable/></div>
    </div>
    </>
  )
}

export default App
