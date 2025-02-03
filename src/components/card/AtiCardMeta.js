import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
const { Meta } = Card

/**
 * @author hosea.simanjuntak
 * @description this component only used to display content in AtiCard
 * @version 1.0
 */

const AtiCardMeta = ({className, metaTitle, metaDescription, containerStyle, avatar}) => {
  return (
    <Meta avatar={avatar} className={className} title={metaTitle} description={metaDescription} style={containerStyle} />
  )
}

AtiCardMeta.propTypes = {
  /**
     * title content
     */
  metaTitle: PropTypes.string.isRequired,
  /**
     * description content
     */
  metaDescription: PropTypes.string.isRequired,
  /**
     * style object of container
     */
  containerStyle: PropTypes.style,
  /**
     * className of container
     */
  className: PropTypes.string,
  /**
     * avatar or icon
     */
  avatar: PropTypes.element
}

export default AtiCardMeta
