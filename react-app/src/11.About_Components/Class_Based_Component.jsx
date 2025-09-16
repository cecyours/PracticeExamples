// Class based component:
// A JS ES6 class that extends React.Component

// Must have render() method that returns JSX.
// Can manage state using this.state
// can use lifecycle methods (componentDidMount, componentDidupdate, EventCounts)

// Basic class component

import React, {component} from "React";

class Welcome extends Component {
    render() {
        return <h1>Hello</h1>
    }
}

function App() {
    return (
        <div>
            <Welcome />
        </div>
    )
}

//Class component with props
import React, {component} from "React";

class Greeting extends component {
    render()
    {
        return <h2>Hello, {this.props.name}</h2>
    }
}

function App() {
    return (
        <div>
            <Greeting name = "Pathik" />
            <Greeting name = "Raj"></Greeting>
        </div>
    )
}



//class component with state
import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};
    }

    increment = () => {
        this.setState({count : this.state.count + 1})
    }

    decrement = () => {
        this.setState({count : this.state.count - 1})
    }

    render(){
        return (
            <div>
            <h2> Counter : {this.state.count}</h2>
            <button className="btn btn-primary" onClick={this.increment}>
                Increment
            </button>
            <button className="btn btn-primary" onClick={this.decrement}>
                Decrement
            </button>
            </div>
        )
    }
}


//class component with lifecycle method

import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {seconds : 0};
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ seconds : this.state.seconds + 1});
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <h2>Timer : {this.state.seconds} s</h2>
    }
}

export default Timer;