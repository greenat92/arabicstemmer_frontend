import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
