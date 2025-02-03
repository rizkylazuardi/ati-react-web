import React, {Component} from 'react'
import { Modal } from 'antd'
import {AtiSpinner} from 'ati-react-web'
import PropTypes from 'prop-types'

class Loading extends Component{
    static propTypes = {
        visible: PropTypes.bool
    }

    static defaultProps = {
        visible: false
    }
    
    render(){
        const {visible} = this.props;
        return(
            <Modal
            width={200}
            style={
                { 
                    display: 'flex',
                    top: '42%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
            centered={true}
            maskClosable={false}
            closable={false}
            footer={null}
            visible={visible}
          >
            <AtiSpinner
              size="default"
              tip="Loading..."
              delay={50}
              spinning={true}
            />
          </Modal>
        );
    }
}

export default Loading;