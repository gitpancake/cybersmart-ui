import React from 'react';
import ReactDOM from 'react-dom';
import AddLocationModal from './index';

import { API_DEVICES_URL } from '../../../config';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders without crashing', () => {
    var Mock = new MockAdapter(axios);

    var data = {

    };

    Mock.onGet(API_DEVICES_URL + '/find/all').reply(200, data);
    
    const div = document.createElement('div');
    ReactDOM.render(<AddLocationModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});