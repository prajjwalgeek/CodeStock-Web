import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';

import { Home } from './screens';
import { Signup, Login } from './screens';
const App = () => {

  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;