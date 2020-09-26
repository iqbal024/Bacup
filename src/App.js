import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Workshop from "./pages/Workshop";
import Symposium from "./pages/Symposium";
import AbstractSubmission from "./pages/AbstractSubmission";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path="/workshop" component={Workshop} />
          <Route exact path="/symposium" component={Symposium} />
          <Route exact path="/abstract" component={AbstractSubmission} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
