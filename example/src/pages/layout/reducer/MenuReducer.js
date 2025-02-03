import React from 'react'
import * as actionType from './../action/MenuActionType';
import { Icon, Popover } from 'antd';

const initialState = {
    listMenu: [],
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.UPDATE_MENU:
            return { listMenu: payload.menus };
        default:
            return state;
    }
};
