import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feed />, div);
    ReactDOM.unmountComponentAtNode(div);
});