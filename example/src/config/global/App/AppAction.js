import * as type from './AppActionType';
import request from './../../../service/invoke/request';

export const updateCsrfToken = (onSuccess, onError) => {
    return (dispatch) => {
        request (
            'http://localhost:8085/pocket-rest/api/user/csrf-token',
            'GET',
            null,
            {},
            (response) => {
                console.log(response);
                dispatch({
                    type: type.UPDATE_CSRF,
                    payload: {csrf: response}
                })
            },
            (error) => {
                console.log(error);
            })
        
    };
}
