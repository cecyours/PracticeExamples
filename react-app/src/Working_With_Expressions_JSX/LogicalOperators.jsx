Logical AND - &&
If the condition is true, right hand side is renderToReadableStream.
If it is false, nothing is render


E.g. function App() {

    const isLoggedIn = true
    return (
        <div>
            {isLoggedIn && <p>Welcome to the page</p>}
        </div>
    )
} 


Logical OR - ||
If the left side is false, right side will render.


E.g. function App() {
    const username = "";

    return (
        <div>
            <h1>Hello, {username || "Guest"}</h1>
        </div>
    )
}


Logical ?? (Nullish coalescing)

function App() {
    const age = 0;

    return (
        <h2>Age:{age ?? "Not Provided"}</h2>
    );
}

Output : Age : 0