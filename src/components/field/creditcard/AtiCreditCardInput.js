import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactCreditCard from 'react-credit-cards'
import AtiTextbox from '../textbox/default/AtiTextbox'
import {Container, Row, Col, Form} from 'reactstrap'
import Payment from 'payment'
import 'react-credit-cards/es/styles-compiled.css'

/**
 * @author hosea.simanjuntak
 * @description : A modern credit card component for React.
 * @version : v 1.0
 *
 */

class AtiCreditCardInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      focused: ''
    }
  }

    handleInputFocus = ({ target }) => {
      this.setState({
        focused: target.name
      })
    };

    handleInputChange = ({ target }) => {
      if (target.name === 'number') {
        this.setState({
          [target.name]: target.value.replace(/ /g, '')
        })
      } else if (target.name === 'expiry') {
        this.setState({
          [target.name]: target.value.replace(/ |\//g, '')
        })
      } else {
        this.setState({
          [target.name]: target.value
        })
      }
    };

    handleCallback(type, isValid) {
     // console.log(type, isValid) // eslint-disable-line no-console
    }

    componentDidMount() {
      Payment.formatCardNumber(document.querySelector('[name="number"]'))
      Payment.formatCardExpiry(document.querySelector('[name="expiry"]'))
      Payment.formatCardCVC(document.querySelector('[name="cvc"]'))
    }
    render() {
      const {name, number, expiry, cvc, focused} = this.state
      const {onCallback, inputClass, valueHolderName, valueCardNumber, valueExpiryDate, valueCvcNumber,
        holderNamePlaceholder, cardNumberPlaceholder, expiryDatePlaceholder, cvcNumberPlaceholder} = this.props
      return (
        <Container>
          <Row>
            <Col>
              <ReactCreditCard
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                callback={onCallback}
              />
            </Col>
            <Col>
              <Form>
                <AtiTextbox
                  type='text'
                  id='number'
                  name='number'
                  className={` ${inputClass}`}
                  placeholder={cardNumberPlaceholder}
                  value={valueCardNumber}
                  onChange={this.handleInputChange}
                  onKeyUp={this.handleInputChange}
                  onFocus={this.handleInputFocus} />
                <AtiTextbox
                  type='text'
                  id='name'
                  name='name'
                  className={` ${inputClass}`}
                  placeholder={holderNamePlaceholder}
                  value={valueHolderName}
                  onChange={this.handleInputChange}
                  onKeyUp={this.handleInputChange}
                  onFocus={this.handleInputFocus} />
                <AtiTextbox
                  type='text'
                  id='expiry'
                  name='expiry'
                  className={` ${inputClass}`}
                  placeholder={expiryDatePlaceholder}
                  value={valueExpiryDate}
                  onChange={this.handleInputChange}
                  onKeyUp={this.handleInputChange}
                  onFocus={this.handleInputFocus} />
                <AtiTextbox
                  type='text'
                  id='cvc'
                  name='cvc'
                  className={` ${inputClass}`}
                  placeholder={cvcNumberPlaceholder}
                  value={valueCvcNumber}
                  onChange={this.handleInputChange}
                  onKeyUp={this.handleInputChange}
                  onFocus={this.handleInputFocus} />
              </Form>
            </Col>
          </Row>
        </Container>
      )
    }
}

AtiCreditCardInput.defaultProps = {
  holderNamePlaceholder: 'Holder Name',
  cardNumberPlaceholder: 'Card Number',
  expiryDatePlaceholder: 'Valid Thru',
  cvcNumberPlaceholder: 'CVC',
  onCallback: AtiCreditCardInput.handleCallback
}

AtiCreditCardInput.propTypes = {
  /**
     * Name on card
     */
  valueHolderName: PropTypes.string,
  /**
     * {string|number}: Card number
     */
  valueCardNumber: PropTypes.string,
  /**
     * {string|number}: Card expiry date. 10/20 or 012017
     */
  valueExpiryDate: PropTypes.string,
  /**
     * {string|number}: Card CVC/CVV
     */
  valueCvcNumber: PropTypes.string,
  /**
     * Placeholder for name
     */
  holderNamePlaceholder: PropTypes.string,
  /**
     * Placeholder for card number
     */
  cardNumberPlaceholder: PropTypes.string,
  /**
     * Placeholder for Expiry Date
     */
  expiryDatePlaceholder: PropTypes.string,
  /**
     * Placeholder for CVC number
     */
  cvcNumberPlaceholder: PropTypes.string,
  /**
     * Class Input for Name, CVC, Expiry Date, and Card Number
     */
  inputClass: PropTypes.string,
  /**
     * A callback function that will be called when the card number has changed with 2 paramaters: type ({ issuer: 'visa', maxLength: 19 }), isValid ({boolean})
     */
  onCallback: PropTypes.func
}

export default AtiCreditCardInput
