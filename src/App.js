import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';


import Layout from './Component/Layout/Layout';
import Routing from './Component/Routing/Routing';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routing />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
