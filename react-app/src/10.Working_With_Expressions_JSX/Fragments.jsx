When you need to return multiple elements together, then Fragment is used.
React allows only one parent element.

A fragment allows to group multiple elements without adding a extra DOM node(like <div>)
written as <React.Fragment> or <></>

Without Fragment:

function App() {

    return (
        <div>
            <h1>Hello</h1>
            <p>Paragraph text</p>
        </div>
    )
}

With Fragment :

function App() {

    return (
        <>
        <h1>Hello</h1>
        <p>Paragraph text</p>
        </>
    )
}