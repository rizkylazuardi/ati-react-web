import React from 'react';
import { FormattedMessage,FormattedRelative } from 'react-intl';

class Greeting extends React.Component {

    render(){
        return(
            <div style = {{width : '100%', height : '70px', background: '#e6e6e6',borderBottomStyle : 'groove' }}>
                <p style = {{paddingLeft : '2%', paddingTop : '1%'}}>
                    <b><FormattedMessage
                        id={'greeting.message'}
                        defaultMessage={'Welcome Back, Orang Ganteng'}
                        />
                    </b> <br/>
                    <FormattedMessage
                        id={'login.time.message'}
                        defaultMessage={'You have login from'}
                        />
                    <FormattedRelative value={Date.now()}/>
                </p>
            </div>
        )
    }
}

export default Greeting;