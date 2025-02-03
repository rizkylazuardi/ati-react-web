import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import welcomeReducer from './welcomeReducer'
import {SecurityReducer} from 'dtt-web-security'
import LoginReducer from './../../pages/login/reducer/LoginReducer'
import MenuReducer from '../../pages/layout/reducer/MenuReducer'
import SystemConfigurationReducer from './../../pages/managesystemconfig/reducer/SystemConfigurationReducer'
import AppReducer from '../../config/global/App/AppReducer';
import languageProviderReducer from '../../pages/component/languageprovider/reducer'
import { reducer as formReducer } from 'redux-form'
// compose reducer into one reducer
const appReducers = combineReducers({
    routing : routerReducer,  
    welcome: welcomeReducer,
    security: SecurityReducer,
    login: LoginReducer,
    menu: MenuReducer,
    app: AppReducer,
    dataSourceSystemConfig:SystemConfigurationReducer,
    locale: languageProviderReducer,
    form: formReducer
});

export default appReducers;
