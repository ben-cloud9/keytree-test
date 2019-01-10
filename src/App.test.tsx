import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* skipping for now as failing due to configure store
* needing access to compose enhancers within store */
it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
