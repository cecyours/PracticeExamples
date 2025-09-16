In react, app is built using many smaller and reusable components.
component id independent.
components can be reused across project.
It can be nested inside each other to build better ui.

Reusability : A Button component can be reused across forms, modals and cards.
Maintainability : Code is easier to maintain and debug when split into smaller pieces.
Separation of Concerns : Each component handles one specific job.(UI or logic)

Without component:
function App() {
    return (
        <div>
        <h1>Student Portal</h1>
        <div className = "card">
        <h2>Pathik</h2>
        <p>Marks : 90</p>
        </div>

        <div className = "card">
        <h2>Raj</h2>
        <p>Marks : 70</p>
        </div>
        </div>
    )
}


With Component Architecture:
function card({name, marks}) {
    return (
        <div className = "card border p-2 m-2">
        <h2>{name}</h2>
        <p>Marks : {marks}</p>
        </div>
    )
}

function App() {

    return (
        <div>
        <h1>Student Portal</h1>

        <card name = "Pathik" marks = {90} />
        <card name = "Raj" marks = {90} />
        </div>
    )
}


Data driven components:

function App() {

    const students = [
        {id : 1, name : Pathik, marks : 90},
        {id : 2, name : "Raj", marks : 80}
    ];
    return (
        <div>
            {students.map((s) => (
                <card key={s.id} name = {s.name} marks={s.marks} />
            ))}
        </div>
    )
}

UI scales automatically as data grows.