import React, { useState } from 'react'

function ReactUpdatesUI() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default ReactUpdatesUI
//React updates UI automatically when state changes, No manual DOM manipulation.