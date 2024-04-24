import { useContext } from "react";
import {CountContext} from "../context"

export default function ButtonUsingContextAPI(){
    const {count,setCount}=useContext(CountContext);
    return <div>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
    
}