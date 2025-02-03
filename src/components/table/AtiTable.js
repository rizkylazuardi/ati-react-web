import React from 'react'
import {Table} from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import './form-table.css'

class AtiTable extends React.Component {
  render() {
    return (
      <Table
        {...this.props}
        onChange={this.props.events.onChange}
        onExpandedRowsChange={this.props.events.onExpandedRowsChange}
        onRow={this.props.events.onRow}
        onHeaderRow={this.props.events.onHeaderRow}
      />
    )
  }
}

AtiTable.defaultProps = {
  rowKey: 'key',
  rowSelection: null,
  size: 'small',
  loading: false,
  bordered: true,
  expandedRowRender: null,
  footer: false,
  showHeader: true,
  expandedRowKeys: [],
  pagination: { position: 'bottom' },
  events: {
    onChange: null,
    onExpandedRowsChange: null,
    onRow: null,
    onHeaderRow: null,
  },
}

AtiTable.propTypes = {
  /**
     * Shows a loading indicator while the contents of the table are being fetched
     */
  loading: PropTypes.bool,
  /**
     * Data record array to be displayed
     */
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
     * Columns of table
     */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /**
         * className of this column
         */
    className: PropTypes.string,
    /**
         * Span of this column's title
         */
    colSpan: PropTypes.number,
    /**
         * Default order of sorted values: 'ascend' 'descend' null
         */
    defaultSortOrder: PropTypes.oneOf(['descend', 'ascend', null]),
    /**
         * Order of sorted values: 'ascend' 'descend' false
         */
    sortOrder: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['descend', 'ascend'])]),
    /**
         * Set column to be fixed: 'left' 'right'
         */
    fixed: PropTypes.oneOf(['left', 'right', false]).isRequired,
    /**
         * Renderer of the table cell. The return value should be a ReactNode
         */
    render: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
         * Display field of the data record, could be set like a.b.c
         */
    dataIndex: PropTypes.string.isRequired,
    /**
         * Unique key of this column
         */
    key: PropTypes.string,
    /**
         * Sort function for local sort, see Array.sort's compareFunction. If you need sort buttons only, set to true
         */
    sorter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
    /**
         * specify how content is aligned 'left' | 'right' | 'center'
         */
    align: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
    /**
         * specify width of the collumn
         */
    width: PropTypes.number,
    /**
     * Set props on per cell
     */
    onCell: PropTypes.func,
  })).isRequired,
  /**
     * Size of table default | middle | small
     */
  size: PropTypes.oneOf(['default', 'middle', 'small']),
  /**
     * Whether to show all table borders
     */
  bordered: PropTypes.bool,
  /**
     * Override default table elements
     */
  components: PropTypes.object,
  /**
     * Current expanded row keys
     */
  expandedRowKeys: PropTypes.arrayOf(PropTypes.string),
  /**
     * Expanded container render for each row 'Function(record):ReactNode'
     */
  expandedRowRender: PropTypes.func,
  /**
     * Whether to expand row by clicking anywhere in the whole row
     */
  expandRowByClick: PropTypes.bool,
  /**
     * Pagination config or Pagination, hide it by setting it to 'false'
     */
  pagination: PropTypes.object,
  /**
     * Row's className 'Function(record, index):string'
     */
  rowClassName: PropTypes.func,
  /**
     * Row's unique key, could be a string or function that returns a string 'string|Function(record):string'
     */
  rowKey: PropTypes.string,
  /**
     * Row selection
     */
  rowSelection: PropTypes.object,
  /**
     * Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area. It is recommended to set a number for x, if you want to set it to true, you need to add style .ant-table td { white-space: nowrap; }.
     */
  scroll: PropTypes.object,
  /**
     * Whether to show table header
     */
  showHeader: PropTypes.bool,
  events: PropTypes.shape({
    /**
     * Callback executed when pagination, filters or sorter is changed 'Function(pagination, filters, sorter)'
     */
    onChange: PropTypes.func,
    /**
       * Callback executed when the row expand icon is clicked 'Function(expanded, record)'
       */
    onExpand: PropTypes.func,
    /**
       * Callback executed when the expanded rows change 'Function(expandedRows)'
       */
    onExpandedRowsChange: PropTypes.func,
    /**
       * Set props on per row 'Function(record, index)'
       */
    onRow: PropTypes.func,
    /**
       * Set props on per header row 'Function(collumn, index)'
       */
    onHeaderRow: PropTypes.func,
  }),  
  /**
     * Table title renderer
     */
  title: PropTypes.func,
  /**
     * Table footer renderer
     */
  footer: PropTypes.func,
  /**
   * i18n text including filter, sort, empty text, etc
   */
  locale: PropTypes.object,
}

export default AtiTable
