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
          <h2>Description</h2>
           <p>
               Welcome to the Arabic Light Stemming Algorithm made for Snowball,
               it s fast and can be generated in many programming languages
               (through Snowball).
           </p>
          </div>
          <div className="App-demo">
            <h2>Demo</h2>
              <p>
                  Type some Arabic text and press "Stem!" button or "File" to read from a local ".txt" file
              </p>
          </div>
          <div className="App-code">
              <h2>Code</h2>

          </div>
          <div className="App-contribute">
             <h2>Contributors</h2>
          </div>
      </div>

    );
  }
}
