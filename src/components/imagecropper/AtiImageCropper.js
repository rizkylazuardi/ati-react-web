import React from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import PropTypes from 'prop-types'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display content related to a single subject.
 * @version 1.0
 */

class AtiImageCropper extends React.Component {
    state = {
      src: '',
      crop: null
    }

    onImageLoaded = image => {
      //console.log('onImageLoaded', image)
    }

    onCropComplete = (crop, pixelCrop) => {
      //console.log('onCropComplete', crop)
      //console.log('onCropComplete', pixelCrop)
    }
    /**
     * A callback which happens for every change of the crop (i.e. many times as you are dragging/resizing).
     * Passes the current crop state object, as well as a pixel-converted crop for your convenience.
     */
    onCropChange = (crop) => {
      this.setState({ crop })
    }

    componentDidMount() {
      const {crop, src} = this.props
      if (src !== undefined && src != null) { this.setState({ src }) }
      if (crop !== undefined && crop != null) { this.setState({ crop }) }
    }

    render() {
      const {events} = this.props
      const {src, crop, disabled, style} = this.state
      const functionComplete = events != null && events.onCropComplete != null ? events.onCropComplete : this.onCropComplete
      const functionImageLoaded = events != null && events.onImageLoaded != null ? events.onImageLoaded : this.onImageLoaded
      const functionOnCropChange = events != null && events.onCropChange != null ? events.onCropChange : this.onCropChange
      return (
        <ReactCrop
          src={src}
          crop={crop}
          onImageLoaded={functionImageLoaded}
          onComplete={functionComplete}
          onChange={functionOnCropChange}
          disabled={disabled}
          style={style} />
      )
    }
}

AtiImageCropper.defaultProps = {
  events: {
  },
  disabled: false,
  style: {}

}

AtiImageCropper.propTypes = {
  /**
     * All crop values are in percentages, and are relative to the image. All crop params are optional.
     */
  crop: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  /**
     * You can of course pass a blob url or base64 data.
     */
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  /**
     * confirmation events : onImageLoaded, onComplete
     * onComplete (crop, pixelcorp) : A callback which happens after a resize, drag, or nudge. Passes the current crop state object, as well as a pixel-converted crop for your convenience.
     * onImageLoaded(image) : A callback which happens when the image is loaded. Passes the image DOM element.
     */
  events: PropTypes.shape({
    onImageLoaded: PropTypes.func,
    onComplete: PropTypes.func,
    onCropChange: PropTypes.func
  })
}

export default AtiImageCropper
