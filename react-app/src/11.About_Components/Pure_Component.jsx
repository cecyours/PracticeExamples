// Pure Component:
// A pure component is a special type of class component.
// Defined using React.Purecomponent instead of React.Component.
// It automatically implements shouldComponentUpdate() with a shallow comparision of props and state.

// A pure component re-renders only if props and state change.

// Normal class component

import React, { Component } from "react";

class Normalcomp extends Component {
    render() {
        console.log("Normal component rendered");
        return <h2>Normal component : {this.props.name}</h2>
    }
}

export default Normalcomp;

//Pure component

import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log("Pure component rendered!");
        return <h2>Pure Component:{this.props.name}</h2>
    }
}

export default PureComp;