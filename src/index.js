import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const appStemHTML = document.getElementById("stemApp");
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
       appStemHTML
   );


registerServiceWorker();
