import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";




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


