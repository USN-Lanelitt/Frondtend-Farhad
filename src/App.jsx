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
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/log" component={Login} />
        <Route path="/lag" component={Registrer} />
        </Switch>
        </div>
      </Router>
    );
}

export default App;


