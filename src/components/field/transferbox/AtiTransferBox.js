import React from 'react'
import {Transfer} from 'antd'
import PropTypes from 'prop-types'
// import * as v from 'voca'

/**
 * @author hosea.simanjuntak
 * @description Double column transfer choice box.
 * @version 1.0
 */

class AtiTransferBox extends React.Component {
    state = {
      targetKeys: []
    };

    handleChange = (targetKeys, direction, moveKeys) => {
      const {events} = this.props
      this.setState({ targetKeys })

      if (events.onChange) { events.onChange(targetKeys, direction, moveKeys) }
    }

    componentDidMount() {
      const {targetKeys} = this.props
      this.setState({targetKeys: targetKeys})
    }

    render() {
      const {dataSource, titles, selectedKeys, events, render, className, footer, rowKey,
        operations, notFoundContent, listStyle, style, operationStyle, searchPlaceholder, showSearch
      } = this.props
      const showSearchRender = showSearch ? {showSearch} : null
      //   const changeRender = v.isEmpty(events.onChange) ? this.handleChange : events.onChange
      const rowKeyAttr = rowKey ? {rowKey} : {}
      const onSearchChangeAttr = events.onSearchChange ? {onSearchChange: events.onSearchChange} : {}
      return (
        <Transfer
          className={className}
          dataSource={dataSource}
          titles={titles}
          targetKeys={this.state.targetKeys}
          selectedKeys={selectedKeys}
          onChange={this.handleChange}
          onSelectChange={events.onSelectChange}
          {...onSearchChangeAttr}
          onScroll={events.onScroll}
          render={render}
          footer={footer}
          operations={operations}
          notFoundContent={notFoundContent}
          listStyle={listStyle}
          style={style}
          operationStyle={operationStyle}
          searchPlaceholder={searchPlaceholder}
          {...rowKeyAttr}
          {...showSearchRender}
        />
      )
    }
}

AtiTransferBox.defaultProps = {
  notFoundContent: 'The list is empty',
  titles: ['Source', 'Target'],
  showSearch: false,
  searchPlaceholder: 'Search here',
  events: {}

}

AtiTransferBox.propTypes = {
  /**
     * you should use `rowKey` to specify the key that will be used for uniquely identify each element.
     */
  rowKey: PropTypes.func.isRequired,
  /**
     * If included, a search box is shown on each column.
     */
  showSearch: PropTypes.bool,
  /**
     * A custom CSS class
     */
  className: PropTypes.string,
  /**
     * A custom CSS style used for rendering the transfer columns.
     */
  listStyle: PropTypes.object,
  /**
     * A custom CSS style used for rendering wrapper element.
     */
  style: PropTypes.object,
  /**
     * A custom CSS style used for rendering the operations column.
     */
  operationStyle: PropTypes.object,
  /**
     * Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in `targetKeys` prop
     */
  dataSource: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string
  })).isRequired,
  /**
     * A set of titles that are sorted from left to right.
     */
  titles: PropTypes.arrayOf(PropTypes.string),
  /**
     * A set of operations that are sorted from bottom to top.
     */
  operations: PropTypes.arrayOf(PropTypes.string),
  /**
     * A set of keys of elements that are listed on the right column.
     */
  targetKeys: PropTypes.arrayOf(PropTypes.string),
  /**
     * A set of keys of selected items
     */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
  /**
     * Text to display when a column is empty.
     */
  notFoundContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
     * A function used for rendering the footer.
     */
  footer: PropTypes.element,
  /**
     * The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with `value` and `label`, `label` is a React element and `value` is for title
     * Function(record)
     */
  render: PropTypes.func,
  /**
    * object (json) contain all event of Transferbox component
    * (onChange | onSelectChange | onScroll | onSearchChange)
    */
  events: PropTypes.shape({
    /**
         * A callback function that is executed when the transfer between columns is complete.
         * (targetKeys, direction, moveKeys): void
         */
    onChange: PropTypes.func,
    /**
         * A callback function which is executed when selected items are changed.
         * (sourceSelectedKeys, targetSelectedKeys): void
         */
    onSelectChange: PropTypes.func,
    /**
         * A callback function which is executed when search field are changed
         * (direction: 'left'\|'right', event: Event): void
         */
    onSearchChange: PropTypes.func,
    /**
         * A callback function which is executed when scroll options list
         * (direction, event): void
         */
    onScroll: PropTypes.func
  })
}

export default AtiTransferBox
