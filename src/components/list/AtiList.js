import React, {Component} from 'react'
import { List, Spin } from 'antd'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import AtiTextbox from './../field/textbox/default/AtiTextbox'
import reactElementToJSXString from 'react-element-to-jsx-string'

class AtiList extends Component {
  // state = {
  //     dataSource:[]
  // }

    defaultInfiniteConfig = {initialLoad: false,
      pageStart: 0,
      loadMore: null,
      hasMore: true,
      useWindow: false}

    static defaultProps = {
      events: {},
      type: 'default',
      header: '',
      footer: '',
      itemLayout: 'horizontal',
      bordered: true,
      size: 'small',
      loading: false,
      loadMore: null,
      infiniteScroll: false,
      grid: null
    }

    static propTypes = {
      /**
         * renderItem : Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. Warning：this function is not supported in IE9。
         */
      events: PropTypes.shape({
        renderItem: PropTypes.func
      }),
      /**
         * type of list (default or custom)
         */
      type: PropTypes.oneOf(['default', 'custom']),
      /**
         * data source object of list
         */
      dataSource: PropTypes.arrayOf(PropTypes.object),
      /**
         * List header renderer
         */
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      /**
         * List footer renderer
         */
      footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      /**
         * The layout of list, default is horizontal, If a vertical list is desired, set the itemLayout property to vertical
         */
      itemLayout: PropTypes.oneOf(['vertical', 'horizontal']),
      /**
         * Toggles rendering of the border around the list boolean
         */
      bordered: PropTypes.bool,
      /**
         * List size
         */
      size: PropTypes.oneOf(['default', 'small', 'large']),
      /**
         * Shows a loading indicator while the contents of the list are being fetched
         */
      loading: PropTypes.bool,
      /**
         * Shows a load more content
         */
      loadMore: PropTypes.element,
      /**
         * flag to indicate the infinite scroll feature is enabled or not
         */
      infiniteScroll: PropTypes.bool,
      /**
         * initialLoad : Whether the component should load the first set of items.
         * pageStart : The number of the first page to load, With the default of 0, the first page is 1.
         * loadMore : A callback when more items are requested by the user. Receives a single parameter specifying the page to load e.g. function handleLoadMore(page) {  } }
         * hasMore : Whether there are more items to be loaded. Event listeners are removed if false.
         * useWindow : Add scroll listeners to the window, or else, the component's parentNode.
         */
      infiniteScrollConfig: PropTypes.shape({
        initialLoad: PropTypes.bool,
        pageStart: PropTypes.number,
        loadMore: PropTypes.func,
        hasMore: PropTypes.bool,
        useWindow: PropTypes.bool
      }),
      /**
         * Pagination config, hide it by setting it to false
         */
      pagination: PropTypes.object,
      grid: PropTypes.object
    }

    checkTextSearch = (text, search) => {
      if (typeof text === 'object') {
        return reactElementToJSXString(text).toLowerCase().indexOf(search.toLowerCase()) > -1
      } else if (typeof text === 'string') {
        return text.toLowerCase().indexOf(search.toLowerCase()) > -1
      }
      return false
    }

    handleOnSearch = (e) => {
      const {events, dataSource} = this.props
      if (events.onSearch) {
        events.onSearch()
      } else {
        const text = e.target.value
        var aray = dataSource.filter(
          (item) => {
            return (this.checkTextSearch(item.title, text) || this.checkTextSearch(item.content, text))
          }
        )
        this.setState({dataSource: aray})
      }
    }

    headerSearch = () => {
      return (
        <AtiTextbox id='searchBox' name='searchBox'
          type='text'
          placeholder='Search .. '
          size='sm'
          events={
            {onChange: this.handleOnSearch}
          }
        />
      )
    }

    getRenderItem = () => {
      const {type, events} = this.props
      if (type === 'default') {
        return (
          (item) => (
            <List.Item
              key={item.title}
              actions={item.actions}
              extra={item.extra}
            >
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )
        )
      } else { // custom
        return events.renderItem
      }
    }

    // componentDidMount(){
    //     const {dataSource} = this.props;
    //     this.setState({dataSource});
    // }

    getListComponent = () => {
      const {dataSource, footer, bordered, itemLayout, size, pagination, grid,
        className, loading, loadMore, infiniteScroll} = this.props
      const borderedAttr = bordered ? {bordered: true} : {}
      const paginationAttr = pagination ? {pagination: pagination} : {}
      const gridAttr = grid === null ? {} : {grid}
      return (
        <List
          dataSource={dataSource}
          className={className}
          loading={loading}
          loadMore={loadMore}
          size={size}
          itemLayout={itemLayout}
          header={this.props.search ? this.headerSearch() : ''}
          footer={footer}
          // dataSource={this.state.dataSource}
          renderItem={this.getRenderItem()}
          {...gridAttr}
          {...paginationAttr}
          {...borderedAttr}
        >
          {infiniteScroll ? loading &&
            <div className='demo-loading-container'>
              <Spin />
            </div>

            : null
          }

        </List>
      )
    }

    render() {
      const {infiniteScroll, infiniteScrollConfig} = this.props
      const config = infiniteScrollConfig
        ? Object.assign(this.defaultInfiniteConfig, infiniteScrollConfig)
        : this.defaultInfiniteConfig

      if (infiniteScroll) {
        return (
          <InfiniteScroll
            {...config}
          >
            {this.getListComponent()}
          </InfiniteScroll>
        )
      } else {
        return (
          this.getListComponent()
        )
      }
    }
}

export default AtiList
