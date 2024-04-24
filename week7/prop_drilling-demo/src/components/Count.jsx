import { useState } from "react";
import Buttons from "./Buttons";

export function Count({count,setCount}){
    return <div>
        {count}
        <Buttons count={count} setCount={setCount}></Buttons>
    </div>
    
} 