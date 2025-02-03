# AtiTourGuide
Use it to showcase your app for new users! Or explain functionality of complex features!

## API
```js
const steps = [
    {
        target: '.class_a',
        content: 'This if my awesome feature!',
        placement: select('Placement', placements, 'bottom'),
        placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
    },
    {
        target: '.class_b',
        content: 'This if my awesome feature!',
        placement: select('Placement', placements, 'bottom'),
        placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
    },
    {
        target: '.class_c',
        content: 'This if my awesome feature!',
        placement: select('Placement', placements, 'bottom'),
        placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
    },
]

 <AtiTourGuide
    run={true}
    steps={steps}
    continuous={true}
    scrollToFirstStep={true}
    showProgress={true}
    showSkipButton={true}
/>

```

## PropTypes

### Props

**beaconComponent** {React.Node}  
A React component or function to be used instead the default Beacon.

**callback** {function}  
It will be called when Joyride's state changes. it returns a single parameter with the state.

**continuous** {boolean} ▶︎ `false`  
The tour is played sequentially with the **Next** button.

**debug** {boolean} ▶︎ `false`  
Log Joyride's actions to the console.

**disableCloseOnEsc** {boolean} ▶︎ `false`  
Disable closing the tooltip on ESC.

**disableOverlay** {boolean} ▶︎ `false`  
Don't show the overlay.

**disableOverlayClose** {boolean} ▶︎ `false`  
Don't close the tooltip when clicking the overlay.

**disableScrolling** {boolean} ▶︎ `false`  
Disable auto scrolling between steps.

**floaterProps** {Object}  
Options to be passed to [react-floater](https://github.com/gilbarbara/react-floater).

**hideBackButton** {boolean} ▶︎ `false`  
Hide the "back" button.

**locale** {Object} ▶︎ `{ back: 'Back', close: 'Close', last: 'Last', next: 'Next', skip: 'Skip' }`  
The strings used in the tooltip.

**run** {boolean} ▶︎ `true`  
Run/stop the tour.

**scrollOffset** {number} ▶︎ `20`  
The scroll distance from the element scrollTop value.

**scrollToFirstStep** {boolean} ▶︎ `false`  
Scroll the page for the first step.

**showProgress** {boolean} ▶︎ `false`  
Display the tour progress in the next button \_e.g. 2/5 \_in `continuous` tours.

**showSkipButton** {boolean} ▶︎ `false`  
Display a button to skip the tour.

**spotlightClicks** {boolean} ▶︎ `false`  
Allow mouse and touch events thru the spotlight. You can click links in your app.

**spotlightPadding** {boolean} ▶︎ `10`  
The padding of the spotlight.

**stepIndex** {number}  
Setting a number here will turn Joyride into `controlled` mode.  
You will receive the state events in the `callback` and you'll have to update this prop by yourself.

**steps** {Array&lt;StepProps&gt;} - **required**  
The tour's steps.

**styles** {Object}  
Override the [styling](styling.md) of the Tooltip globally

**tooltipComponent** {React.Node}  
A React component or function to be used instead the default Tooltip excluding the arrow.

### Step

The step is an plain object that only requires two properties to be valid: `target` and `content` \(or `tooltipComponent`\).

```text
{
  target: '.my-selector',
  content: 'This is my super awesome feature!'
}
```

It will inherit some properties from the Joyride's own [props](props.md) that can be overridden per step:

* beaconComponent
* disableCloseOnEsc
* disableOverlay
* disableOverlayClose
* disableScrolling
* floaterProps (check the [getMergedStep](../src/modules/step.js) function for more information)
* hideBackButton
* locale
* showProgress
* showSkipButton
* spotlightClicks
* spotlightPadding
* styles
* tooltipComponent

#### And you can use these

**content** {React.Node\|string}  
The tooltip's body.

**disableBeacon** {boolean} ▶︎ `false`  
Don't show the Beacon before the tooltip.

**event** {string} ▶︎ `click`  
The event to trigger the beacon. It can be _**click**_ or _**hover**_

**isFixed** {boolean} ▶︎ `false`  
Force the step to be fixed.

**offset** {React.Node\|string} ▶︎ `10`  
The distance from the target to the tooltip.

**placement** {string} ▶︎ `bottom`  
The placement of the beacon and tooltip. It will re-position itself if there's no space available.  
It can be:

* top \(top-start, top-end\)
* bottom \(bottom-start, bottom-end\)
* left \(left-start, left-end\)
* right \(right-start, right-end
* auto
* center

Check [react-floater](https://github.com/gilbarbara/react-floater) for more information.

**placementBeacon** {string} ▶︎ placement  
The placement of the beacon. It will use the placement if nothing is passed and it can be: `top, bottom, left, right`.

**styles** {Object}  
Override the [styling](styling.md) of the step's Tooltip

**target** {Element\|string} - **required**  
The target for the step. It can be a [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) or an HtmlElement directly \(but using refs created in the same render would required an additional render afterwards\).

**title** {React.Node\|string}  
The tooltip's title.

### Styling

To update the default theme, just pass a `styles` prop to the AtiTourGuide component or directly in step props.  
You can control the overall theme with the special `options` object.

```text
const defaultOptions = {
  arrowColor: '#fff',
  backgroundColor: '#fff',
  beaconSize: 36,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  primaryColor: '#f04',
  spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  textColor: '#333',
  width: undefined,
  zIndex: 100,
};
```

##### Example

```js
import { AtiTourGuide } from 'ati-react-web';

<div className="app">
    <AtiTourGuide
        run={run}
        steps={steps}
        styles={{
        options: {
            arrowColor: '#e3ffeb',
            backgroundColor: '#e3ffeb',
            overlayColor: 'rgba(79, 26, 0, 0.4)',
            primaryColor: '#000',
            textColor: '#004a14',
            width: 900,
        }
        }}
        ...
    />
    ...
</div>
}
```

You can also customize any element independently. Check [styles.js](https://github.com/gilbarbara/react-joyride/tree/3e08384415a831b20ce21c8423b6c271ad419fbf/src/styles.js) for more information.

If you want to customize the arrow, check [react-floater](https://github.com/gilbarbara/react-floater) documentation.

