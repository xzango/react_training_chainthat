import React from "react";
import ReactDOM from "react-dom";
import './root.css'

const App = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2 className="header">{props.greet}</h2>
      <input type="text" />
      <input type="checkbox" />
      <input type="password" />
     <button>Submit</button>
    </>
  );
};

ReactDOM.render(<App name="yagnesh" greet="hello" />, document.getElementById("root"));
