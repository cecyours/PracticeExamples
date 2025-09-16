import { useEffect, useState } from "react"

Functional components 
A JS function that returns JSX.
Can accept props.
Can manage state & side effects using hooks

Basic Functional component example :

function App() {

    return (
        <div>
            <h1>Hello, Aman</h1>
        </div>
    )
}

export default App

Usage:
import App from "./App";

function main() {

    return (
        <div>
            <App />
        </div>
    )
}

Functional component with props:

function Greeting({props})
{
    return (
        <div>
            <p>Welcome, {props.name}</p>
        </div>
    )
}

function App(){

    return (
        <div>
            <Greeting name = "Avi" />
        </div>
    )
}


Functional component with State (usestate):

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button className = "btn btn-primary" onClick = {() => setCount(count + 1)}>
                Increment
            </button>
            <button className = "btn btn-primary" onClick = {() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    )
}

Functional component with side Effect(useEffect hook)

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setSeconds((s) => s + 1), 1000)

        return () => clearInterval(timer)
    }, []);

    return (
        <h2>Timer : {seconds}s</h2>
    )
}

export default Timer;

// It shows a live timer.
// UseEffect replaces class lifecycle methods like componentDidMount

// Functional component with event handling

function App() {

    const handleClick = () => {}
    return (
        <div>
        <button className="btn btn-primary" onClick={handleClick}>
        ClickMe
        </button>
        </div>
    )
}