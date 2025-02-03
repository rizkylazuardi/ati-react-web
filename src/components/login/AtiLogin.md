# AtiLogin

## General

Component that for use to create Login Container with customizable style and component that you 
can provide by yourself.

##important

To take the value must use handleUsernameChange, handlePasswordChange and onClick as function name,
except for custom component, to take the value, use function with parameter e then assign e.target.value to state.

## Example

### `default`

When using default format, the position will be on the center.

```js

import AtiLogin from './AtiLogin.js';
import UsernameInput from './../../components/field/textbox/default/AtiTextbox';
import PasswordInput from './../../components/field/textbox/password/AtiTextPassword';
import Button from './../../components/button/AtiButton';
import './style/style.css';
import container from './style/container';
import inputPasswordIcon from './image/password.png';
import inputUsernameIcon from './image/account.png';

state = {
    username : '',
    password : ''
}

const handleUsernameChange = (value) =>{
        this.setState({username : value})
}

const handlePasswordChange = (value) =>{
    this.setState({password : value})
}

const onClick = () => {
    console.log("username : " + this.state.username);
    console.log("password : " + this.state.password);
}

<div id = "holder">
    <div style = {container}>
    
        <h1 className = "text-center text-title text-color"><b>Pocket</b>Bank</h1>
        <AtiLogin 
            title = "Login to your Account"
            footer = {
                <div>Forgot Password ? <a href = "/pretet">Click Here</a></div>
            }
            events = {
                {
                    handleUsernameChange : handleUsernameChange,
                    handlePasswordChange : handlePasswordChange,
                    onClick : onClick
                }
            }
        />   

        <p className = "text-center text-large text-color margin-top-10">
            "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
            <p className = "text-center text-color text-footer"> Copyright © PT Anabatic Technologies.</p>
        </footer>
    </div>
</div>
```

### `custom position`

When using custom position format, the position can be customize.

```js

import AtiLogin from './AtiLogin.js';
import UsernameInput from './../../components/field/textbox/default/AtiTextbox';
import PasswordInput from './../../components/field/textbox/password/AtiTextPassword';
import Button from './../../components/button/AtiButton';
import './style/style.css';
import container from './style/container';
import inputPasswordIcon from './image/password.png';
import inputUsernameIcon from './image/account.png';

state = {
    username : '',
    password : ''
}

const handleUsernameChange = (value) =>{
        this.setState({username : value})
}

const handlePasswordChange = (value) =>{
    this.setState({password : value})
}

const onClick = () => {
    console.log("username : " + this.state.username);
    console.log("password : " + this.state.password);
}

<div id = "holder">
    <div style = {container}>
    
        <h1 className = "text-center text-title text-color"><b>Pocket</b>Bank</h1>

        <AtiLogin 
            title = "Login to your Account"
            containerCentered = {false}
            containerTop = "10px"
            containerLeft = "100px"

            footer = {
                <div>Forgot Password ? <a href = "/pretet">Click Here</a></div>
            }
            events = {
                {
                    handleUsernameChange : handleUsernameChange,
                    handlePasswordChange : handlePasswordChange,
                    onClick : onClick
                }
            }
        />   

        <p className = "text-center text-large text-color margin-top-10">
            "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
            <p className = "text-center text-color text-footer"> Copyright © PT Anabatic Technologies.</p>
        </footer>
    </div>
</div>
```

### `custom setting`

When using custom setting format, you can adjust the style with avaliable props.

```js

import AtiLogin from './AtiLogin.js';
import UsernameInput from './../../components/field/textbox/default/AtiTextbox';
import PasswordInput from './../../components/field/textbox/password/AtiTextPassword';
import Button from './../../components/button/AtiButton';
import './style/style.css';
import container from './style/container';
import inputPasswordIcon from './image/password.png';
import inputUsernameIcon from './image/account.png';

state = {
    username : '',
    password : ''
}

const handleUsernameChange = (value) =>{
        this.setState({username : value})
}

const handlePasswordChange = (value) =>{
    this.setState({password : value})
}

const onClick = () => {
    console.log("username : " + this.state.username);
    console.log("password : " + this.state.password);
}

<div id = "holder">
    <div style = {container}>
    
        <h1 className = "text-center text-title text-color"><b>Pocket</b>Bank</h1>

        <AtiLogin 
            title = "Login to your Account"
            containerWidth = "30%"
            containerHeight = "45%"
            containerBackgroundColor = "#fff"
            containerBorderRadius = "3px"
            inputPasswordClassName = "form-control-sm form-control"
            inputUsernameClassName = "form-control-sm form-control"
            inputPasswordLabel = "Password Label"
            inputUsernameLabel = "Username Label"
            inputPasswordIcon = {inputPasswordIcon}
            inputUsernameIcon = {inputUsernameIcon}
            inputUsernamePlaceholder = "Username Placeholder"
            inputPasswordPlaceholder = "Password Placeholder"
            buttonClassName = "login-button"
            buttonSize = "sm"
            buttonText = "Login"
            footerClassName = "text-center text-small margin-top-10px"
            
            footer = {
                <div>Forgot Password ? <a href = "/pretet">Click Here</a></div>
            }
            events = {
                {
                    handleUsernameChange : handleUsernameChange,
                    handlePasswordChange : handlePasswordChange,
                    onClick : onClick
                }
            }
        />   

        <p className = "text-center text-large text-color margin-top-10">
            "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
            <p className = "text-center text-color text-footer"> Copyright © PT Anabatic Technologies.</p>
        </footer>
    </div>
</div>
```

### `custom component`

When using custom component format, you can use your own component such as AtiTextbox, AtiTextPassword and AtiButton.

```js

import AtiLogin from './AtiLogin.js';
import UsernameInput from './../../components/field/textbox/default/AtiTextbox';
import PasswordInput from './../../components/field/textbox/password/AtiTextPassword';
import Button from './../../components/button/AtiButton';
import './style/style.css';
import container from './style/container';
import inputPasswordIcon from './image/password.png';
import inputUsernameIcon from './image/account.png';

state = {
    username : '',
    password : ''
}

const handleUsernameChange = (e) =>{
    store.set({username : e.target.value})
}

const handlePasswordChange = (e) =>{
    store.set({password : e.target.value})
}

const onSubmit = () => {
    console.log("username : " + store.state.username);
    console.log("password : " + store.state.password);
}

<div id = "holder">
    <div style = {container}>
    
        <h1 className = "text-center text-title text-color"><b>Pocket</b>Bank</h1>

        <AtiLogin 
            title = "Login to your Account"
            containerWidth = "30%"
            containerHeight = "45%"
            containerBackgroundColor = "#fff"
            containerBorderRadius = "3px"
            inputPasswordLabel = "Password Label"
            inputUsernameLabel = "Username Label"
            inputUsernameCustom = {
                <UsernameInput id = "username" name = "username" type = "text" value = {store.state.username} 
                    className = "form-control-sm form-control" placeholder = "Input your username here"
                    events = {
                        {
                            onChange : handleUsernameChange
                        }
                    }
                />
            }
            inputPasswordCustom = {
                <PasswordInput id = "password" name = "password" value = {store.state.password}
                    placeholder = "Input your password here" className = "form-control-sm form-control"
                    events = {
                        {
                            onChange: handlePasswordChange
                        }
                    }
                />
            }
            buttonCustom = {
                <Button type = "button" id = "login" name = "login" 
                    text = "Login" size = "sm" className = "login-button" color = "#fabc3b"
                    events = {
                        {
                            onClick: onSubmit
                        }
                    } 
                />
            }
            inputPasswordIcon = {inputPasswordIcon}
            inputUsernameIcon = {inputUsernameIcon}
            footerClassName = "text-center text-small margin-top-10px"
            
            footer = {
                <div>Forgot Password ? <a href = "/pretet">Click Here</a></div>
            }
        />   

        <p className = "text-center text-large text-color margin-top-10">
            "BANKING SYSTEM IN YOUR POCKET"
        </p>

        <footer>
            <p className = "text-center text-color text-footer"> Copyright © PT Anabatic Technologies.</p>
        </footer>
    </div>
</div>
```