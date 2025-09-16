import { Children } from "react"

Specifying Children:

Children means content placed between opening and closing tags.

String or text as Children

function App() {

    return(
        <div>
            <h1>Heading Title</h1>
            <p>this is paragraph</p>
        </div>
    )
}


Elements as Children

function App() {

    return(
        <div>
            <button>
                Click ME
            </button>
            <p>Paragraph</p>
        </div>
    )
}

Components with Children

function card(props) {

    return (
        <div className = "card">
            {props.Children}

        </div>
    )
}
function App() {

    return (
        <div>
            <card>
                <h1>React Card</h1>
                <p>This is paragraph</p>
            </card>
        </div>
    )
}


Children as Expressions
map() output as children

function App() {

    const items = [banana, apple, mango]
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}