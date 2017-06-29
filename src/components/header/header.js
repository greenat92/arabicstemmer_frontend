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
              <div className="App-wraper">
                    <div className="App-logo-space">
                        <a>
                          <img src="" className="App-logo" />
                          <div className="App-title"> </div>
                        </a>
                    </div>
                    <ul className="App-menu">
                    <li className="App-item"><a>Code</a></li>
                    <li className="App-item"><a>Corpura</a></li>
                    </ul>
          </div>
      </div>

    );
  }
}
