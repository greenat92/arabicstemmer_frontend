import React from 'react';
//import PropTypes from 'prop-types';

import './header.css'
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="App-header">
           <div className="App-title">
                   <h2>Snowball Aarabic Stemmer</h2>
           </div>
    </div>
    );
  }
}
