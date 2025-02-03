import React from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';

/**
 * @author hosea.simanjuntak
 * @description this component only used to showcase your app for new users! Or explain functionality of complex features!
 * @version 1.0
 */

class AtiTourGuide extends React.Component {
  render() {
    const { steps, run } = this.props;
    return (
        <Joyride
            steps={steps}
            run={run}
            {...this.props}
        />
    );
  }
}

AtiTourGuide.defaultProps = {
    beaconComponent: null,
    continuous: false,
    debug: false,
    disableCloseOnEsc: false,
    disableOverlay: false,
    disableOverlayClose: false,
    disableScrolling: false,
    floaterProps: {},
    hideBackButton: false,
    scrollOffset: 20,
    scrollToFirstStep: false,
    showProgress: false,
    showSkipButton: false,
    spotlightClicks: false,
    spotlightPadding: 10,
    styles: {},
    tooltipComponent: null,
    events: {
        callback: null,
    },
    locale: {
        back: 'Back',
        close: 'Close',
        last: 'Last',
        next: 'Next',
        skip: 'Skip',
        },
  };

AtiTourGuide.propTypes = {
    /**
     * Run/stop the tour
     */
    run: PropTypes.bool.isRequired,
    /**
     * A React component or function to be used instead the default Beacon
     */
    beaconComponent: PropTypes.element,
    /**
     * The tour is played sequentially with the Next button
     */
    continuous: PropTypes.bool,
    /**
     * Log Joyride's actions to the console
     */
    debug: PropTypes.bool,
    /**
     * Disable closing the tooltip on ESC
     */
    disableCloseOnEsc: PropTypes.bool,
    /**
     * Don't show the overlay
     */
    disableOverlay: PropTypes.bool,
    /**
     * Don't close the tooltip when clicking the overlay
     */
    disableOverlayClose: PropTypes.bool,
    /**
     * Disable auto scrolling between steps
     */
    disableScrolling: PropTypes.bool,
    /**
     * Options to be passed to react-floater
     */
    floaterProps: PropTypes.object,
    /**
     * Override the styling of the Tooltip globally
     */
    styles: PropTypes.object,
    /**
     * A React component or function to be used instead the default Tooltip excluding the arrow
     */
    tooltipComponent: PropTypes.element,
    /**
     * Hide the "back" button
     */
    hideBackButton: PropTypes.bool,
    /**
     * The strings used in the tooltip
     */
    locale: PropTypes.shape({
        back: PropTypes.string,
        close: PropTypes.string,
        last: PropTypes.string,
        next: PropTypes.string,
        skip: PropTypes.string,
    }),
    /**
     * The scroll distance from the element scrollTop value
     */
    scrollOffset: PropTypes.number,
    /**
     * Scroll the page for the first step
     */
    scrollToFirstStep: PropTypes.bool,
    /**
     * Display the tour progress in the next button _e.g. 2/5 _in continuous tours.
     */
    showProgress: PropTypes.bool,
    /**
     * Display a button to skip the tour
     */
    showSkipButton: PropTypes.bool,
    /**
     * Allow mouse and touch events thru the spotlight. You can click links in your app
     */
    spotlightClicks: PropTypes.bool,
    /**
     * The padding of the spotlight
     */
    spotlightPadding: PropTypes.oneOfType([PropTypes.bool,PropTypes.number]),
    /**
     * The tour's steps
     */
    steps: PropTypes.shape({
        /**
         * A React component or function to be used instead the default Tooltip excluding the arrow
         */
        tooltipComponent: PropTypes.element,
        /**
         * Display the tour progress in the next button _e.g. 2/5 _in continuous tours.
         */
        showProgress: PropTypes.bool,
        /**
         * Display a button to skip the tour
         */
        showSkipButton: PropTypes.bool,
        /**
         * Allow mouse and touch events thru the spotlight. You can click links in your app
         */
        spotlightClicks: PropTypes.bool,
        /**
         * The padding of the spotlight
         */
        spotlightPadding: PropTypes.oneOfType([PropTypes.bool,PropTypes.number]),
        /**
         * Hide the "back" button
         */
        hideBackButton: PropTypes.bool,
        /**
         * The strings used in the tooltip
         */
        locale: PropTypes.shape({
            back: PropTypes.string,
            close: PropTypes.string,
            last: PropTypes.string,
            next: PropTypes.string,
            skip: PropTypes.string,
        }),
        /**
         * Disable auto scrolling between steps
         */
        disableScrolling: PropTypes.bool,
        /**
         * Options to be passed to react-floater
         */
        floaterProps: PropTypes.object,
        /**
         * Override the styling of the Tooltip globally
         */
        styles: PropTypes.object,
        /**
         * Disable closing the tooltip on ESC
         */
        disableCloseOnEsc: PropTypes.bool,
        /**
         * Don't show the overlay
         */
        disableOverlay: PropTypes.bool,
        /**
         * Don't close the tooltip when clicking the overlay
         */
        disableOverlayClose: PropTypes.bool,
        /**
         * A React component or function to be used instead the default Beacon
         */
        beaconComponent: PropTypes.element,
        /**
         * The tooltip's body
         */
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        /**
         * Don't show the Beacon before the tooltip
         */
        disableBeacon: PropTypes.bool,
        /**
         * The event to trigger the beacon. It can be click or hover
         */
        event: PropTypes.oneOf(['click', 'hover']),
        /**
         * Force the step to be fixed
         */
        isFixed: PropTypes.bool,
        /**
         * The distance from the target to the tooltip
         */
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * The placement of the beacon and tooltip
         */
        placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'auto', 'center']),
        /**
         * The placement of the beacon
         */
        placementBeacon: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        /**
         * Don't show the Beacon before the tooltip
         */
        styles: PropTypes.object,
        /**
         * The target for the step. It can be a CSS selector or an HtmlElement directly (but using refs created in the same render would required an additional render afterwards)
         */
        target: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        /**
         * The tooltip's title
         */
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }).isRequired,
    /**
     * callback: It will be called when Joyride's state changes. it returns a single parameter with the state
     */
    events: PropTypes.shape({
        callback: PropTypes.func,
    }),
}

export default AtiTourGuide;
