import React from 'react'

function Button({ text, clickEvent })
{
    return(
        <div>
            <button onClick={clickEvent}>{text}</button>
        </div>
    )
}

const Increment = () => {
    console.log("Increases");
}

const Decrement = () => {
    console.log("Decreases");
}

function PropsPassing() {
  return (
    <div>
      <Button text = "Increase" clickEvent = {Increment}></Button>
      <Button text = "Decrease" clickEvent = {Decrement}></Button>
    </div>
  )
}

export default PropsPassing
