Expressions let you embed your logic directly into UI.
Anything inside braces {} in JSX, is treated as expression.

It can be :
Variables, Arithmetic operations, function calls, conditional operations, array methods (Map, filter)

statements (if, for , while) are not allowed inside JSX.

E.g. Embedding variables

function App() {
    const name = "Pathik";
    const age = 25;

    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p>You are {age} years old.</p>
        </div>
    )
}


E.g. Arithmetic expression

function App() {
    const a = 5;
    const b = 9;

    return (
        <div>
            <p>Sum : {a + b}, Mul : {a * b}</p>
        </div>
    )
}

E.g. Function call

function App() {

    function greet(user)
    {
            return (
                <div>
                    `Welcome, ${user}!`;
                </div>
            )
    }
    const user = "Manan";
    return (
        <div>
            <p>{greet(user)}</p>
        </div>
    )
}



E.g. Conditional statements

function App() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome Again</h1> : <h1>Please try again</h1>}
        </div>
    )
}

E.g Using Array.map()

function App() {
    const list = ["C++", "React"];

    return (
        <div>
            {list.map(data, index) (
                <li key={index}>{data}</li>
            )}
        </div>
    )
}


E.g. Inline styling 
function App() {

    const isRed = true;

    return (
        <div>
            <h1 style={{color : isRed ? "Red" : "Blue"}}>
                Conditional Styling
            </h1>
        </div>
    )
}