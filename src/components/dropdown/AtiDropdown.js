import React from 'react'
import { Dropdown, Menu } from 'antd'
import PropTypes from 'prop-types'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display A simple dropdown menu to provide extra information or operations.
 * @version 1.0
 */

class AtiDropdown extends React.Component {

    handleMenuClick = (e) => {
        //console.log(e);
    }
    handleVisibleChange = (flag) => {
        //console.log(flag);
    }

    renderMenu = () => {
        const items = this.renderItem();
        const functionClick = this.props.events.onMenuClick !== undefined && this.props.events.onMenuClick != null ? this.props.events.onMenuClick : this.handleMenuClick;
        return (<Menu onClick={functionClick}>{items}</Menu>);
    }

    renderItem = () => {
      const { dataSource } = this.props
      return dataSource.map((item, i) => {
        if (item.type === 'item') {
          return (<Menu.Item
                    key={item.key}
                    disabled={item.disabled !== undefined && item.disabled != null ? item.disabled : false}>
                    {item.childern}
                </Menu.Item>);
        }

        return (
            <Menu.Divider key={item.key} />
        );
      })
    }


    render() {
        const { childern, placement, trigger, events, disabled } = this.props;
        const functionVisibleChange = events.onVisibleChange !== undefined && events.onVisibleChange != null ? events.onVisibleChange : this.handleVisibleChange;
        return (
            <Dropdown
                overlay={this.renderMenu()}
                disabled={disabled}
                placement={placement}
                trigger={trigger}
                onVisibleChange={functionVisibleChange}
                getPopupContainer={events.getPopupContainer}>
                {childern}
            </Dropdown>
        )
    }
}

AtiDropdown.defaultProps = {
    placement: 'bottom',
    trigger: 'hover',
    disabled: false,
    events: {
        onVisibleChange: null,
        getPopupContainer: null,
        onMenuClick: null
    }
}

AtiDropdown.propTypes = {
    /**
     * Menu Items for component SideMenu
     */
    dataSource: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['item', 'divider']).isRequired,
        key: PropTypes.string.isRequired,
        childern: PropTypes.element,
        disabled: PropTypes.bool,
    })).isRequired,
    /**
     * Place where the tooltip will be put
     */
    childern: PropTypes.element.isRequired,
    /**
     * Place where the tooltip will be put
     */
    disabled: PropTypes.bool,
    /**
     * placement of pop menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'bottomCenter', 'topLeft', 'topCenter', 'topRight']),
    /**
     * Tooltip trigger mode, can be `hover`,`focus`,`click`,`contextMenu`
     */
    trigger: PropTypes.oneOf(['hover', 'click', 'contextMenu']),
    /**
    * object (json) contain all event of Dropdown component
    * (onVisibleChange | getPopupContainer)
    */
    events: PropTypes.shape({
        /**
         * a callback function takes an argument: visible, is executed when the visible state is changed. Function(visible)
         */
        onVisibleChange: PropTypes.func,
        /**
         * to set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. Function(triggerNode). () => document.body
         */
        getPopupContainer: PropTypes.func,
        /**
         * callback executed when a menu item is clicked function({ item, key, keyPath })
         */
        onMenuClick: PropTypes.func,
    }),
}

export default AtiDropdown;
