When you run a react app, errors may appear. Debugging means finding and fixing those errors.

If the code has typo or wrong syntax, error appears in terminal + browser.

E.g.
function App() {
  return (
    <div>
      <h1>Hello Pathik 👋</h1>
      <p>Welcome to React!<p>   {/* Missing closing tag */}
    </div>
  );
}

Error shown:
Expected corresponding JSX closing tag for <p>.

Fix:
<p>Welcome to React!</p>
