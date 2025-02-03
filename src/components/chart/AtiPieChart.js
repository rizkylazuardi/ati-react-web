import React from 'react'
import PropTypes from 'prop-types'
import {ResponsiveContainer, PieChart, Pie, Cell, Sector} from 'recharts'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display pie chart
 * @version 1.0
 */

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill='#333'>{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill='#999'>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

class AtiPieChart extends React.Component {
    state = {
      activeIndex: 0
    }

    onPieEnter = (data, index) => {
      this.setState({
        activeIndex: index
      })
    }

    renderCell = () => {
      const { dataSource } = this.props

      return dataSource.map((item) => {
        return (
          <Cell fill={item.color} />
        )
      })
    }

    render() {
      const {dataSource, width, height, margin,
        cx, cy, innerRadius, outerRadius, baseColor} = this.props
      return (
        <ResponsiveContainer width={width} height={height}>
          <PieChart margin={margin}>
            <Pie
              nameKey='name'
              dataKey='value'
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={dataSource}
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill={baseColor}
              legend='square'
              onMouseEnter={this.onPieEnter}
            />
            {this.renderCell()}
          </PieChart>
        </ResponsiveContainer>
      )
    }
}

AtiPieChart.defaultProps = {
  width: 600,
  height: 300,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  events: {},
  cx: 300,
  cy: 200,
  innerRadius: 60,
  outerRadius: 80,
  baseColor: '#8884d8'
}

renderActiveShape.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  midAngle: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  fill: PropTypes.string,
  value: PropTypes.string,
  payload: PropTypes.object,
  percent: PropTypes.number
}

AtiPieChart.propTypes = {
  /**
     * The width of chart container
     */
  width: PropTypes.number,
  /**
     * The height of chart container
     */
  height: PropTypes.number,
  /**
     * Base Color of Pie Chart
     */
  baseColor: PropTypes.string,
  /**
     * The source data, in which each element is an object
     */
  dataSource: PropTypes.arrayOf(PropTypes.shape({
    /**
         * The name of data. This option will be used in tooltip and legend to represent a slice of the pie
         */
    name: PropTypes.string.isRequired,
    /**
         * The value of data.
         */
    value: PropTypes.number.isRequired,
    /**
         * color of the data
         */
    color: PropTypes.string.isRequired
  })).isRequired,
  /**
     * The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container width
     */
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
     * The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height
     */
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
     * The inner radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
     */
  innerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
     * The outer radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
     */
  outerRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
     * The sizes of whitespace around the container
     */
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  events: PropTypes.shape({
    /**
         * The customized event handler of click in this chart
         */
    onClick: PropTypes.func
  })
}

export default AtiPieChart
