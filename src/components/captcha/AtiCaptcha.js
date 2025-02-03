import React, { Component } from 'react';
import PropTypes from 'prop-types';
import captchaRenderer from './captchaRenderer';

/**
 * @author hosea.simanjuntak
 * @since Wednesday, October 24, 2018
 * @description component for captcha input that will be needed if developer wants to prevent brute force
 * @version 1.0
 */

class AtiCaptcha extends Component {
    // setSettings = () => {
    //     captchaSettings.set({
    //         captchaEndpoint: this.props.captchaEndpoint,
    //     });
    // }
    componentDidMount() {
        const { id, onGenerate, onSuccess, onFailure } = this.props;
        captchaRenderer.init(id, onGenerate, onSuccess, onFailure);
    }

    render() {
        const { id } = this.props;
        return (
            <div id={id} className="container">
                <div className="row">
                    <div id={`${id}-canvas-container`} className="col" />
                </div>
                <div className="row">
                    <div id={`${id}-input-container`} className="col" />
                </div>
                <div className="row" style={{paddingTop:'1%'}}>
                    <div id={`${id}-refresh-container`} className="col" />
                    <div id={`${id}-submit-container`} className="col" />
                </div>
            </div>
        );
  }
}

AtiCaptcha.defaultProps = {
    onGenerate: null,
    onSuccess: null,
    onFailure: null,
};

AtiCaptcha.propTypes = {
    /**
     * if of the captcha component
     */
    id: PropTypes.string.isRequired,

    /**
     * function() return string
     * This function is needed if you want the passcode generated from parent component.
     */
    onGenerate: PropTypes.func,
    /**
     * function()
     * THis function will be called when input have the same value with the image
     */
    onSuccess: PropTypes.func,
    /**
     * function()
     * THis function will be called when input didn't have the same value with the image
     */
    onFailure: PropTypes.func,
};

export default AtiCaptcha;
