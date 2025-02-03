import request from './../../../service/invoke/request';
import * as actionType from './../action/SystemConfigurationActionType';

export const fetchData = (onSuccess) => {
    return (dispatch) => {
        request (
            'http://10.50.51.60:8196/pocket-rest/api/system-config/get/all',
            'GET',
            {},
            {},
            (response) => {
                dispatch({
                    type:actionType.FETCH_ALL_DATA,
                    payload: response.data.response,
                });
                onSuccess();
            },
            (error) => {
                //handling error
            })
        
    };
};

export const fetchDataById = (dataId,onSuccess) => {
    return (dispatch) => {
        request (
            'http://10.50.51.60:8196/pocket-rest/api/system-config/get/'+dataId,
            'GET',
            {},
            {},
            (response) => {
                dispatch({
                    type:actionType.FECTH_SINGLE_DATA,
                    payload: response.data.response,
                });
                onSuccess();
            },
            (error) => {
                //handling error
            })
        
    };
};

// export const postData = (data, onSuccess, onError) => {
//     return (dispatch) => {
//         request (
//             'http://10.50.51.60:8196/pocket-rest/api/system-config/save',
//             'POST',
//             data,
//             {
//                 "Content-Type": "application/json"
//             },
//             (response) => {
//                 console.log('response', response);
//                 dispatch({
//                     type:actionType.POST_DATA,
//                     payload: response.data.response,
//                 });
//                 onSuccess();
//             },
//             (error) => {
//                 //onError({errorMessage: error.statusText})
//                 console.log(error);
//             })   
//     };
// };

export const postData = (client,data, onSuccess, onError) => {
    return (dispatch) => {
        client.invoke(
            'system-config/save',
            data,
            {
                method:"POST",
                header:{
                    "Content-Type": "application/json"
                }
            }).then(
                (response) => {
                    console.log('response', response);
                    dispatch({
                        type:actionType.POST_DATA,
                        payload: response.data.response,
                    });
                    onSuccess();
                    
                },
                (error) => {
                    //handling error
                });
        
    };
};
