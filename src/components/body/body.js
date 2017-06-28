import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import ContentPage from './content';
import Footer from '../footer/footer';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="App-body">
      <Header />
      <ContentPage />
      <Footer />

      </div>

    );
  }
}
