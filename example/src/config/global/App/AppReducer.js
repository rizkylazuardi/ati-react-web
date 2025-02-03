import * as actionType from './AppActionType';

const initialState = {
    csrf_token: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.UPDATE_CSRF:
            return { ...state, csrf_token: payload.csrf};
        default:
            return state;
    }
};
