import React from 'react'
import * as type from './LoginActionType';
import request from './../../../service/invoke/request';
import {AESEncryption} from 'atic-encryption'
import config from './../../../config/Config'

export const doLogin = (client, encryptHandler, data, onSuccess, onError) => {
    return (dispatch) => {
        client.invoke(
            'user/login',
            {
                username: data.username,
                password: data.password
            },
            {
                method:"POST",
                header:{
                    "Content-Type": "application/json"
                }
            }).then(
                (response) => {
                    if(response.data.errorCode === '1000'){
                        var responseData = response.data.response;
                        const encryptedData = encryptHandler.encrypt(data.username, config.publicKey);
                        const decryptedData = encryptHandler.decrypt(encryptedData, config.privateKey);
                        dispatch({
                            type: type.LOGIN,
                            payload: {
                                username: encryptedData,
                                phoneNumber: responseData.msisdn,
                                firstName: responseData.firstName,
                                lastName: responseData.lastName,
                                lastLogon: responseData.lastLogon
                            },
                        });
                        onSuccess(response.data);
                    }else{
                        onError(response.data);
                    }
                    
                },
                (error) => {
                    onError({errorMessage: error.statusText})
                });
        
    };
};

export const doLogout = (data) => {
    return (dispatch) => {
        dispatch({
            type: type.LOGOUT
        });
    }
}