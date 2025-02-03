import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AtiField, withReduxForm } from 'ati-reduxform-web';
import captchaRenderer from './captchaRenderer';
import AtiButton from './../button/AtiButton';
import AtiTextBox from './../field/textbox/default/AtiTextbox';
import AtiFieldError from './../error/AtiFieldError';

/**
 * @author hosea.simanjuntak
 * @since Wednesday, October 24, 2018
 * @description component for captcha input that will be needed if developer wants to prevent brute force
 * @version 1.0
 */

class AtiServerCaptcha extends Component {

    state = {
        passCode: '',
    }

    componentDidMount() {
        this.init();
    }

    onGenerate = () => {
        const { onGenerate } = this.props;
        if (onGenerate === undefined || onGenerate === null) {
            const passcode = Math.random().toString(36).substring(7);
            const passCode = (+new Date()) % 2 === 0 ? passcode.toLowerCase() : passcode.toUpperCase();
            this.setState({ passCode }, this.returnPassCode);
        } else {
            const passCode = onGenerate();
            this.setState({ passCode }, this.returnPassCode);
        }
    }

    onRefresh = () => {
        const { id } = this.props;
        const canvas = document.getElementById(`${id}-canvas`);
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.onGenerate();
    }

    setupCanvas = () => {
        const { id } = this.props;
        const canvasContainer = document.getElementById(`${id}-canvas-container`);
        const canvas = document.getElementById(`${id}-canvas`);
        canvas.width = canvasContainer.clientWidth;
        canvas.height = 75;
    }

    setPasscode = (passCode) => {
        const { id } = this.props;
        const canvas = document.getElementById(`${id}-canvas`);
        const context = canvas.getContext('2d');
        context.font = '48px serif';
        this.skinText(passCode, 50, 50);
    }

    init = () => {
        this.setupCanvas();
        this.onGenerate();
    }

    skinText = (str, x, y) => {
        let xVal = x;
        const { id } = this.props;
        const canvas = document.getElementById(`${id}-canvas`);
        const context = canvas.getContext('2d');
        for (let i = 0; i <= str.length; ++i) {
            const ch = str.charAt(i);x
            context.fillStyle = this.randomColor();
            context.fillText(ch, xVal, y);
            xVal += context.measureText(ch).width;
        }
    }

    returnPassCode = () => {
        this.setPasscode(this.state.passCode);
    }

    randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    render() {
        const { id, form, onInputChange, buttonContainerStyle, buttonStyle, buttonType, refreshText, buttonClassName, containerStyle } = this.props;
        return (
            <div id={id} className="container" style={containerStyle}>
                <div className="row">
                    <div id={`${id}-canvas-container`} className="col">
                        <canvas id={`${id}-canvas`} />
                    </div>
                </div>
                <div className="row">
                    <div id={`${id}-input-container`} className="col">
                        <AtiField name={`${id}-input`} required >
                            <AtiTextBox
                                id={`${id}-input`}
                                name={`${id}-input`}
                                form={form}
                                type="text"
                                size="sm"
                                placeholder="Input Captcha"
                                events={{ onChange: onInputChange }}
                                containerStyle={{ marginBottom: '0 !important' }}
                            />
                            <AtiFieldError />
                        </AtiField>
                    </div>
                    <div id={`${id}-refresh-container`} className="col" style={buttonContainerStyle}>
                        <AtiButton
                            htmlType="button"
                            id={`${id}-input`}
                            name={`${id}-input`}
                            text={refreshText}
                            style={buttonStyle}
                            type={buttonType}
                            className={buttonClassName}
                            events={{
                                onClick: this.onRefresh,
                            }}
                            block
                        />
                    </div>
                </div>
            </div>
        );
  }
}

AtiServerCaptcha.defaultProps = {
    onGenerate: null,
    buttonType: 'primary',
    refreshText: 'Refresh',
};

AtiServerCaptcha.propTypes = {
    /**
     * if of the captcha component
     */
    id: PropTypes.string.isRequired,

    /**
     * function() return string
     * This function is needed if you want the passcode generated from parent component.
     */
    onGenerate: PropTypes.func,
    buttonType: PropTypes.string,
    refreshText: PropTypes.string,
};

export default AtiServerCaptcha;
