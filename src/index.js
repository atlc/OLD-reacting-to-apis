import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'isomorphic-fetch';  // Using Chrome 69 but importing for best practices
import 'es6-promise';      // Using Chrome 69 but importing for best practices

ReactDOM.render(<App />, document.getElementById('root'));