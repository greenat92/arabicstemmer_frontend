import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
            <ul className="App-menu">
            </ul>
            </div>
            <p className="App-intro">

            </p>
          </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
