import * as actionType from './../action/SystemConfigurationActionType';

const initialState = {
    dataSource: [],
    objectData:{}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case actionType.FETCH_ALL_DATA:
            return { ...state, dataSource: payload };
        case actionType.FECTH_SINGLE_DATA:
            return { ...state, objectData: payload };
        case actionType.POST_DATA:
            return { ...state, objectData: payload };
        default:
            return state;
    }
};
