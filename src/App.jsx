import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Registrer from "./components/Registrer";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";



function App(){
    return (
      <Router>
        <div className="App">
        <Nav />
        </div>
      </Router>
    );
}

export default App;


