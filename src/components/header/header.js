import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="App-header">
            <ul className="App-menu">
            </ul>
      </div>

    );
  }
}
