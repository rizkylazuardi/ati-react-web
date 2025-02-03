import React from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display content related to a single subject
 * @version 1.0
 */

class AtiCard extends React.Component {
  render() {
    const { isLoading, cardTitle, extraElement, extraStyle, content, cover, actions, hoverable, bordered } = this.props
    const hoverableAttr = hoverable ? {hoverable: 'true'} : {}
    const borderedAttr = bordered ? {bordered: 'true'} : {}
    return (
      <Card
        {...this.props}
        {...hoverableAttr}
        {...borderedAttr}
        loading={isLoading}
        title={cardTitle}
        extra={extraElement}
        style={extraStyle}
        cover={cover}
        actions={actions}>
        {content}
      </Card>
    )
  }
}

AtiCard.defaultProps = {
  isLoading: 'false'
}

AtiCard.propTypes = {
  /**
     * Shows a loading indicator while the contents of the card are being fetched
     */
  isLoading: PropTypes.bool,
  /**
     * Card title
     */
  cardTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
     * Content to render in the top-right corner of the card
     */
  extraElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
     * style object of container
     */
  extraStyle: PropTypes.style,
  /**
     * content of the card
     */
  content: PropTypes.PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
     * Card cover
     */
  cover: PropTypes.element,
  /**
     * The action list, shows at the bottom of the Card.
     */
  actions: PropTypes.arrayOf(PropTypes.element),
  /**
     * Lift up when hovering card
     */
  hoverable: PropTypes.bool,
  /**
     * Toggles rendering of the border around the card
     */
  bordered: PropTypes.bool
}

export default AtiCard
