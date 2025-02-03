import React, {Component} from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import * as StringUtils from 'voca'
import PropTypes from 'prop-types'

class AtiRadioButton extends Component {
    state={
      data: [],
      events: {}
    }

    componentDidMount() {
      const {events} = this.props
      const newEvents = this.registerOnChangeEvent(events)
      this.setState({events: newEvents
      })
    }

    registerOnChangeEvent = (events) => {
      this.addEvents(events, (e) => {
        this.handleOnChange(e, events)
      })
      return events
    };

    addEvents = (events, func) => {
      events['onChange'] = (e) => {
        func(e)
      }
      return events
    }

    handleOnChange=(e, events) => {
      const {labelKey, valueKey} = this.props
      const _target = e.target || e.srcElement
      let label = _target.parentNode.childNodes[1].textContent
      let value = _target.value

      let arr = {}
      arr[labelKey] = label
      arr[valueKey] = value
      this.setState({data: arr})
      if (events && events.onItemChanged) { events.onItemChanged(arr, e) }
    }

    getTemplate = (item, i) => {
      const {name, itemClassName, labelKey, valueKey} = this.props
      const {events} = this.state
      let text = item[labelKey]
      let value = item[valueKey]
      let id = item['id']
      let disabled = item['disabled']
      let disabledAttr = disabled ? {disabled: true} : {}
      return (<Label check className={itemClassName} key={i}>
        <Input id={id} type='radio' name={name} value={value} {...events} {...disabledAttr} />
        {text}
      </Label>)
    }

    renderRadioItem = () => {
      const {data} = this.props
      return data.map((item, i) => {
        return this.getTemplate(item, i)
      })
    }

    render() {
      const {label, wrapperClassName} = this.props
      let labelRenderAttr = StringUtils.isEmpty(label) ? null
        : <Label className='col-form-label' check>{label}</Label>
      return (
        <FormGroup className={wrapperClassName}>
          {labelRenderAttr}
          {this.renderRadioItem()}

        </FormGroup>
      )
    }

    static defaultProps={
      labelKey: 'label',
      valueKey: 'value'

    }

    static propTypes={
      /**
         * element name of radio button component
         */
      name: PropTypes.string.isRequired,
      /**
         * label / title of radio button groups
         */
      label: PropTypes.string,
      /**
         * array of object data  that will shown as the radio button item/options.
         */
      data: PropTypes.array,
      /**
         * label key of data that will mapped to radio button text
         */
      labelKey: PropTypes.string,
      /**
         * label key of data that will mapped to radio button value
         */
      valueKey: PropTypes.string,
      /**
         * array of object data contains function that will execute when the radio button item changed
         */
      events: PropTypes.shape({
        onItemChanged: PropTypes.func
      })
    }
}

export default AtiRadioButton
