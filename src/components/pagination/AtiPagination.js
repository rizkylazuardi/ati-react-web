import React, {Component} from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'

class AtiPagination extends Component {
    static defaultProps = {
      events: {},
      showSizeChanger: false,
      showQuickJumper: true,
      simple: false,
      total: 0
    }

    static propTypes = {
      /**
         * current page number
         */
      current: PropTypes.number,
      /**
         * total number of data items
         */
      total: PropTypes.number,
      /**
         * determine whether pageSize can be changed
         */
      showSizeChanger: PropTypes.bool,
      /**
         * determine whether you can jump to pages directly
         */
      showQuickJumper: PropTypes.bool,
      /**
         * specify the size of Pagination, can be set to small
         */
      size: PropTypes.string,
      /**
         * whether to use simple mode
         */
      simple: PropTypes.bool,
      /**
         * onChange : Callback function executed when current page is changed
         * onShowSizeChange : a callback function, executed when pageSize is changed
         * showTotal : to display the total number and range => function (total, range){}
         * itemRender: a callback function to customize item innerHTML
         */
      events: PropTypes.shape({
        onShowSizeChange: PropTypes.func,
        /**
             * example : function showTotal(total) {
             *               return `Total ${total} items`;
             *           }
             */
        showTotal: PropTypes.func,
        onChange: PropTypes.func,
        /**
             * function itemRender(current, type, originalElement) {
             *   if (type === 'prev') {
             *      return <a>Previous</a>;
             *   } if (type === 'next') {
             *      return <a>Next</a>;
             *   }
             *   return originalElement;
             * }
             */
        itemRender: PropTypes.func
      })
    }

    render() {
      const {current, total, showSizeChanger, showQuickJumper, size, simple, events} = this.props
      const showSizeChangerAttr = showSizeChanger ? {showSizeChanger: true} : {}
      const showQuickJumperAttr = showQuickJumper ? {showQuickJumper: true} : {}
      const simpleAttr = simple ? {simple: true} : {}
      return (
        <Pagination
          defaultCurrent={current}
          total={total}
          onShowSizeChange={events.onShowSizeChange}
          onChange={events.onChange}
          showTotal={events.showTotal}
          itemRender={events.itemRender}
          size={size}
          {...showSizeChangerAttr}
          {...showQuickJumperAttr}
          {...simpleAttr}
        />
      )
    }
}

export default AtiPagination
