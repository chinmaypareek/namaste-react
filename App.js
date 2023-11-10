import React from "react";
import ReactDOM from "react-dom/client";

// React Element = React.createElement => Object => HTMLElement(render), Creating a React Element using core react

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

//JSX - not html in js, It is html like syntax - Creating a react element using JSX
//This JSX will be transpiled before it reaches to the JS engine - PARCEL - BABEL - It takes your JSX and converts it onto the code which browsers can understand
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
