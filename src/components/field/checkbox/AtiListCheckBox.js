import React, { Component } from 'react'

import AtiCheckboxGroup from './AtiCheckboxGroup'
import AtiCheckbox from './AtiCheckbox'
import PropTypes from 'prop-types'
/**
 * @author rizky.lazuardi
 * @version   1.0
 * @description  Component that handle multiple checkbox item with dynamic datasource and mapping
 */
export default class AtiListCheckBox extends Component {
    state = {
      values: [],
      events: null,
      arrayChildren: null,
      tempChecked: [],
      isCheckedAll: false
    }

    componentDidMount() {
      const { events, dataSource } = this.props
      const newEvents = this.registerOnChangeEvent(events)
      this.setState({
        ...this.state, events: newEvents
      })
      dataSource.forEach((item, i) => {
        const { tempChecked } = this.state
        tempChecked.push(false)
        this.setState({ tempChecked })
      })
    }

    getDefaultChildTemplate = (item, events, checked, index) => {
      return (
        <AtiCheckbox index={index} id={item.id} value={item.value} text={item.label}
          checked={checked} size='sm' {...events}
        />
      )
    }

    stateRepository = () => {
      return {
        insert: ({ key, value }) => {
          const { values } = this.state
          let _index = this.stateRepository().findByIdKey(key)
          if (_index === -1) {
            values.push({ key: key, value: value })
          }
          this.setState({values})
        },
        deleteByKey: (key) => {
          const { values, tempChecked } = this.state
          values.splice(this.stateRepository().findByIdKey(key), 1)
        },
        findByIdKey: (key) => {
          const { values } = this.state
          return values.findIndex((item) => item.key === key)
        },
        findCurrentCheckedStatus: (id) => {
          const { tempChecked } = this.state
          const aray = tempChecked[tempChecked.findIndex((item) => item.id === id)]
          return aray.checked
        },
        getAll: () => {
          return this.state.values
        }
      }
    };

    customOnChange = (id, value, checked, index, ev) => {
      const {isCheckedAll} = this.state
      const {dataSource} = this.props
      if (checked) {
        this.stateRepository().insert({ key: id, value: value })
        if (this.stateRepository().getAll().length === dataSource.length) {
          this.setState({isCheckedAll: true})
        }
        this.state.tempChecked[index] = true
        this.setState({tempChecked: this.state.tempChecked})
      } else {
        this.stateRepository().deleteByKey(id)
        this.state.tempChecked[index] = false
        this.setState({tempChecked: this.state.tempChecked, isCheckedAll: false})
      }
      if (ev.onItemsChanged) { ev.onItemsChanged(this.stateRepository().getAll()) }
    }

    registerOnChangeEvent = (events) => {
      this.addEvents(events, 'onChange', (e, data, oldEvent) => {
        // console.log(events);
        const _target = e.target
        const index = _target.attributes.getNamedItem('index').value
        this.customOnChange(_target.id, _target.value, _target.checked, index, events)
        oldEvent(e)
      })
      return events
    };

    renderItems = () => {
      const { dataSource, childTemplate = this.getDefaultChildTemplate } = this.props

      return dataSource.map((item, i) => {
        const { tempChecked } = this.state
        return childTemplate(item, this.state.events, tempChecked[i], i)
      })
    }

    addEvents = (events, key, func) => {
      const oldEvent = events[key]
      events[key] = (e, data) => {
        if (oldEvent) { func(e, data, oldEvent) } else { func(e, data, () => { }) }
      }
      return events
    }

    checkedAll = (e) => {
      // console.log(React.Children.map(this.state.arrayChildren, x => x))
      const { isCheckedAll } = this.state
      const {events} = this.props
      this.setState({...this.state, isCheckedAll: !isCheckedAll})
      this.renderItems().forEach(
        (item, index) => {
          const _props = item.props
          this.customOnChange(_props.id, _props.value, !isCheckedAll, _props.index, events)
        }
      )
    }

    render() {
      const { label } = this.props
      return (
        <AtiCheckboxGroup label={label}>
          <AtiCheckbox id='checkAll' value='checkAll' checked={this.state.isCheckedAll} text='Check All' size='{size}'
            onChange={this.checkedAll}
          />
          {this.renderItems()}
        </AtiCheckboxGroup>
      )
    }

    static propTypes={
      /**
         * checkbox group title
         */
      label: PropTypes.string,
      /**
         * json array of object that contains checkbox data element
         */
      dataSource: PropTypes.array.isRequired,
      /**
         * custom events of checkbox element,
         * by default the key onItemsChanged must be set if you want to get selected item
         */
      events: PropTypes.shape({
        onItemsChanged: PropTypes.func.isRequired,
        onChange: PropTypes.func
      })

    }
}
