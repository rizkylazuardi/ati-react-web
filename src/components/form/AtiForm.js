import React from 'react'
import { Form } from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'

export const FormContext = React.createContext({container: null})

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    const {events} = this.props
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const values = {
        //   ...fieldsValue,
        //     'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
        // }
        if (events.onSubmit) {
          events.onSubmit(values)
        }
        //console.log('Received values of form: ', values['date-picker'].format('YYYY-MM-DD'))
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const {className} = this.props
    return (
      <FormContext.Provider value={{decorator: getFieldDecorator}}>
        <Form onSubmit={this.handleSubmit} className={`${className}`}>
          {
            // this.props.children.map(
            //     (item, i) => {
            //         console.log(item.props)
            //         const newProps = {...item.props, decorator: getFieldDecorator}
            //         console.log(newProps)
            //         return <item {...newProps}/>
            //     }
            // )

            this.props.children
          }
        </Form>
      </FormContext.Provider>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

NormalLoginForm.propTypes = {
  className: PropTypes.string,
  events: PropTypes.object,
  children: PropTypes.children,
  form: PropTypes.object
}

export default WrappedNormalLoginForm
