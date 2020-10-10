import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Workshop from "./pages/Workshop";
import Symposium from "./pages/Symposium";
import AbstractSubmission from "./pages/AbstractSubmission";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import JoinSymposium from "./pages/JoinSymposium";
import DetailSympo from "./pages/Symposium/DetailSympo";
import JoinWorkshop from "./pages/JoinWorkshop";
import DetailWorkshop1 from "./pages/Workshop/DetailWorkshop1";
import DetailWorkshop2 from "./pages/Workshop/DetailWorkshop2";
import DetailWorkshop3 from "./pages/Workshop/DetailWorkshop3";
import DetailWorkshop4 from "./pages/Workshop/DetailWorkshop4";
import SeePoster from "./pages/Poster";
import Users from "./pages/Users";
import ContactUs from "./pages/ContactUs";
import Posters from "./pages/Posters";
import Sponsors from "./pages/Sponsors";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  // dynamically set user logged in or not
  const user = true;

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
          <PrivateRoute
            exact
            path="/joinSymposium"
            component={JoinSymposium}
            user={user}
          />
          <Route
            exact
            path="/joinSymposium/symposium-:sympoId"
            component={DetailSympo}
          />
          <Route exact path="/joinWorkshop" component={JoinWorkshop} />
          <Route
            exact
            path="/joinWorkshop/workshop1"
            component={DetailWorkshop1}
          />
          <Route
            exact
            path="/joinWorkshop/workshop2"
            component={DetailWorkshop2}
          />
          <Route
            exact
            path="/joinWorkshop/workshop3"
            component={DetailWorkshop3}
          />
          <Route
            exact
            path="/joinWorkshop/workshop4"
            component={DetailWorkshop4}
          />
          <Route exact path="/seePoster" component={SeePoster} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/posters" component={Posters} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
