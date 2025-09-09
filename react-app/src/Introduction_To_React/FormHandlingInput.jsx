import React, { useState } from 'react'

function FormHandlingInput() {

    const [name, setName] = useState('')
  return (
    <div>
      <form>
        <div className='mb-3'>
            <input type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </div>
      </form>

      <p>Welcome, {name}</p>
    </div>
  )
}

export default FormHandlingInput
