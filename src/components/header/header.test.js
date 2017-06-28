import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

it('Render without crashing !', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div)

});
