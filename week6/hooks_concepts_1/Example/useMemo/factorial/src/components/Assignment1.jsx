export function Assignment1(){

    const [inputValue,setInputValue]=useState(0);
  const factorial=useMemo(function(){
    let answer=1;
    for(let i=inputValue;i>=1;i--){
      answer=answer*i;
      // console.log(answer);
    }
    return answer;
  },[inputValue])
  console.log("Answer:"+typeof(factorial)); 
  
  return (
    <div>
            <input 
                type="number"
                onChange={(e) => setInputValue(Number(e.target.value))} 
            />
            <p>Calculated Value: {factorial}</p>
        </div>
  )
}