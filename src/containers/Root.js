
// TODO: integrating DevTools 
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from './AppStem';
import DevTools from './DevTools';

const Root = ({}) => (
  <MuiThemeProvider>
     <Provider store={store}>
       <div>
         <AppStem />
         <DevTools />
       </div>
     </Provider>
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.shape({ /* TODO: update */ }).isRequired,
  history: PropTypes.shape({ /* TODO: update */ }).isRequired,
};

export default Root;
