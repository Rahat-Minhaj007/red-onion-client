import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NoMatch from "./components/NoMatch/NoMatch";
import LogIn from "./components/LogIn/LogIn";
import { createContext, useState } from "react";
import React from "react";
import MainHome from "./components/MainHome/MainHome";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <MainHome></MainHome>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <MainHome></MainHome>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
