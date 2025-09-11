Assume you created a project with:

npx create-react-app my-app

You’ll see a structure like this:
my-app/
│── node_modules/        # all installed packages (auto-generated)
│── public/              # static assets (not processed by React)
│   ├── index.html       # main HTML file
│   ├── favicon.ico      # browser tab icon
│   └── manifest.json    # PWA settings
│── src/                 # MAIN source code (where we work)
│   ├── App.js           # main React component
│   ├── App.css          # styles for App.js
│   ├── index.js         # entry point (renders App to DOM)
│   ├── index.css        # global styles
│   └── logo.svg         # example React logo
│── package.json         # project config, dependencies, scripts
│── .gitignore           # tells git what to ignore
│── README.md            # instructions for project
