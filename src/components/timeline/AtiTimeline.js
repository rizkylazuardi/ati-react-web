import React from 'react'
import { Timeline, Icon } from 'antd'
import * as StringUtils from 'voca'
import PropTypes from 'prop-types'

class AtiTimeline extends React.Component {
    renderItem = () => {
      const { dataSource } = this.props

      // sort by key
      dataSource.sort(function (item1, item2) {
        return item1.key - item2.key
      })

      return dataSource.map((item, i) => {
        return (
          <Timeline.Item
            key={item.key}
            color={StringUtils.isEmpty(item.color) ? 'blue' : item.color}
            dot={item.dot}
          >
            {item.text}
          </Timeline.Item>

        )
      })
    }

    render() {
      const {className, style, reverse, pendingDot, pending} = this.props
      return (
        <Timeline className={className}
          style={style}
          reverse={reverse}
          pendingDot={pendingDot}
          pending={pending}>
          {this.renderItem()}
        </Timeline >
      )
    }
}

AtiTimeline.defaultProps = {
  pending: false,
  pendingDot: <Icon type='loading' />,
  reverse: false
}

AtiTimeline.propTypes = {
  /**
     * data source timeline
     */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      color: PropTypes.string,
      dot: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
    })).isRequired,
  /**
     * Set the last ghost node's existence or its content
     */
  pending: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.bool]),
  /**
     * Set the dot of the last ghost node when pending is true
     */
  pendingDot: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
     * reverse nodes or not
     */
  reverse: PropTypes.bool,
  /**
     * custom class for timeline
     */
  className: PropTypes.string,
  style: PropTypes.object
}

export default AtiTimeline
