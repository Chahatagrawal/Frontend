import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import MainNav from "./common/components/navigation/MainNav";
import UserLocation from "./locations/pages/UserLocation";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";

const App = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserID(uid);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserID(null);
  }, []);
  let validroutes;
  if (isLoggedin) {
    validroutes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/locations" exact>
          <UserLocation />
        </Route>
        <Route path="/locations/new" exact>
          <NewLocation />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    validroutes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userid/locations" exact>
          <UserLocation />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <LoginContext.Provider
      value={{
        isLoggedin: isLoggedin,
        userID: userID,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNav />
        <main>{validroutes}</main>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
