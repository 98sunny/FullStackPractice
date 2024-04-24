export default function Buttons({count, setCount}){
    return <div>
    <h2>Using prop drilling</h2>
    <h3>{count}</h3>
        <button onClick={()=>{setCount(count+1);}}>Increment</button>
        <button onClick={()=>{setCount(count-1);}}>Decrement</button>
    </div>

}