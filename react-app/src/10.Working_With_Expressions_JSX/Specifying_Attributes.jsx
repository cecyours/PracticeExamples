Specifying attributes in JSX

String literals :

function App(){

    return (
        <div>
            <h1 name = "title">Welcome to React</h1>
            <img src="logo192.png" alt="logo"></img>
        </div>
    )
}

JS expressions :

function App(){

    const user = "harshil"

    return (
        <div>
            <h1>Welcome, {user}</h1>
            <img src={imgurl} alt="dynamic"></img>
        </div>
    )
}


Boolean attributes :

function App(){


    return (
        <div>
            <input type="text" placeholder="Enter Name" disabled = {true}></input>
        </div>
    )
}


Class & Style attributes :

function App(){


    return (
        <div className="container">
            <input type="text" placeholder="Enter Name" style={color : 'blue', fontSize : "24px"}></input>
        </div>
    )
}

Spread attributes :

function App(){

    const user = {name : "Pathik", age : 25}

    return (
        return <Profile {...user} />
    )
}