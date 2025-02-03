/**
 * @author akbar.pambudi
 * this code use create store and register reducer of application
 */

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createHistory from "history/createHashHistory";
import {browserHistory} from 'react-router';
import {routerReducer,routerMiddleware} from "react-router-redux";
//import storageSession from 'redux-persist/lib/storage/session' // defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import appReducers from './reducer';
import logger from 'redux-logger' 
export const history = createHistory();
const middleware = routerMiddleware(history);
 const persistConfig = {
    key: 'root',
    storage:storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['login', 'menu']
    //blacklist: [],
    //timeout: 1000000,
  }
 
const persistedReducer = persistReducer(persistConfig, appReducers)
export const store = createStore(persistedReducer, applyMiddleware(middleware, thunk));
export const persistor = persistStore(store);
