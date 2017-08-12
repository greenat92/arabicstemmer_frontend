import React from 'react';
import ReactDOM from 'react-dom';

import StemmerResult from './../StemmerResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StemmerResult results={[]} />, div);
});
