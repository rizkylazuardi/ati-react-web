import React from 'react'
import PropTypes from 'prop-types'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import * as StringUtils from 'voca'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display bar chart
 * @version 1.0
 */

class AtiBarChart extends React.Component {
    renderItem = () => {
      const { dataBar } = this.props

      // sort by key
      dataBar.sort(function (item1, item2) {
        return item1.key - item2.key
      })

      return dataBar.map((item, i) => {
        return (
          <Bar
            dataKey={item.key}
            legendType={StringUtils.isEmpty(item.legendType) ? 'rect' : item.legendType}
            label={StringUtils.isEmpty(item.label) ? false : item.label}
            name={item.name}
            stackId={item.stackId}
            fill={item.fill}
          />

        )
      })
    }

    render() {
      const {dataSource, width, height, layout, margin, barCategoryGap, barGap, barSize,
        maxBarSize, reverseStackOrder, events, dataKeyName} = this.props
      return (
        <ResponsiveContainer width={this.props.width} height={this.props.height}>
          <BarChart
            // width={width}
            // height={height}
            data={dataSource}
            margin={margin}
            barCategoryGap={barCategoryGap}
            barGap={barGap}
            barSize={barSize}
            maxBarSize={maxBarSize}
            reverseStackOrder={reverseStackOrder}
            onClick={events.onClick}
            onMouseEnter={events.onMouseEnter}
            onMouseMove={events.onMouseMove}
            onMouseLeave={events.onMouseLeave}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={dataKeyName} />
            <YAxis />
            <Tooltip />
            <Legend />
            {this.renderItem()}
          </BarChart>
        </ResponsiveContainer>
      )
    }
}

AtiBarChart.defaultProps = {
  width: 600,
  height: 300,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  barCategoryGap: '10%',
  barGap: 4,
  reverseStackOrder: false,
  dataKeyName: 'name',
  events: {}
}

AtiBarChart.propTypes = {
  /**
     * The width of chart container
     */
  width: PropTypes.string,
  /**
     * The height of chart container
     */
  height: PropTypes.string,
  /**
     * Data Key Name
     */
  dataKeyName: PropTypes.string,
  /**
     * The source data, in which each element is an object
     */
  dataSource: PropTypes.string,
  /**
     * Bar that will be rendered
     */
  dataBar: PropTypes.arrayOf(PropTypes.shape({
    /**
         * The key of a group of data which should be unique in an area chart
         */
    key: PropTypes.string.isRequired,
    /**
         * The name of data. This option will be used in tooltip and legend to represent a bar
         */
    name: PropTypes.string.isRequired,
    /**
         * The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order
         */
    stackId: PropTypes.string,
    /**
         * fill the bar with color code
         */
    fill: PropTypes.string,
    /**
         * f false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label
         */
    label: PropTypes.oneOfType(PropTypes.bool, PropTypes.object, PropTypes.element, PropTypes.func),
    /**
         * The type of icon in legend. If set to 'none', no legend item will be rendered
         */
    legendType: PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye', 'none'])
  })).isRequired,
  /**
     * The sizes of whitespace around the container
     */
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  /**
     * The gap between two bar categories, which can be a percent value or a fixed value.
     */
  barCategoryGap: PropTypes.string,
  /**
     * The gap between two bars in the same category
     */
  barGap: PropTypes.number,
  /**
     * The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups
     */
  barSize: PropTypes.number,
  /**
     * The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.
     */
  maxBarSize: PropTypes.number,
  /**
     * If false set, stacked items will be rendered left to right. If true set, stacked items will be rendered right to left. (Render direction affects SVG layering, not x position.)
     */
  reverseStackOrder: PropTypes.bool,
  /**
     * events of the chart
     */
  events: PropTypes.shape({
    /**
         * The customized event handler of click in this chart
         */
    onClick: PropTypes.func,
    /**
         * The customized event handler of mouseenter in this chart
         */
    onMouseEnter: PropTypes.func,
    /**
         * The customized event handler of mousemove in this chart
         */
    onMouseMove: PropTypes.func,
    /**
         * The customized event handler of mouseleave in this chart
         */
    onMouseLeave: PropTypes.func
  })
}

export default AtiBarChart
