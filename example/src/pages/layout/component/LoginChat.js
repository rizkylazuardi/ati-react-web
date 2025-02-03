import React, { Component } from 'react';
import {AtiTextbox, AtiButton} from 'ati-react-web';
import { VERIFY_USER } from  './../../../server/SocketActionType'
import {message} from 'antd';
import { withSocketConnector } from 'anabatic-socket-engine';

class LoginChat extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:""
	  };
	}

	setUser = ({user, isUser})=>{

		if(isUser){
			message.error("username already taken !!")
		}else{
			this.props.setUser(user)
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		const { socket } = this.props
		const { nickname } = this.state
		socket.emit(VERIFY_USER, nickname, this.setUser)
	}

	handleChange = (e)=>{
		this.setState({nickname:e.target.value})
	}

	render() {	
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form" >
						<AtiTextbox id={'name'} name={'name'}
                                        type="text" 
                                        placeholder={"Username"}
                                        size={'md'}
                                        events={{onChange:this.handleChange}}
                                        label={""}
                                        value={this.state.nickname}
                                        className="float-left"
                                    />
						<AtiButton type="submit" text="Login" size="sm" className="right"/>
				</form>
			</div>
		);
	}
}

export default withSocketConnector(LoginChat)