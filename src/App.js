import React from "react";
import "./App.css";
import "./reset.css";
import routes from "./routes";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className='app'>
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
