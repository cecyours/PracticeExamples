it is a tool provided by react team to quickly setup react project.
Normally, to run react, you would need :
1.webpack(for bundling)
2.Babel (for JSX --> JS conversion)
3.ESlint(for code quality)
4. Dev server(for live reloading)

CRA automates this getAllByAltText.

How to Create a React App using CRA

npx create-react-app my-app

npx runs the package without installing globally.
my-app = folder/project name.

cd my-app

npm start


Project Structure (after CRA)
my-app/
│── node_modules/     # dependencies
│── public/
│   └── index.html    # root HTML
│── src/
│   ├── App.js        # main component
│   ├── index.js      # entry point
│   └── App.css
│── package.json      # dependencies & scripts
