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
import RegistrationSuccess from "./pages/RegistrationSuccess";
import JoinSymposium from "./pages/JoinSymposium";
import DetailSympo from "./pages/Symposium/DetailSympo";
import JoinWorkshop from "./pages/JoinWorkshop";
import DetailWorkshop from "./pages/Workshop/DetailWorkshop";
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
          <Route exact path="/registration/success" component={RegistrationSuccess} />
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
            path="/joinWorkshop/:workshop-:workshopId"
            component={DetailWorkshop}
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
