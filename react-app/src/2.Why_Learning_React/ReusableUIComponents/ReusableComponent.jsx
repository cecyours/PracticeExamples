import React from 'react'

function Button({text}) {
    return (
        <div>
            <button className='btn btn-primary'>{text}</button>
        </div>
    )
}

function ReusableComponent() {
  return (
    <div>
      <Button text = "Red"></Button>
      <Button text = "Green"></Button>
      <Button text = "Blue"></Button>
    </div>
  )
}

export default ReusableComponent
