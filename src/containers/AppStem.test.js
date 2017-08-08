import React from 'react';
import ReactDOM from 'react-dom';

import store from './../store';
import AppStem from './AppStem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AppStem store={store} />, div);
});
