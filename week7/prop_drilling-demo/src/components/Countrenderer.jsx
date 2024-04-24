import { useContext } from "react"
import { CountContext } from "../context"

export function Countrenderer(){
    const {count, setCount}=useContext(CountContext);
    return <div>Count is {count}</div>
} 