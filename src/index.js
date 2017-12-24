import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let BUTTONTEXT = "Woo!";

ReactDOM.render(<App text={BUTTONTEXT} />, document.getElementById('root'));
registerServiceWorker();
