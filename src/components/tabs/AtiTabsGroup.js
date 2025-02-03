import React, {Component} from 'react'
import { Tabs, Icon } from 'antd'
import * as StringUtils from 'voca'
import PropTypes from 'prop-types'
import './style.css'
const TabPane = Tabs.TabPane

class AtiTabsGroup extends Component {
    static defaultProps = {
      animated: true,
      hideAdd: false,
      size: 'default',
      tabPosition: 'top',
      type: 'line',
      events: {}
    }

    static propTypes = {
      /**
         * Current TabPane's key
         */
      activeKey: PropTypes.string,
      /**
         * Whether to change tabs with animation. Only works while tabPosition="top"\|"bottom"
         */
      animated: PropTypes.bool,
      /**
         * Initial active TabPane's key, if activeKey is not set.
         */
      defaultActiveKey: PropTypes.string,
      /**
         * Hide plus icon or not. Only works while type="editable-card"
         */
      hideAdd: PropTypes.bool,

      /**
         * preset tab bar size (large | default | small)
         */
      size: PropTypes.string,

      /**
         * Tab bar style object
         */
      tabBarStyle: PropTypes.object,

      /**
         * Position of tabs (top | right | bottom | left)
         */
      tabPosition: PropTypes.string,

      /**
         * Basic style of tabs (line | card | editable-card)
         */
      type: PropTypes.string,

      /**
         * The gap between tabs
         */
      tabBarGutter: PropTypes.number,

      /**
        * object (json) contain all event of Tabs component
        * (onChange | onEdit | onNextClick | onPrevClick | onTabClick)
        */
      events: PropTypes.shape({
        /**
             * Callback executed when active tab is changed
             * Function(activeKey)
             */
        onChange: PropTypes.func,
        /**
             * Callback executed when tab is added or removed. Only works while type="editable-card"
             * function (targetKey, action): void
             */
        onEdit: PropTypes.func,
        /**
             * Callback executed when next button is clicked
             */
        onNextClick: PropTypes.func,
        /**
             * Callback executed when prev button is clicked
             */
        onPrevClick: PropTypes.func,
        /**
             * Callback executed when tab is clicked
             */
        onTabClick: PropTypes.func
      }),
      /**
         * data source contain array of object with key (title, key, forceRender, content)
         */
      dataSource: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          key: PropTypes.string,
          forceRender: PropTypes.bool,
          tabContent: PropTypes.element
        })
      ),
      /**
         * Custom css style for Tabs
         */
      customStyle: PropTypes.object
    }

    renderTabsItem = () => {
      const { dataSource } = this.props

      return dataSource.map((item) => {
        const tabAttr = StringUtils.isEmpty(item.icon)
          ? <span>{item.title}</span>
          : <span><Icon type={item.icon} />{item.title}</span>
        return (
          <TabPane
            key={item.key}
            tab={tabAttr}
            closable={!!item.closable}
          >
            {item.tabContent}
          </TabPane>

        )
      })
    }

    render () {
      const {defaultActiveKey, animated, hideAdd, size,
        tabBarExtraContent, tabBarStyle, tabPosition, type,
        tabBarGutter, events, customStyle} = this.props
      const hideAddAttr = hideAdd ? {hideAdd} : {}
      return (
        <div className='card-container'>
          <Tabs defaultActiveKey={defaultActiveKey}
            animated={animated} {...hideAddAttr} size={size} tabBarStyle={tabBarStyle}
            tabBarExtraContent={tabBarExtraContent} tabPosition={tabPosition} type={type}
            tabBarGutter={tabBarGutter} onChange={events.onChange} onEdit={events.onEdit}
            onNextClick={events.onNextClick} onPrevClick={events.onPrevClick}
            onTabClick={events.onTabClick} style={customStyle}
          >
            {this.renderTabsItem()}
          </Tabs>
        </div>
      )
    }
}

export default AtiTabsGroup
