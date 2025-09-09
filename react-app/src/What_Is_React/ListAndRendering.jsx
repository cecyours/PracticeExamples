import React from 'react'

function ListAndRendering() {

    const list = [
        {
            id : 1,
            name : "obj1"
        },
        {
            id : 2,
            name : "obj2"
        },
        {
            id : 3,
            name : "obj3"
        }
    ]

  return (
    <div>
      <ul>
        {list.map((data, index) => (
            <li key={index}>{data.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListAndRendering
