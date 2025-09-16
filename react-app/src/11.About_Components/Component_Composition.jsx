// In React, component composition means building complex UIs by combining smaller and 
// reusable components.
// Instead of inheritance, React encourages composition.
// components can pass jsx or props into other components.

import React from "react";

function Card(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Card


function App() {
    return (
        <div>
            <h1>component composition example</h1>

            <Card>
                <h2>User Profile</h2>
                <p>Name : Pathik</p>
                <p>Role : Developer</p>
            </Card>

            
        </div>
    )
}


//Composition with Props

function Button({label, color}) {
    return (
        <button style={{backgroundColor : color}}>
            {label}
        </button>
    )
}

function App() {
    return (
        
    )
}