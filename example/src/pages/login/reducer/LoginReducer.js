import * as actionType from './../action/LoginActionType';

const initialState = {
    isLogin: false,
    userData: {},
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.LOGIN:
            return { ...state, isLogin: true, userData: payload };
        case actionType.LOGOUT:
            return { ...state, isLogin: false, userData: {} };
        default:
            return state;
    }
};
