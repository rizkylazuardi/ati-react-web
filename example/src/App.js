import React, { Component, } from 'react';
import { Provider } from 'react-redux';
import './App.css';

// import store 
import { history, persistor, store } from './store';

//import page
import { Router, Route, browserHistory } from 'react-router'
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { DTTRouter } from 'dtt-web-security';
import Page403 from './pages/403';
import Login from './pages/login/login';
import Layout from './pages/layout/Layout';
import user from './pages/manageuser/user';
import {default as SystemConfigMain} from './pages/managesystemconfig/main';
import TableUser from './pages/manageuser/View/TableUser';
import Dashboard from './pages/dashboard/dashboard';
import Loading from './pages/component/loading/loading';
import AddUser from './pages/manageuser/View/AddUser';

import {default as SystemConfigForm} from './pages/managesystemconfig/Form';
import Page404 from './pages/404';
import { PocketRemoteServiceProvider } from './service/invoke/PocketRemoteService';
import config from './config/Config';
import { SocketIOProvider } from 'anabatic-socket-engine';

export const AppContext = React.createContext({showLoading: () => {}})

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props}
      childComponent={
        <Route path={`${props.match.url}/dashboard`} component={Dashboard}/>
      }/>
  )}/>
)

const TestApp = ({match}) => {
  return (
      <div>Halo Bro</div>
  )
}

class App extends Component {
  state = {
    showLoading: false
  }

  showLoading = (flag) => {
    this.setState({showLoading: flag})
  }
  routeSources = [
    {
      component: Layout,
      path: '/modul',
      child: [
        { component: SystemConfigMain, path: '/system', menuCode: 'menu.propconfig', exact: true },
        { component: user, path: '/manageuser', menuCode: 'manage_user', exact: true },
        { component: Dashboard, path: '/dashboard' },
        { component: TestApp, path: '/test', exact: true },
        { component: TableUser, path: '/user', menuCode: 'menu.user', exact: true },
        { component: AddUser, path: '/adduser', exact: true },
        { component: SystemConfigForm, path: '/system/form/:id', exact: true },
      ],
    },
    { component: Login, path: '/', exact: true },
    { component: Page403, path: '/page403' },
    { component: Page404 },
  ];

  render() {
    
 return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PocketRemoteServiceProvider baseUrl={config.baseUrl}>
          <SocketIOProvider socketUrl={config.socketUrl}>
            <div>
              <AppContext.Provider value={{showLoading: this.showLoading}}>
                <DTTRouter store={store} history={history} routeSources={this.routeSources} accessDeniedUrl="/page403"/>
              </AppContext.Provider>
              <Loading visible={this.state.showLoading} />
            </div>
          </SocketIOProvider>
        </PocketRemoteServiceProvider>
      </PersistGate>
      </Provider>
    );
  }
}

export default App;
