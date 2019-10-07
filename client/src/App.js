import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Contacts from "./pages/contacts";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Login path="/login"></Login>
          {isLoggedIn && (
            <Router path="/">
              <Header></Header>
              <Switch>
                <Home path="/home"></Home>
                <Profile path="/profile"></Profile>
                <Contacts path="/contacts"></Contacts>
                <Redirect to="/home" />
              </Switch>
            </Router>
          )}
          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(App);
