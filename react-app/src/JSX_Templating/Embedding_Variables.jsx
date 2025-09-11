You can insert JS variables into JSX using {}.

function App() {
    const name = "Pathik";
    const age = 25;

    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>You are {age} years old.</p>
        </div>
    )
}