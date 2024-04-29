import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/count'
import { evenSelector } from './store/atoms/count'

function App() {
  return (
    <>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </>
  )
}
function Count(){
  return <div>
<CountRender/>
      <Button/>
  </div>
}
function CountRender() {
  const count=useRecoilValue(countAtom);
  return <div><h4>{count}</h4>
  <EvenCountRender/>
  </div>
}

function EvenCountRender(){
  const count=useRecoilValue(countAtom);
  const isEven=useRecoilValue(evenSelector);
  return <div><hz>{isEven?"It is even":"null"}</hz></div>
  
  // the below way is an ugly approach
  // return <div>{(count%2==0?"Even":"Odd")}</div>


  // This is also a great apprach to the problem
  // const isEven=useMemo(()=>{
  //   return count%2==0

  // },[count])
  // return <div>{isEven? "It is even":"null"}</div>

}

function Button() {
  const [count, setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    
  </div>

}

export default App
