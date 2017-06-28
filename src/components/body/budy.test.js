import React from 'react';
import ReactDOM from 'react-dom';

import Body from './body';

it('render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Body />, div);
});
