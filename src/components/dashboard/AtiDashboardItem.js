import React from 'react'
// import"./styles.css";
// import"./example-styles.css";

const AtiDashboardItem = (props) => {
  return (
    <React.Fragment>
      <div key={props.key} {...props}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default AtiDashboardItem
