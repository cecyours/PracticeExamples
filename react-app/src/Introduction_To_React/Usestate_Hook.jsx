import React, { useState } from 'react'

function Counter({click, text})
{
    return(
        <div>
            <button onClick={click}>{text}</button>
        </div>
    )
}

function Usestate_Hook() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

  return (
    <div>
        <p>{count}</p>
        <Counter click = {Increment} text="Increase"></Counter>
        <Counter click = {Decrement} text="Decrease"></Counter>
    </div>
  )
}

export default Usestate_Hook
