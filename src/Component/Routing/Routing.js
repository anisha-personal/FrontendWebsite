import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../Container/home/home';
class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routing;