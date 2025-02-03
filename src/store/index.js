import { createStore, applyMiddleware } from 'redux'
import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const middleware = routerMiddleware(browserHistory)
const store = createStore(applyMiddleware(thunk, logger, middleware))
export default store
