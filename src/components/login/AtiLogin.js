import React from 'react'
import PropTypes from 'prop-types'
// image
import account from './image/account.png'
import password from './image/password.png'

// style
import './style/style.css'

// component
import UsernameInput from './../../components/field/textbox/default/AtiTextbox'
import PasswordInput from './../../components/field/textbox/password/AtiTextPassword'
import Button from './../../components/button/AtiButton'
import * as StringUtils from 'voca'

class AtiLogin extends React.Component {
    static defaultProps = {
      containerCentered: true,
    }

    state = {
      username: '',
      password: ''
    }

    handleUsernameChange = (e) => {
      this.setState({username: e.target.value})
      // this.props.events.handleUsernameChange(e.target.value)
    }

    handlePasswordChange = (e) => {
      this.setState({password: e.target.value})
      // this.props.events.handlePasswordChange(e.target.value)
    }

    handleOnSubmit = () => {
      const username = this.state.username
      const password = this.state.password
      this.props.events.handleOnSubmit(username, password)
    }

    render() {
      const {inputPasswordClassName, inputUsernameClassName, inputUsernameCustom, inputPasswordIcon, inputPasswordCustom,
        buttonCustom, title, inputUsernamePlaceholder, inputPasswordPlaceholder, inputUsernameIcon,
        buttonClassName, buttonColor, buttonSize, buttonText, footer, footerClassName,
        inputUsernameLabel, inputPasswordLabel,
        containerTop, containerRight, containerBottom, containerLeft, containerCentered,
        containerWidth, containerHeight, containerBackgroundColor, containerBorderRadius, style} = this.props

      return (

      // <div className = "center-block">
        <div
          style={!StringUtils.isEmpty(style) ? style
          : {
              margin: containerCentered ? 'auto' : null,
              marginTop: containerTop || 'auto',
              marginRight: containerRight || 'auto',
              marginBottom: containerBottom || 'auto',
              marginLeft: containerLeft || 'auto',
              width: containerWidth || '28%',
              height: containerHeight || '43%',
              backgroundColor: containerBackgroundColor || '#fff',
              borderRadius: containerBorderRadius || '3px'
            }
          }
        className = "center-block"
        >
          <h4 className='text-subtitle'> {title} </h4>

          <div className='row'>
            <div className='col-sm-2'>
              {
                <img src={!StringUtils.isEmpty(inputUsernameIcon) ? inputUsernameIcon : account}
                  style={
                    {
                      width: '50%',
                      height: '30%',
                      marginTop: '35px',
                      marginLeft: '25px'
                    }
                  } />
              }
            </div>

            <div className='col-sm-9'>
              <label>{inputUsernameLabel || 'Username'}</label>
              {
                !StringUtils.isEmpty(inputUsernameCustom) ? inputUsernameCustom
                  : <UsernameInput id='username' name='username' type='text' value={this.state.username}
                    className={inputUsernameClassName || 'form-control-sm form-control'}
                    placeholder={inputUsernamePlaceholder || 'Input your username here'}
                    events={
                      {
                        onChange: this.handleUsernameChange
                      }
                    }
                  />
              }
            </div>

            <div className='col-sm-1' />
          </div>

          <div className='row'>
            <div className='col-sm-2'>
              {
                <img src={!StringUtils.isEmpty(inputPasswordIcon) ? inputPasswordIcon : password}
                  style={
                    {
                      width: '50%',
                      height: '30%',
                      marginTop: '35px',
                      marginLeft: '25px'
                    }
                  } 
                />
              }
            </div>

            <div className='col-sm-9'>
              <label>{inputPasswordLabel || 'Password'}</label>
              {
                !StringUtils.isEmpty(inputPasswordCustom) ? inputPasswordCustom
                  : <PasswordInput id='password' name='password' value={this.state.password}
                    placeholder={inputPasswordPlaceholder || 'Input your password here'}
                    className={inputPasswordClassName || 'form-control-sm form-control'}
                    events={
                      {
                        onChange: this.handlePasswordChange
                      }
                    }
                  />
              }
            </div>

            <div className='col-sm-1' />
          </div>

          {
            buttonCustom || <Button type='button' id='login' name='login'
              text={buttonText || 'Login'} size={buttonSize || 'sm'} onClick={() => this.handleOnSubmit()}
              className={buttonClassName || 'login-button'} color={buttonColor || '#fabc3b'}
            />
          }

          {footer
            ? <p className={footerClassName || 'text-center text-small margin-top-10px'}>
              {footer}
            </p> : null
          }
        </div>

      )
    }
}

AtiLogin.propTypes = {
  /**
     * className of inputPassword
     */
  inputPasswordClassName: PropTypes.string,
  /**
     * className of inputUsername
     */
  inputUsernameClassName: PropTypes.string,
  /**
     * image of inputPasswordIcon
     */
  inputPasswordIcon: PropTypes.element,
  /**
     * image of inputUsernameIcon
     */
  inputUsernameIcon: PropTypes.element,
  /**
     * element to customize input password
     */
  inputPasswordCustom: PropTypes.element,
  /**
     * element to customize input username
     */
  inputUsernameCustom: PropTypes.element,
  /**
     * placeholder for inputPassword
     */
  inputPasswordPlaceholder: PropTypes.string,
  /**
     * placeholder for inputUsername
     */
  inputUsernamePlaceholder: PropTypes.string,
  /**
     * events to triggered function
     */
  events: PropTypes.arrayOf(PropTypes.func),
  /**
     * title of container
     */
  title: PropTypes.string,
  /**
     * element to customize button
     */
  buttonCustom: PropTypes.element,
  /**
     * className of button
     */
  buttonClassName: PropTypes.string,
  /**
     * color for button
     */
  buttonColor: PropTypes.string,
  /**
     * size for button
     */
  buttonSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
     * text for button
     */
  buttonText: PropTypes.string,
  /**
     * element of footer
     */
  footer: PropTypes.element,
  /**
     * className for footer
     */
  footerClassName: PropTypes.string,
  /**
     * laber for inputUsername
     */
  inputUsernameLabel: PropTypes.string,
  /**
     * label for inputPassword
     */
  inputPasswordLabel: PropTypes.string,
  /**
     * margin top of container
     */
  containerTop: PropTypes.string,
  /**
     * margin right of container
     */
  containerRight: PropTypes.string,
  /**
     * margin bottom of container
     */
  containerBottom: PropTypes.string,
  /**
     * margin left of container
     */
  containerLeft: PropTypes.string,
  /**
     * whether the container at the center or not
     */
  containerCentered: PropTypes.bool,
  /**
     * width of container
     */
  containerWidth: PropTypes.string,
  /**
     * height of container
     */
  containerHeight: PropTypes.string,
  /**
     * background color of container
     */
  containerBackgroundColor: PropTypes.string,
  /**
     * border radius of container
     */
  containerBorderRadius: PropTypes.string
}

export default AtiLogin
