import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiLoginMd from './AtiLogin.md'
import AtiLogin from './AtiLogin.js'
import UsernameInput from './../field/textbox/default/AtiTextbox'
import PasswordInput from './../field/textbox/password/AtiTextPassword'
import Button from './../button/AtiButton'
import { withState } from '@dump247/storybook-state'
import 'antd/dist/antd.css'
import './style/style.css'
import container from './style/container'
import inputPasswordIcon from './image/password.png'
import inputUsernameIcon from './image/account.png'

storiesOf('AtiLogin', module)
  .addDecorator(withKnobs)
// .addDecorator(getStory=><div style={{padding:"10px"}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiLoginMd))
  .addWithDoc('Default', AtiLogin, null, withState({username: '', password: ''})(() => {
    const handleOnSubmit = (username, password) => {
      //console.log('username : ' + username)
      //console.log('password : ' + password)
    }
    return (<div id='holder'>

      <h1 className='text-center text-title text-color'><b>Pocket</b>Bank</h1>
      <AtiLogin
        title='Login to your Account'
        footer={<div>Forgot Password?<a href='/pretet'>Click Here</a></div>}
        events={{
          handleOnSubmit: handleOnSubmit
        }}
        style={{
          backgroundColor: '#00ff00',
        }}
      />

      <p className='text-center text-large text-color margin-top-10'>
            "BANKING SYSTEM IN YOUR POCKET"
      </p>

      <footer>
        <p className='text-center text-color text-footer'> Copyright © PT Anabatic Technologies.</p>
      </footer>

    </div>)
  }))
  .addWithDoc('Custom Style', AtiLogin, null, withState({username: '', password: ''})(() => {
    const handleOnSubmit = (username, password) => {
      //console.log('username : ' + username)
      //console.log('password : ' + password)
    }
    return (<div id='holder'>

      <h1 className='text-center text-title text-color'><b>Pocket</b>Bank</h1>
      <AtiLogin
        title='Login to your Account'
        footer={<div>Forgot Password?<a href='/pretet'>Click Here</a></div>}
        style={{
          width: '50%',
          height: '43%',
          backgroundColor: '#00ff00',
        }}
        events={{
          handleOnSubmit: handleOnSubmit
        }} />

      <p className='text-center text-large text-color margin-top-10'>
            "BANKING SYSTEM IN YOUR POCKET"
      </p>

      <footer>
        <p className='text-center text-color text-footer'> Copyright © PT Anabatic Technologies.</p>
      </footer>

    </div>)
  }))
  .addWithDoc('Custom Position', AtiLogin, null, withState({username: '', password: ''})(() => {
    const handleOnSubmit = (username, password) => {
      //console.log('username : ' + username)
      //console.log('password : ' + password)
    }
    return (<div id='holder'>
      <div style={container}>

        <h1 className='text-center text-title text-color'><b>Pocket</b>Bank</h1>

        <AtiLogin
          title='Login to your Account'
          containerCentered={false}
          containerTop='10px'
          containerLeft='200px'
          footer={<div>Forgot Password?<a href='/pretet'>Click Here</a></div>}
          events={{
            handleOnSubmit: handleOnSubmit
          }} />

        <p className='text-center text-large text-color margin-top-10'>
                    "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
          <p className='text-center text-color text-footer'> Copyright © PT Anabatic Technologies.</p>
        </footer>
      </div>
    </div>)
  }))
  .addWithDoc('Custom Setting', AtiLogin, null, withState({username: '', password: ''})(() => {
    const handleOnSubmit = (username, password) => {
      //console.log('username : ' + username)
      //console.log('password : ' + password)
    }
    return (<div id='holder'>
      <div style={container}>

        <h1 className='text-center text-title text-color'><b>Pocket</b>Bank</h1>

        <AtiLogin title='Login to your Account' containerWidth='30%' containerHeight='45%' containerBackgroundColor='#fff' containerBorderRadius='3px' inputPasswordClassName='form-control-sm form-control' inputUsernameClassName='form-control-sm form-control' inputPasswordLabel='Password Label' inputUsernameLabel='Username Label' inputPasswordIcon={inputPasswordIcon} inputUsernameIcon={inputUsernameIcon} inputUsernamePlaceholder='Username Placeholder' inputPasswordPlaceholder='Password Placeholder' buttonClassName='login-button' buttonSize='sm' buttonText='Login' footerClassName='text-center text-small margin-top-10px' footer={<div>Forgot Password?<a href='/pretet'>Click Here</a></div>} events={{
          handleOnSubmit: handleOnSubmit
        }} />

        <p className='text-center text-large text-color margin-top-10'>
                "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
          <p className='text-center text-color text-footer'> Copyright © PT Anabatic Technologies.</p>
        </footer>
      </div>
    </div>)
  }))
  .addWithDoc('Custom Component', AtiLogin, null, withState({username: '', password: ''})(({ store }) => {
    const handleUsernameChange = (e) => {
      store.set({username: e.target.value})
    }

    const handlePasswordChange = (e) => {
      store.set({password: e.target.value})
    }

    const handleOnSubmit = () => {
      //console.log('username : ' + store.state.username)
      //console.log('password : ' + store.state.password)
    }

    return (
      <div id='holder'>
        <div style={container}>

          <h1 className='text-center text-title text-color'><b>Pocket</b>Bank</h1>

          <AtiLogin
            title='Login to your Account'
            containerWidth='30%'
            containerHeight='45%'
            containerBackgroundColor='#fff'
            containerBorderRadius='3px'
            inputPasswordLabel='Password Label'
            inputUsernameLabel='Username Label'
            inputUsernameCustom={
              <UsernameInput id='username' name='username' type='text' value={store.state.username}
                className='form-control-sm form-control' placeholder='Input your username here'
                events={
                  {
                    onChange: handleUsernameChange
                  }
                }
              />
            }
            inputPasswordCustom={
              <PasswordInput id='password' name='password' value={store.state.password}
                placeholder='Input your password here' className='form-control-sm form-control'
                events={
                  {
                    onChange: handlePasswordChange
                  }
                }
              />
            }
            buttonCustom={
              <Button type='button' id='login' name='login'
                text='Login' size='sm' className='login-button' color='#fabc3b'
                events={
                  {
                    onClick: handleOnSubmit
                  }
                }
              />
            }
            inputPasswordIcon={inputPasswordIcon}
            inputUsernameIcon={inputUsernameIcon}
            footerClassName='text-center text-small margin-top-10px'

            footer={
              <div>Forgot Password ? <a href='/pretet'>Click Here</a></div>
            }
          />

          <p className='text-center text-large text-color margin-top-10'>
                    "BANKING SYSTEM IN YOUR POCKET"
          </p>

          <footer>
            <p className='text-center text-color text-footer'> Copyright © PT Anabatic Technologies.</p>
          </footer>
        </div>
      </div>

    )
  }))
