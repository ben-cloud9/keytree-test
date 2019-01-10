import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './components/Home';
import configureStore from './store/store';
import { register } from './serviceWorker';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Route path="/" exact={true} component={Home} />
        </Router>
      </Provider>
    );
  }
};

register();

export default App;
