import React, { Fragment,useState } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import User from "./components/user/User";
import axios from "axios";
import Search from "./components/user/Search";
import AlertMsg from "./components/layout/AlertMsg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App=()=>  {
  const [alert, setAlert] = useState(null);

  const handleAlert = ({ msg, type }) => {
    setAlert({ msg, type });
    setTimeout(() => {
    setAlert(null);
    }, 3000);
  };

    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <AlertMsg alert={alert} />
            <Switch>
            <Route exact path="/">
              <Fragment>
                <Search
                  alertMsg={handleAlert}
                />
                <Users/>
              </Fragment>
            </Route>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" component={User}/>
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
