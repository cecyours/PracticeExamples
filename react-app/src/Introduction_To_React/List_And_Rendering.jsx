import React from 'react'

function List_And_Rendering() {

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
        {list.map((data, index) => (
            <li key={index}>{data.name}</li>
        ))}
    </div>
  )
}

export default List_And_Rendering
