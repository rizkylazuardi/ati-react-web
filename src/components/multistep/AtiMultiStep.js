import React, {Component} from 'react'
import { Steps } from 'antd'
import * as StringUtils from 'voca'
import PropTypes from 'prop-types'
const Step = Steps.Step

class AtiMultiStep extends Component {
    static defaultProps = {
      size: 'default',
      direction: 'horizontal',
      currentStep: 0
    }

    static propTypes = {
      /**
         * to set the current step, counting from 0. You can overwrite this state by using status of Step
         */
      currentStep: PropTypes.number,
      /**
         * array of object contain step items
         */
      dataSource: PropTypes.arrayOf(
        PropTypes.shape({
          /**
                 * step title on header
                 */
          title: PropTypes.string.isRequired,
          /**
                 * step icon on header title
                 */
          icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
          /**
                 * step item element
                 */
          stepContent: PropTypes.element.isRequired,
          /**
                 * to specify the status. It will be automatically set by current of Steps if not configured. Optional values are: wait process finish error
                 */
          status: PropTypes.string
        })
      ),
      /**
         * step indicator size
         */
      size: PropTypes.string,
      /**
         * to specify the status of current step, can be set to one of the following values: wait process finish error
         */
      stepStatus: PropTypes.string,
      /**
         * to specify the direction of the step bar, horizontal and vertical are currently supported
         */
      direction: PropTypes.string,
      /**
         * Steps with progress dot style, customize the progress dot by setting it to a function
         */
      progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
      /**
         * Content wrapper custom style
         */
      contentStyle: PropTypes.object
    }

    renderStepItems = () => (
      this.props.dataSource.map((item, i) => {
        const statusAttr = StringUtils.isEmpty(item.status) ? {} : {status: item.status}
        /* const iconAttr = StringUtils.isEmpty(item.iconName) ? {}
                                : {icon : <Icon type={item.iconName} style={item.iconStyle} />} */
        return <Step
          title={item.title}
          description={item.description}
          icon={item.icon}
          key={i}
          {...statusAttr}
        />
      })
    )

    render() {
      const {dataSource, currentStep, size, stepStatus, direction, progressDot, contentStyle} = this.props
      return (
        <div>
          <Steps
            direction={direction}
            current={currentStep}
            size={size}
            status={stepStatus}
            progressDot={progressDot}
          >
            {this.renderStepItems()}
          </Steps>
          <div className='steps-content' style={contentStyle}>{dataSource[currentStep].stepContent}</div>
        </div>
      )
    }
}

export default AtiMultiStep
