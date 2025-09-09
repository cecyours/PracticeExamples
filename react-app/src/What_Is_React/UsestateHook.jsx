import React, { useState } from 'react'

function UsestateHook() {

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
      <button onClick={Increment}>Increases</button>
      <button onClick={Decrement}>Decreases</button>
    </div>
  )
}

export default UsestateHook
