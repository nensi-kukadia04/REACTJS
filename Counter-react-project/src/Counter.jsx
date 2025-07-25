import React,{ useState } from 'react'

function Counter(){

    //variable declared
    const [count, setCount] = useState(0)

    //decrement not less than 0
    const decrement = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }

    return(
        <div>
            <h1>Counter Component</h1>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                {/* inline condition to prevent negative count
                <button onClick={()=>setCount(count>0?count-1:0)}>Decrement</button> */ }
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;