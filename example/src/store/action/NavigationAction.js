import React from 'react';
import { push } from 'react-router-redux';

export const navigate = (url) => {
    return (dispatch) => {
        dispatch(push(url))
    }
}