import { GET_DEVICES, GET_CONNECTED_DEVICES, ADD_DEVICE } from './actionTypes';
import { API_DEVICES_URL } from '../../config';

import axios from 'axios';

export const getDevices = () => dispatch => {
    axios.get(API_DEVICES_URL + '/find/all').then(res => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : {
                devices : res.data,
                error : false
            }
        })
    }).catch(err => {
        dispatch({ 
            type: GET_DEVICES, 
            payload : {
                error : true
            }
        })
    })
}

export const addDevice = (device, authorization) => dispatch => {
    axios({ 
        method: 'POST',
        url : API_DEVICES_URL + '/add',
        headers: {
            'Authorization' : authorization
        },
        data: device
    }).then(res => {
        dispatch({
            type : ADD_DEVICE,
            payload : {
                device : res.data,
                error : false
            }
        })
    }).catch(err => {
        dispatch({
            type : ADD_DEVICE,
            payload : {
                error : true
            }
        })
    });
}

export const getConnectedDevices = () => async(dispatch) => {
    await axios.get(API_DEVICES_URL + '/find/connected')
    .then(res => {
        dispatch({
            type : GET_CONNECTED_DEVICES,
            payload : {
                connectedDevices : res.data,
                error : false            
            }
        });
    }).catch(err => {
        dispatch({
            type: GET_CONNECTED_DEVICES,
            payload : {
                error : true
            }
        });
    });
}