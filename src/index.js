import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestSetState from './TestSetState';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TestSetState />, document.getElementById('root'));
registerServiceWorker();
