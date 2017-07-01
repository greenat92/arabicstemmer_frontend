import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
// import RaisedButton from 'material-ui/RaisedButton';


// import logo from './logo.svg';
import './App.css';

import Body from './../../components/body/body'


/*const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};
*/
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <Body />
          </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
