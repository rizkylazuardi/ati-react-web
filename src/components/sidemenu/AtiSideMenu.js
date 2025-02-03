import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'

/**
 * @author hosea.simanjuntak
 * @description component for side menu in web
 * @version 1.0
 */

class AtiSideMenu extends React.Component {
    handleClick = (e) => {
      //console.log('click ', e)
    }

    renderItem = () => {
      const { dataSource } = this.props
      return dataSource.map((item, i) => {
        if (item.type === 'item') {
          return (this.renderMenu(item))
        } else if (item.type === 'subitem') {
          return (this.renderSubMenu(item))
        } else if (item.type === 'itemgroup') {
          return (this.renderMenuGroup(item))
        } else {
          return (
            <Menu.Divider key={item.key} />
          )
        }
      })
    }

    renderMenu = (item) => {
      return (
        <Menu.Item
          key={item.key}
          disabled={item.disabled !== undefined && item.disabled != null ? item.disabled : false}
        >
          {item.childComponent}
        </Menu.Item>
      )
    }

    renderSubMenu = (item) => {
      const itemsRender = item.childItems.map((menu, i) => {
        if (menu.type === 'item') {
          return (
            this.renderMenu(menu)
          )
        } else if (menu.type === 'subitem') {
          return (
            this.renderSubMenu(menu)
          )
        } else if (menu.type === 'itemgroup') {
          this.renderMenuGroup(menu)
        } else {
          return (
            <Menu.Divider key={menu.key} />
          )
        }
      })
      return (
        <Menu.SubMenu key={item.key} title={item.childComponent}>
          {itemsRender}
        </Menu.SubMenu>
      )
    }

    renderMenuGroup = (item) => {
      const itemsRender = item.childItems.map((menu, i) => {
        if (menu.type === 'item') {
          return (
            this.renderMenu(menu)
          )
        }
      })
      return (
        <Menu.ItemGroup key={item.key} title={item.childComponent}>
          {itemsRender}
        </Menu.ItemGroup >
      )
    }

    render() {
      const {events, style, defaultSelectedKeys, defaultOpenKeys, mode, theme,
        subMenuCloseDelay, subMenuOpenDelay, selectable, openKeys, selectedKeys, inlineCollapsed } = this.props
      const functionClick = events.onClick !== undefined && events.onClick != null ? events.onClick : this.handleClick
      const selectedKeysAttr = selectedKeys !== undefined && selectedKeys != null && selectedKeys.length !== 0 ? {selectedKeys} : {}
      const openKeysAttr = openKeys !== undefined && openKeys != null && openKeys.length !== 0 ? {openKeys} : {}
      const inlineCollapsedAttr = inlineCollapsed ? { inlineCollapsed } : {};
      return (
        <Menu
          {...this.props}
          onClick={functionClick}
          onDeselect={events.onDeselect}
          onOpenChange={events.onOpenChange}
          subMenuCloseDelay={subMenuCloseDelay}
          subMenuOpenDelay={subMenuOpenDelay}
          style={style}
          selectable={selectable}
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          mode={mode}
          theme={theme}
          {...selectedKeysAttr}
          {...openKeysAttr}
          {...inlineCollapsedAttr}
        >
          {this.renderItem()}
        </Menu>
      )
    }
}

AtiSideMenu.defaultProps = {
  // style : { width: 256},
  mode: 'inline',
  theme: 'dark',
  subMenuCloseDelay: 0.1,
  subMenuOpenDelay: 0,
  selectable: true,
  events: {
    onClick: null,
    onDeselect: null,
    onOpenChange: null
  }
}

AtiSideMenu.propTypes = {
  /**
  * Menu Items for component SideMenu
  */
  dataSource: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['subitem', 'item', 'itemgroup', 'divider']).isRequired,
    key: PropTypes.string.isRequired,
    childComponent: PropTypes.element,
    disabled: PropTypes.bool,
    childItems: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['subitem', 'item', 'itemgroup', 'divider']).isRequired,
      key: PropTypes.string.isRequired,
      childComponent: PropTypes.element.isRequired,
      disabled: PropTypes.bool
    }))
  })),
  /**
	 * style of the root node
	 */
  style: PropTypes.object,
  /**
	 * array with the keys of default selected menu items
	 */
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
	 * array with the keys of default opened sub menus
	 */
  defaultOpenKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
	 * type of the menu; vertical, horizontal, and inline modes are supported
	 */
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  /**
	 * color theme of the menu
	 */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
	 * delay time to hide submenu when mouse leave, unit: second
	 */
  subMenuCloseDelay: PropTypes.number,
  /**
	 * delay time to show submenu when mouse enter, unit: second
	 */
  subMenuOpenDelay: PropTypes.number,
  /**
	 * allow selecting menu items
	 */
  selectable: PropTypes.bool,
  /**
	 * array with the keys of currently opened sub menus
	 */
  openKeys: PropTypes.arrayOf(PropTypes.string),
  /**
	 * array with the keys of currently selected menu items
	 */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
        * object (json) contain all event of Tabs component
        * (onClick | onDeselect | onOpenChange)
        */
  events: PropTypes.shape({
    /**
         * callback executed when a menu item is clicked function({ item, key, keyPath })
         */
    onClick: PropTypes.func,
    /**
         * callback executed when a menu item is deselected, only supported for multiple mode function({ item, key, selectedKeys })
         */
    onDeselect: PropTypes.func,
    /**
         * called when open/close sub menu
         */
    onOpenChange: PropTypes.func
  })
}

export default AtiSideMenu
