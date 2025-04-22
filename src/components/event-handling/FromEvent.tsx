import React, { useState } from "react"


const FromEvent = () => {
    const [count,setCount] = useState<number>(0);
    const [inputValue,setInputValue] = useState<string>("")
    const Increment = ()=>{
        setCount(prev=>prev+1)
    };
    const getInputValue = (e: React.ChangeEvent<HTMLInputElement> )=>{
        setInputValue(e.target.value)
    };
  return (
    <div>
        {
            count
        }
        <br />
        <button onClick={Increment} >Increment Value</button>
        <div> <br /> 
            <input type="text" onChange={getInputValue} value={inputValue} />
        </div>
        <div>
            {
                inputValue
            }
        </div>
    </div>
  )
}

export default FromEvent