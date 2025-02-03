import React from 'react'
import {Radio} from 'antd'
// import"./example-styles.css";

const AtiRadioButtonItem = (props) => {
  return (
    <React.Fragment>
      <Radio.Button {...props}>
        {props.children}
      </Radio.Button>
    </React.Fragment>
  )
}

export default AtiRadioButtonItem
