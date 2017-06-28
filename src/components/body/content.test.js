import React from 'react';
import ReactDOM from 'react-dom';

import ContentPage from './content';

it('render without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<ContentPage />, div);
});
