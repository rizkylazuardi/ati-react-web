import React from 'react';
import { connect } from 'react-redux';

//image
import importUsernameIcon from './../../assets/icon/account.png';
import inputPasswordIcon from './../../assets/icon/password.png';

//style
import './style/style.css';
import container from './style/container';
import footerStyle from './style/footerStyle';

//component
import {AtiTextbox, AtiTextPassword, AtiButton, AtiLogin, AtiSpinner} from 'ati-react-web';
import * as loginAction from './action/LoginAction';
import * as menuAction from './../layout/action/MenuAction';
import * as navigateAction from './../../store/action/NavigationAction';
import { AppContext } from './../../App';
import {browserHistory, Redirect } from 'react-router'
import {  push } from 'react-router-redux'
import {message, Spin} from 'antd'
import {withPocketRemoteService} from './../../service/invoke/PocketRemoteService';
import {withRSAEncryption} from 'atic-encryption'
class Main extends React.Component{

    state = {
        username : '',
        password : '',
        login : false,
        loading:false,
    }
    
    componentWillMount(){
        this.props.pocketRemoteService.refreshCsrfToken();
    }

    handleUsernameChange = (value) =>{
        this.setState({...this.state, username : value})
    }

    handlePasswordChange = (value) =>{
        this.setState({...this.state, password : value})
    }

    handleLoading = () =>{
        this.setState((prevState) => ({ loading : !prevState.loading }));
    }

    handlerLogin = (showLoading) =>{
        //console.log(JSEncrypt)
        return (username, password) => {
            this.handleLoading();
            this.props.doLogin(
                this.props.pocketRemoteService,
                this.props.rsaencryption,
                {
                    username,
                    password
                },
                (success) => {
                    this.handleLoading();
                    this.props.updateMenu(
                        this.props.pocketRemoteService,
                        {username}
                    )
                    this.props.navigate('/modul/dashboard');
                },
                (error) => {
                    this.handleLoading();
                    message.error(error.errorMessage, 5);
                }

            );
        }
    }

    render(){
        return(
            <AppContext.Consumer>
            {(context) => {
            return (
            <div id = "holder">
                <div style = {container}>
                
                    <h1 className = "text-center text-title text-color"><b>Pocket</b>Bank</h1>
                    <AtiSpinner spinning={this.state.loading}>
                    <AtiLogin 
                        title = "Login to your Account"
                        // inputPasswordIcon = {inputPasswordIcon}
                        // containerWidth = "25%"
                        // containerHeight = "40%"
                        footer = {
                            <div>Forgot Password ? <a href = "/pretet">Click Here</a></div>
                        }
                        events = {
                            {
                                handleUsernameChange : this.handleUsernameChange,
                                handlePasswordChange : this.handlePasswordChange,
                                handleOnSubmit : this.handlerLogin(context.showLoading)
                            }
                        }
                        style={{
                            backgroundColor: '#00ff00',
                          }}
                    />   
                    </AtiSpinner>
                    {/* <div className = "center-block">
                        <h4 className = "text-subtitle"> Login to your account </h4>
                        
                        <div className="row">
                            <div className="col-sm-1">
                                <img src = {account} className = "icon"/>
                            </div>

                            <div className="col-sm-10">
                            <AtiTextbox id = "username" name = "username" label = "Username" type = "text"
                                value = {this.state.username} size = "sm" placeholder = "Input your username here" 
                                events = {
                                    {
                                        onChange : this.handleUsernameChange
                                    }
                                }/>
                            </div>

                            <div className="col-sm-1"></div>
                        </div>

                        <div className = "row">
                            <div className="col-sm-1">
                                <img src = {password} className = "icon"/>
                            </div>

                            <div className="col-sm-10">
                                <label>Password</label>
                                <AtiTextPassword id = "password" name = "password" value = {this.state.password}
                                    placeholder = "Input your password here" className = "form-control-sm form-control" 
                                    events = {
                                        {
                                            onChange: this.handlePasswordChange
                                        }
                                    }/>
                            </div>

                            <div className="col-sm-1"></div>
                        </div>
                        
                        <AtiButton type = "button" id = "login" name = "login" text = "Login" size = "sm" 
                            className = "login-button" color = "#fabc3b"
                                events = {
                                    {
                                        onClick: this.handlerLogin(context.showLoading)
                                    }
                                }/>
                        
                        <p className = "text-center text-small margin-top-10px"> Forgot Password? <a href = "/pretet">Click Here</a> </p>    
                    </div> */}
                    

                    <p className = "text-center text-large text-color margin-top-10">
                        "BANKING SYSTEM IN YOUR POCKET"
                    </p>

                    <footer>
                        <p className = "text-center text-color text-footer"> Copyright © PT Anabatic Technologies.</p>
                    </footer>
                </div>
            </div>
            )}}
            </AppContext.Consumer>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { login, menu } = state;
    return { ...login, ...menu };
}

const mapActionToProp = () => {
    return {
        ...loginAction, ...menuAction, ...navigateAction,
    };
}


export default withRSAEncryption(withPocketRemoteService(connect(mapStateToProps, mapActionToProp())(Main)));