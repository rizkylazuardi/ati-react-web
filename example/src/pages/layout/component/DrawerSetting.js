import React from 'react';
import {AtiDrawer, AtiTextbox, AtiButton} from 'ati-react-web';
import {Icon} from 'antd';
import io from 'socket.io-client'
import { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED, 
    LOGOUT, COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT,
    TYPING  } from './../../../server/SocketActionType'
import './drawwer.css'
import ChatRoom from './ChatRoom';
import LoginChat from './LoginChat';
import { withSocketConnector } from 'anabatic-socket-engine';

class DrawerComponent extends React.Component{
    state = {
        visible: false,
        user:null
    }

    componentWillMount() {
        /* this.props.socket.on('connect', ()=>{
			console.log("Connected");
		}) */
        //this.initSocket()
	}

    /*
	* 	Sets the user property in state 
	*	@param user {id:number, name:string}
	*/	
	setUser = (user)=>{
		const { socket } = this.props
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
    }
    
    /*
	*	Sets the user property in state to null.
	*/
	logout = ()=>{
		const { socket } = this.props
		socket.emit(LOGOUT)
		this.setState({user:null})

	}

    render(){

        const showDrawer = () => {
            this.setState({
                visible: true,
            });
        };
        
        const onClose = () => {
            this.setState({
                visible: false,
            });
        };

        const style = {
            // height: 'calc(100% - 55px)',
            fontSize: 25,
            color: 'white',
            background : '#54a1b5'
            // border: '1px solid #000000',
        }
        
        const {user} = this.state
        return (
            <div>
                <button className = "btn" style = {style} onClick={showDrawer}>
                    <Icon type = "setting"></Icon>
                </button>

                <AtiDrawer
                    title = "Send Message"
                    placement = "right"
                    closable = {true}
                    mask = {true}
                    maskClosable = {true}
                    visible = {this.state.visible}
                    // width = {number("width",500)}
                    // zIndex = {number("zIndex",1000)}
                    style = {
                        {
                            padding: '5px'
                        }
                    }
                    // visible = {store.state.visible}
                    wrapClassName="wrap-chat"
                    events={
                        {   
                            onClose : onClose
                        }
                    }
                >
                    {!user ?
                        <LoginChat
                            setUser={this.setUser}
                        />
                        :
                        <ChatRoom
                            user={user}
                            logout={this.logout}
                        />
                    }
                    
                   
                </AtiDrawer>
            </div>
        )
    }
}

export default withSocketConnector(DrawerComponent);