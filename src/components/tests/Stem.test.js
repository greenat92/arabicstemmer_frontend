import React from 'react';
import ReactDOM from 'react-dom';

import Stem from './../Stem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stem />, div);
});
