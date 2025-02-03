import axios from 'axios';
var axiosDefaults = require("axios/lib/defaults");

axiosDefaults.xsrfCookieName = "csrftoken"
axiosDefaults.xsrfHeaderName = "X-CSRFToken"
//const instance = axios.create();
//instance.defaults.timeout = 2500;

export default axios;