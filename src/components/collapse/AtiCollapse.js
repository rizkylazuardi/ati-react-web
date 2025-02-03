import React, {Component} from 'react'
import { Collapse } from 'antd'
import PropTypes from 'prop-types'
const Panel = Collapse.Panel

class AtiCollapse extends Component {
    static defaultProps = {
      events: {},
      bordered: true
    }

    static propTypes = {
      /**
         * Key of the initial active panel
         */
      defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
      /**
         * onChange : Callback function executed when active panel is changed
         */
      events: PropTypes.shape({
        onChange: PropTypes.func
      }),
      /***
         * Toggles rendering of the border around the collapse block
         */
      bordered: PropTypes.bool,
      /**
         * panel data contain array of object that will be iterate as single Panel.
         */
      dataSource: PropTypes.arrayOf(
        PropTypes.shape({
          /**
                 * panel header
                 */
          header: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
          ]),
          /**
                 * panel key
                 */
          key: PropTypes.string,
          /**
                 * panel custom style
                 */
          style: PropTypes.object,
          /**
                 * flag that indicate the panel disabled or not
                 */
          disabled: PropTypes.bool,
          /**
                 * flag that indicate the arrow icon showed or not
                 */
          showArrow: PropTypes.bool,
          /**
                 * content of panel
                 */
          text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
          ])
        })
      )
    }

    renderPanelItems = () => {
      const {dataSource} = this.props
      return dataSource.map((item, i) => {
        const disabledAttr = item.disabled ? {disabled: true} : {}
        const showArrowAttr = item.showArrow ? {showArrow: true} : {}
        return (
          <Panel header={item.header} key={item.key} style={item.style}
            {...showArrowAttr} {...disabledAttr}>
            {item.text}
          </Panel>
        )
      }
      )
    }

    render() {
      const {defaultActiveKey, events, bordered} = this.props
      const borderedAttr = bordered ? {bordered: true} : {bordered: false}
      return (
        <Collapse
          defaultActiveKey={defaultActiveKey}
          onChange={events.onChange}
          {...borderedAttr}
        >
          {this.renderPanelItems()}
        </Collapse>
      )
    }
}

export default AtiCollapse
