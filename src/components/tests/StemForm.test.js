import React from 'react';
import ReactDOM from 'react-dom';

import StemForm from './../StemForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StemForm />, div);
});
