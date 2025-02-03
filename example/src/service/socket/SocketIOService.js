import React, {Component} from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext({socketUrl: ''});

class SocketIOProvider extends Component {
    state = {
        socketUrl: '',
        socket: null
    }

    componentWillMount(){
        const {socketUrl} = this.props
        const socket = io(socketUrl)
        this.setState({socketUrl: this.props.socketUrl, socket})
    }

    render() {
        const {socketUrl, socket} = this.state
        return (
            <SocketContext.Provider value={{socketUrl, socket}}>
                {this.props.children}
            </SocketContext.Provider>
        )
    }
}

const withSocketConnector = (WrappedComponent) => {
    const ResultComponent = (props) => {
        return (
            <SocketContext.Consumer>
                {(context) => {
                const newProps = {...props, socket: context.socket, socketUrl: context.socketUrl}
                return (<WrappedComponent {...newProps} />)
                }}
            </SocketContext.Consumer>
        )
    }

    return ResultComponent
}

export {
    SocketIOProvider,
    withSocketConnector
}