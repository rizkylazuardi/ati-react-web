import React from 'react'
import _ from 'lodash'
import './styles.css'
import './example-styles.css'
// import RGL, { WidthProvider } from "react-grid-layout";
import { Responsive as ResponsiveReactGridLayout } from 'react-grid-layout'
import PropTypes from 'prop-types'
import {SizeMe} from 'react-sizeme'

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const withSizeHOC = withSize();
// const ResponsiveReactGridLayout = withSizeHOC(Responsive);

class AtiDashboard extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange: function() {},
    verticalCompact: false
    // width:2,
    // height:3
  };

  state ={
    currentBreakpoint: 'lg'
    // layouts: {}
  }

  // componentDidMount(){
  //   // const initialLayout = this.generateLayout();
  //   this.state = {
  //     ...this.state,
  //     layouts: { lg: this.props.layouts }
  //   }
  // }

  // componentDidUpdate(){
  //   console.log(this.state);
  // }

  // generateLayout = (currBreak) => {
  //   const {width,height,cols} = this.props;
  //   const currentColWidth = cols[currBreak ? currBreak : this.state.currentBreakpoint];
  //   console.log(currentColWidth);
  //   const totalBox = currentColWidth/width;
  //   var y = 0;
  //   return _.map(new Array(this.props.children.length), function(item, i) {
  //     // const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
  //     y = i % totalBox === 0 ? y+height : y;
  //     console.log(y);
  //     return {
  //       x: (i * 2) % currentColWidth,
  //       y: y,
  //       w : width,
  //       h : height,
  //       i: i.toString()
  //     };
  //   });
  // }

  onBreakpointChange = breakpoint => {
    // console.log(breakpoint);
    // const newLayout = this.generateLayout(breakpoint);
    // var obj = {};
    // obj[breakpoint] = newLayout;
    this.setState({
      currentBreakpoint: breakpoint
      // layouts: obj,
    })
  };

  // for nonresponsive
  // onLayoutChange(layout){
  //   this.props.onLayoutChange(layout);
  //   // this.setState({ layout: layout });
  // }
  // for responsive
  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts)
  };

  render() {
    const {
      width, autoSize, cols, draggableCancel, draggableHandle, verticalCompact, compactType, layouts, margin,
      containerPadding, rowHeight, isDraggable, isResizable, useCSSTransforms, preventCollision, onLayoutChange,
      ItemCallback, onDragStart, onDrag, onDragStop, onResizeStart, onResize, onResizeStop, breakpoints
    } = this.props
    // const colsAttriube = parseInt(this.props.cols) * 2;
    return (
      <div>
        <SizeMe render={({size}) =>
          <ResponsiveReactGridLayout
            layouts={layouts}
            onLayoutChange={this.onLayoutChange}
            cols={cols}
            // items = {this.props.items}
            rowHeight={rowHeight}
            onBreakpointChange={this.onBreakpointChange}
            width={size.width}
            // height = {size.height}
            breakpoints={breakpoints}

            autoSize={autoSize} draggableCancel={draggableCancel} draggableHandle={draggableHandle}
            verticalCompact={verticalCompact} compactType={compactType} margin={margin}
            containerPadding={containerPadding} isDraggable={isDraggable}
            isResizable={isResizable} useCSSTransforms={useCSSTransforms} preventCollision={preventCollision}
            ItemCallback={ItemCallback} onDragStart={onDragStart}
            onDrag={onDrag} onDragStop={onDragStop} onResizeStart={onResizeStart} onResize={onResize}
            onResizeStop={onResizeStop}

          // {...this.props}
          >
            {this.props.children}
          </ResponsiveReactGridLayout>
        } />
      </div>
    )
  }
}

AtiDashboard.propTypes = {
  //
// Basic props
//

  // This allows setting the initial width on the server side.
  // This is required unless using the HOC <WidthProvider> or similar
  width: PropTypes.number,

  // If true, the container height swells and contracts to fit contents
  autoSize: PropTypes.bool,

  // Number of columns in this layout.
  cols: PropTypes.number,

  // A CSS selector for tags that will not be draggable.
  // For example: draggableCancel:'.MyNonDraggableAreaClassName'
  // If you forget the leading . it will not work.
  draggableCancel: PropTypes.string,

  // A CSS selector for tags that will act as the draggable handle.
  // For example: draggableHandle:'.MyDragHandleClassName'
  // If you forget the leading . it will not work.
  draggableHandle: PropTypes.string,

  // If true, the layout will compact vertically
  verticalCompact: PropTypes.boolean,

  // Compaction type.
  compactType: PropTypes.oneOf(['vertical', 'horizontal']),

  // Layout is an array of object with the format:
  // {x: number, y: number, w: number, h: number}
  // The index into the layout must match the key used on each item component.
  // If you choose to use custom keys, you can specify that key in the layout
  // array objects like so:
  // {i: string, x: number, y: number, w: number, h: number}
  // layout: ?array = null, // If not provided, use data-grid props on children
  layouts: PropTypes.array,
  // Margin between items [x, y] in px.
  // margin: ?[number, number] = [10, 10],
  margin: PropTypes.array,
  // Padding inside the container [x, y] in px
  // containerPadding: ?[number, number] = margin,

  containerPadding: PropTypes.array,

  // Rows have a static height, but you can change this based on breakpoints
  // if you like.
  rowHeight: PropTypes.number,
  // used for responsive dashboard
  breakpoints: PropTypes.array,

  //
  // Flags
  //
  isDraggable: PropTypes.bool,
  isResizable: PropTypes.bool,
  // Uses CSS3 translate() instead of position top/left.
  // This makes about 6x faster paint performance
  useCSSTransforms: PropTypes.bool,

  // If true, grid items won't change position when being
  // dragged over.
  preventCollision: PropTypes.bool,

  //
  // Callbacks
  //

  // Callback so you can save the layout.
  // Calls back with (currentLayout) after every drag or resize stop.
  // onLayoutChange: (layout: Layout) => void,

  onLayoutChange: PropTypes.func,

  //
  // All callbacks below have signature (layout, oldItem, newItem, placeholder, e, element).
  // 'start' and 'stop' callbacks pass `undefined` for 'placeholder'.
  //
  // type ItemCallback : (layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
  //                      placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) => void;

  ItemCallback: PropTypes.func,

  // Calls when drag starts.
  onDragStart: PropTypes.ItemCallback,
  // Calls on each drag movement.
  onDrag: PropTypes.ItemCallback,
  // Calls when drag is complete.
  onDragStop: PropTypes.ItemCallback,
  // Calls when resize starts.
  onResizeStart: PropTypes.ItemCallback,
  // Calls when resize movement happens.
  onResize: PropTypes.ItemCallback,
  // Calls when resize is complete.
  onResizeStop: PropTypes.ItemCallback,
  children: PropTypes.element

}

export default AtiDashboard
