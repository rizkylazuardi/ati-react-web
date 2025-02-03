import React, {Component} from 'react'
import { Progress } from 'reactstrap'
import PropTypes from 'prop-types'

/**
 * @author runy.novitasari
 *
 *
 * @version 1.0
 *
 * <AtiProgressBar/>
 * A progress bar can be used to show a user how far along he/she is in a process.
 * React provides several types of progress bars, such as percentage, range, infinite display.
 * Types is mandatory parameters to be included and filled the value.
 *
 */

class AtiProgressBar extends Component {
  static defaultProps = {
    type: 'percentage'
  }

   renderType = () => {
     const {type, maxValues, value, color, className, striped} = this.props
     if (type.toLowerCase() === 'percentage') {
       return <Progress bar={this.props.asBar} striped={striped} color={color} className={className} value={value} >{this.renderChildren('%')}</Progress>
     } else if (type.toLowerCase() === 'range') {
       return <Progress bar={this.props.asBar} striped={striped} color={color} className={className} value={value} max={maxValues} >{this.renderChildren(`of ${maxValues}`)} </Progress>
     } else if (type.toLowerCase() === 'infinite') {
       return <Progress bar={this.props.asBar} color='danger' className={className} animated={true} value='100' />
     }
   }

  renderChildren = (suffix) => {
    if (this.props.children == null) {
      return `${this.props.value} ${suffix}`
    }
    return this.props.children
  }

  render() {
    // const {style, className, animated, type, value, children, renderType, maxValues} = this.props
    return (this.renderType())
  }
}

AtiProgressBar.propTypes = {
  /**
   * contain value of process progress bar
   */

  value: PropTypes.number.isRequired,
  /**
   * to determine the suffix of progress bar (% or ..of..)
   */

  // renderChildren :PropTypes.func.isRequired,
  /**
   * type of progress bar, they are :
   * range : progress bar will display in {values} Of {maxValues} process
   * percentage : progress bar will display in percentage {%} process
   * infinite : When progressbar is infinite/indeterminate it requests that the user wait while something finishes when it’s not necessary to indicate how long it will take.
   */

  type: PropTypes.string,
  /**
   * contain maxValue of progress bar's process
   */

  maxValues: PropTypes.number,
  /**
   * Progressbar supports all default colors. So to change its color just add color-[color] class to preloader element.
   */

  color: PropTypes.string,

  /**
   * An optional className for input component of the progess bar element to modify with css custom.
   */

  className: PropTypes.string,

  /**
   * flag to indicate the display progress bar with stripes or not
   */
  striped: PropTypes.bool,
  children: PropTypes.element,
  asBar: PropTypes.bool
}

export default AtiProgressBar
