import axios from 'axios';
import {message} from 'antd';

const request = (url, method, data, headers, onSuccess, onFailure) => {
         axios({
            url,
            method,
            data,
            headers: withCsrfTokenHeaders(headers),
            timeout:10000,
            responseType: 'json',
            withCredentials: true,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRF-TOKEN'
        }).then(response => {
            if(onSuccess){
                onSuccess(response);
            }else{
                message.success('sucessfully request data, please handle onSuccess event !');
            }
        }).catch(error => {
            var errorResponse = {};
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const headers = error.response.headers;
                const status = error.response.status;
                const statusText = error.response.statusText;
                const data = error.response.data;
                errorResponse = {status, statusText, data, headers} ;
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                errorResponse = {status:500, statusText:'Connection to server failed.'} ;
            } else {
                // Something happened in setting up the request that triggered an Error
                errorResponse = {status: 500, statusText : error.message} ;
            }

            if(onFailure){
                onFailure(errorResponse);
            }else{
                message.error("Request data failed. please try again !");
            }
        });
}

const withCsrfTokenHeaders = (headers) => {
    const newHeaders = 
        {
            ...headers, 
            //'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    return newHeaders;
}

export default request;