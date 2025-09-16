import { useEffect } from "react"

Functional components :
simple JS functions that return JSX.
Can use hooks(useState, useEffect etc.) for state and lifecycle.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3 border text-center">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary m-1" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-danger m-1" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;


Class components :
JS E6 classes extending React.Component
Use this.state for state management.
Use lifecycle methods (componentDidMount, ComponentDidUpdate, componentWillUnmount)

import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="p-3 border text-center">
        <h2>Counter: {this.state.count}</h2>
        <button className="btn btn-primary m-1" onClick={this.increment}>
          Increment
        </button>
        <button className="btn btn-danger m-1" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default CounterClass;


Presentational (Stateless) components
Focus only on UI.
Do not manage state or logic.
Receive data via props.

function StudentCard({ name, marks }) {
  return (
    <div className="card p-2 m-2">
      <h3>{name}</h3>
      <p>Marks: {marks}</p>
    </div>
  );
}


Container (Stateful / Smart) Components:
Manage state and logic
Pass data down to presentational components

function StudentList() {
  const students = [
    { id: 1, name: "Pathik", marks: 90 },
    { id: 2, name: "Raj", marks: 85 },
  ];

  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) => (
        <StudentCard key={s.id} name={s.name} marks={s.marks} />
      ))}
    </div>
  );
}
    

Controlled and Uncontrolled components
Controlled :- Form input values are controlled by react state.
Uncontrolled :-Values are handled by DOM itself(via ref).

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Your name: {name}</p>
    </div>
  );
}
