import React from 'react'
import { Tabs } from 'antd'
import PropTypes from 'prop-types'
const TabPane = Tabs.TabPane
const AtiTabs = ({forceRender, key, title}) => {
  return (
    <TabPane tab={title} key={key} forceRender={forceRender}>Pretettt</TabPane>
  )
}

AtiTabs.defaultProps = {
  forceRender: false,
  title: '',
  key: ''
}

AtiTabs.propTypes = {
  /**
     * Show text in TabPane's head
     */
  title: PropTypes.string.isRequired,
  /**
     * AtiTab Key
     */
  key: PropTypes.string.isRequired,
  /**
     * Forced render of content in tabs, not lazy render after clicking on tabs
     */
  forceRender: PropTypes.bool
}

export default AtiTabs
