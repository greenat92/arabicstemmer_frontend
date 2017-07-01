import React from 'react';
//import PropTypes from 'prop-types';

import './content.css'

export default class ContentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="App-content">
          <div className="App-description">
          </div>
          <div className="App-demo">
          </div>
          <div className="App-code">
          </div>
          <div className="App-contribute">
          </div>
      </div>

    );
  }
}
