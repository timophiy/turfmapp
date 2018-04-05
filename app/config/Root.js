import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main';
import GameDay from '../components/GameDay';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/gameday" component={GameDay}/>
      </Switch>
    </Router>
  );
};

export default Root;
