import React, {Component} from 'react';
import {connect} from 'react-redux'
import './../style.css';
import 'antd/dist/antd.css';
// component
import {AtiDashboard, AtiDashboardItem, AtiSideMenu, AtiHeader} from 'ati-react-web'
import { Layout, Icon, Modal } from 'antd';
import TabsNotification from './component/TabsNotification/TabsNotification';
import PopoverSetting from './component/PopoverSetting';
import DrawerSetting from './component/DrawerSetting';
import * as menuAction from './action/MenuAction';
import * as loginAction from './../login/action/LoginAction';
import * as navigationAction from './../../store/action/NavigationAction';

import LanguageProvider from './../component/languageprovider/index';
import * as localeAction from './../component/languageprovider/actions';
import {DEFAULT_LOCALE} from './../component/languageprovider/constants'

import Menu from './component/Menu';
import {  push } from 'react-router-redux'
import {browserHistory, Redirect } from 'react-router'
import MenuBuilder from './mapper/MenuBuilder';
const { Header, Sider, Content } = Layout;

class LayoutFrame extends Component{

    state = {
        collapsed: false,
        logout : false,
        locale : {
            key : DEFAULT_LOCALE,
            description : 'English'
        }
    };
    
    toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    }

    handleLocale = () => {
        this.props.changeLocale(this.state.locale.key,
            () => {
                if(this.state.locale.key == DEFAULT_LOCALE){
                    this.setState({locale : {key:'id', description: 'Indonesia'}})
                }else{
                    this.setState({locale : {key:'en', description: 'English'}})
                }
            }
        );
    }

    getLocaleInverserDesc = () => {
        if(this.state.locale.key == DEFAULT_LOCALE)
            return 'Indonesia'
        else
            return 'English'
    }

    redirectLogin = () =>{
        this.setState({logout : true});
            console.log(this.state.logout);
    }

    handleLogout = () => {
        this.props.doLogout();
        push("/login");
    }

    componentDidMount(){
        const {isLogin} = this.props;
        /* if(!isLogin){
            browserHistory.push("/login");
            Modal.warning({
                title: "Session Required.",
                content: 'You need login to start new session.',
            });
        } */
    }

    render(){

        const {listMenu, childComponent, navigate} = this.props;
        return(
            <LanguageProvider locale={this.state.locale.key} key={this.state.locale.key}>
            <Layout style={{height: '100vh'}}>
                {/* {this.renderLogin()} */}
                <header
                    style={{background: '#54a1b5', width : '100%'}}>
                        <div className = "clearfix" style = {{height: '5%', lineHeight : '5%'}}>
                            <div className="float-left white" style = {{height: '5%', lineHeight : '5%', fontSize : '30px', paddingTop : '22px', paddingLeft : '15px'}}>
                                <a onClick={() => {
                                    navigate('/modul/dashboard')
                                }} style = {{color : '#ffffff'}}>
                                    <b>Pocket</b>Bank
                                </a>
                            </div>
                            <div className = "float-left" style = {{marginLeft : '2%'}}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </div>
                            <div className="float-right">
                                {/* <AtiSideMenu
                                    style = {{background : '#5faac1'}}
                                    mode="horizontal"
                                    theme = "light"
                                    dataSource = {menuHeader}
                                /> */}
                                <DrawerSetting />
                            </div>
                            <div className="float-right popOver" >
                                <PopoverSetting content = {<TabsNotification />} children = {<span className = "white"><Icon type="bell" /></span>} />
                            </div>
                            <div className="float-right" style = {{marginTop : '10px'}}>
                                <PopoverSetting content = {
                                            <span>
                                                <a href="#" onClick={this.handleLogout}>Logout</a>
                                            </span>
                                        } children = {<span style = {{color : 'white', cursor : 'pointer', padding : "15px", marginTop : '30px'}}><Icon type = "user" style = {{fontSize : 20}}/><span className = "white" style = {{fontSize : 15}}>Admin </span></span>}  />
                            </div>
                            <div className="float-right" style = {{marginTop : '10px'}}>
                                <PopoverSetting content = {
                                            <span>
                                                <a href="#" onClick={this.handleLocale}>{this.getLocaleInverserDesc()}</a>
                                            </span>
                                        } children = {<span style = {{color : 'white', cursor : 'pointer', padding : "15px", marginTop : '30px'}}>{this.state.locale.description}</span>}  />
                            </div>  
                        </div> 
                </header>
            <Layout>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                style={{height: 'auto', left: 0, minHeight : '100% !important', position : 'relative'}}>
                    <Menu dataSource={MenuBuilder.buildMenu(listMenu, navigate)}/>
                </Sider>
                <Layout>
                {/* <Header style={
                            { background: '#ddd', 
                              padding: 0,
                               }
                        }
                > */}
                {/* </Header> */}
                
                <Content style={{background: '#ffffff'}}>
                    {childComponent}
                </Content>
                </Layout>
            </Layout>
            </Layout>
            </LanguageProvider>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { menu, login,  locale} = state;
    return { ...menu, ...login, ...locale };
}

const mapActionToProp = () => {
    return {
        ...menuAction, ...loginAction, ...localeAction, ...navigationAction,
    };
}

export default connect(mapStateToProps, mapActionToProp())(LayoutFrame);