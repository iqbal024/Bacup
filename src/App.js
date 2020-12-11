import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

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
import Users from "./pages/Users";
import ContactUs from "./pages/ContactUs";
import Posters from "./pages/Posters";
import PostersDetail from "./pages/PostersDetail";
import Sponsors from "./pages/Sponsors";
import ScrollToTop from "./utils/ScrollToTop";
import Prifzer from "./pages/Sponsor/Prifzer";
import Terumo from "./pages/Sponsor/Terumo";
import Msd from "./pages/Sponsor/Msd";
import Abbott from "./pages/Sponsor/Abbott";

import store from "./helper/store";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  const user = store.getState().authReducer.user;

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/registration" component={RegistrationForm} />
            <Route
              exact
              path="/registration/success"
              component={RegistrationSuccess}
            />
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
            <Route exact path="/seePoster" component={Posters} />
            <PrivateRoute exact path="/users" component={Users} user={user} />
            <Route exact path="/posters" component={Posters} />
            <Route exact path="/posters/:id" component={PostersDetail} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/pfizer" component={Prifzer} />
            <Route exact path="/terumo" component={Terumo} />
            <Route exact path="/msd" component={Msd} />
            <Route exact path="/abbott" component={Abbott} />
            <Route exact path="/contact-us" component={ContactUs} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
