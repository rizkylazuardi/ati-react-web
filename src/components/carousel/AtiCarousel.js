import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import * as StringUtils from 'voca'

class AtiCarousel extends Component {
    static defaultProps = {
      showArrows: true,
      showStatus: true,
      selectedItem: 0,
      axis: 'horizontal',
      verticalSwipe: 'standard',
      autoPlay: true,
      useKeyboardArrows: false,
      interval: 5000,
      stopOnHover: true,
      transitionTime: 350,
      showIndicators: true,
      showThumbs: true,
      infiniteLoop: true,
      events: {},
      swipeScrollTolerance: 5,
      swipeable: true,
      dynamicHeight: false,
      emulateTouch: false,
      centerMode: false,
      centerSlidePercentage: 80
    }

    static propTypes = {
      /**
         * show prev and next arrows
         */
      showArrows: PropTypes.bool,
      /**
         * show index of the current item. i.e: (1/8)
         */
      showStatus: PropTypes.bool,
      /**
         * show little dots at the bottom with links for changing the item
         */
      showIndicators: PropTypes.bool,
      /**
         * show thumbnails of the images
         */
      showThumbs: PropTypes.bool,
      /**
         * infinite loop sliding
         */
      infiniteLoop: PropTypes.bool,
      /**
         * selects an item though props / defines the initial selected item
         */
      selectedItem: PropTypes.number,
      /**
         * changes orientation - accepts horizontal and vertical
         */
      axis: PropTypes.oneOf(['horizontal', 'vertical']),
      /**
         * changes vertical swipe scroll direction - accepts standard and natural
         */
      verticalSwipe: PropTypes.oneOf(['standard', 'natural']),
      /**
         * onChange : Fired when changing positions
         * onClickItem : Fired when an item is clicked
         * onClickThumb :  Fired when a thumb it clicked
         */
      events: PropTypes.shape({
        onChange: PropTypes.func,
        onClickItem: PropTypes.func,
        onClickThumb: PropTypes.func
      }),
      /**
         * Allows to set a fixed width
         */
      width: PropTypes.number,
      /**
         * Adds support to next and prev through keyboard arrows
         */
      useKeyboardArrows: PropTypes.bool,
      /**
         * Auto Play Flag
         */
      autoPlay: PropTypes.bool,
      /**
         * Stop auto play while mouse is over the carouse
         */
      stopOnHover: PropTypes.bool,
      /**
         * Interval of auto play
         */
      interval: PropTypes.number,
      /**
         * Duration of slide transitions (in miliseconds)
         */
      transitionTime: PropTypes.number,
      /**
         * Allows scroll when the swipe movement occurs in a different direction than the carousel axis and within the tolerance - Increase for loose - Decrease for strict
         */
      swipeScrollTolerance: PropTypes.number,
      /**
         * Enables swiping gestures
         */
      swipeable: PropTypes.bool,
      /**
         * Adjusts the carousel height if required. -- Do not work with vertical axis --
         */
      dynamicHeight: PropTypes.bool,
      /**
         * Allows mouse to simulate swipe
         */
      emulateTouch: PropTypes.bool,
      /**
         * Allows custom formatting of the status indicator => (current, total)
         */
      statusFormatter: PropTypes.func,
      /**
         * Enables centered view with partial prev/next slides. Only works with horizontal axis.
         */
      centerMode: PropTypes.bool,
      /**
         * optionally specify percentage width (as an integer) of the slides in centerMode
         */
      centerSlidePercentage: PropTypes.number,
      /**
         * slide item
         */
      dataSource: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.oneOfType([
            PropTypes.string, PropTypes.element
          ])
        })
      )
    }

    renderItem = () => {
      const {dataSource} = this.props
      return dataSource.map(
        (item) => {
          // if(i === 0){
          return [
            <div>
              <img src={item.image} style={item.imageStyle} />
              <p className='legend'>{item.title}</p>
            </div>

          ]
          // }else{
          /*    <LazyLoad once
                    placeholder={
                        <ContentLoader
                            speed={2}
                            primaryColor="#f3f3f3"
                            secondaryColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="5" ry="5" width="400" height="250" />
                        </ContentLoader>
                    }
                > */
          /*  return (
                                <div>
                                    <img src={item.image} style={item.imageStyle}/>
                                    <p className="legend">{item.title}</p>
                                </div>
                      );
                } */
        }
      )
    }

    render() {
      const {showArrows, showStatus, showIndicators, showThumbs, infiniteLoop,
        selectedItem, axis, width, useKeyboardArrows, autoPlay, stopOnHover,
        interval, transitionTime, swipeScrollTolerance, swipeable, dynamicHeight, emulateTouch,
        statusFormatter, centerMode, centerSlidePercentage, events} = this.props
      const widthAttr = StringUtils.isEmpty(width) ? {width} : {}
      const statusFormatterAttr = statusFormatter ? {statusFormatter} : {}
      return (
        <Carousel
          showArrows={showArrows}
          showStatus={showStatus}
          showIndicators={showIndicators}
          showThumbs={showThumbs}
          infiniteLoop={infiniteLoop}
          selectedItem={selectedItem}
          axis={axis}
          onChange={events.onChange}
          onClickItem={events.onClickItem}
          onClickThumb={events.onClickThumb}
          {...widthAttr}
          useKeyboardArrows={useKeyboardArrows}
          autoPlay={autoPlay}
          stopOnHover={stopOnHover}
          interval={interval}
          transitionTime={transitionTime}
          swipeScrollTolerance={swipeScrollTolerance}
          swipeable={swipeable}
          dynamicHeight={dynamicHeight}
          emulateTouch={emulateTouch}
          {...statusFormatterAttr}
          centerMode={centerMode}
          centerSlidePercentage={centerSlidePercentage}
        >
          {this.renderItem()}
        </Carousel>
      )
    }
}

export default AtiCarousel
