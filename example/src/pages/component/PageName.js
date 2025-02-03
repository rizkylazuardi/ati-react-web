import React from 'react';
import './../style.css';

class PageName extends React.Component {

    render(){
        return(
            <div style = {{borderBottomStyle : 'groove' }}>
                <h3 className='page_name'>{this.props.title}</h3>
            </div>
        )
    }
}

export default PageName;