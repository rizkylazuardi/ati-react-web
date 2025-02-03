import React, {Component} from 'react'
import {AtiDrawer, AtiTextbox, AtiButton} from 'ati-react-web';
import {Col,Row, Divider,Icon} from 'antd';
import { COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT } from './../../../server/SocketActionType'
import adminImg from './../../../assets/images/admin.jpg'
import userImg from './../../../assets/images/users.jpg'
import { withSocketConnector } from 'anabatic-socket-engine';

class ChatRoom extends Component {
    state = {
        message: '',
        chats:[],
	  	activeChat:null
    }

    handleValueChange = (e) =>{
        this.setState({message: e.target.value});
    }

    handleSubmit = (e)=>{
		e.preventDefault()
		this.sendMessage(this.state.activeChat.id, this.state.message)
		this.setState({message:""})
	}

	/*
	*	Reset the chat back to only the chat passed in.
	* 	@param chat {Chat}
	*/
	resetChat = (chat)=>{
        console.log(chat)
		return this.addChat(chat, true)
    }
    
    /*
	* 	Returns a function that will 
	*	adds message to chat with the chatId passed in. 
	*
	* 	@param chatId {number}
	*/
	addMessageToChat = (chatId)=>{
		return message => {
			const { chats } = this.state
			let newChats = chats.map((chat)=>{
				if(chat.id === chatId)
					chat.messages.push(message)
				return chat
			})

			this.setState({chats:newChats})
		}
	}

    /*
	*	Adds chat to the chat container, if reset is true removes all chats
	*	and sets that chat to the main chat.
	*	Sets the message and typing socket events for the chat.
	*	
	*	@param chat {Chat} the chat to be added.
	*	@param reset {boolean} if true will set the chat as the only chat.
	*/
	addChat = (chat, reset)=>{
		const { socket } = this.props
		const { chats } = this.state

		const newChats = reset ? [chat] : [...chats, chat]
		this.setState({chats:newChats, activeChat:reset ? chat : this.state.activeChat})

		const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`
		//const typingEvent = `${TYPING}-${chat.id}`

		//socket.on(typingEvent, this.updateTypingInChat(chat.id))
		socket.on(messageEvent, this.addMessageToChat(chat.id))
    }
    
    /*
	*	Adds a message to the specified chat
	*	@param chatId {number}  The id of the chat to be added to.
	*	@param message {string} The message to be added to the chat.
	*/
	sendMessage = (chatId, message)=>{
		const { socket } = this.props
		socket.emit(MESSAGE_SENT, {chatId, message} )
    }
    
    setActiveChat = (activeChat)=>{
		this.setState({activeChat})
	}
    
    componentWillMount() {
		const { socket } = this.props
		socket.emit(COMMUNITY_CHAT, this.resetChat)
	}

    render() {
        const { activeChat } = this.state
        const { user } = this.props
        return (
            <React.Fragment>
                    {
                        activeChat ?
                        activeChat.messages.map((mes)=>{
                                const rightClassAttr = mes.sender === user.name? 'right'  : '';
                                const timeClassAttr = mes.sender === user.name? 'time-right'  : 'time-left';
                                return (
                                    <div className={`chat-container ${mes.sender === user.name && 'darker'}`}>
                                        <img
                                            className={rightClassAttr}
                                            src={mes.sender === user.name? adminImg: userImg}
                                            alt="Avatar" />
                                        <p className={rightClassAttr}>
                                            {mes.message}<br/>
                                            <span class={timeClassAttr}>{mes.sender === user.name? mes.time : mes.sender + " at " + mes.time}</span>
                                        </p>
                                        
                                    </div>
                                )
                        })
                        :
                        <span>initializing chat..</span>
                    }
                    <div class="chat-footer">
                        <form 
                        onSubmit={ this.handleSubmit }
                        >
                            <Row>
                                <Col span={18}>
                                <AtiTextbox id={'name'} name={'name'}
                                            type="text" 
                                            placeholder={"Type message ..."}
                                            size={'md'}
                                            events={{onChange:this.handleValueChange}}
                                            label={""}
                                            value={this.state.message}
                                            className="float-left"
                                        /> 
                                </Col>
                                <Col span={6}>
                                    <AtiButton type="submit" text="Send" size="sm" className="right"/>
                                </Col>
                            </Row>
                        </form>
                    </div>
            </React.Fragment>
        )
    }
}

export default withSocketConnector(ChatRoom)
