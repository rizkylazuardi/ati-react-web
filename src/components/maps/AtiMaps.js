import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display content related to a single subject.
 * @version 1.0
 */

class AtiMaps extends React.Component {
  render() {
    const {center, zoom, hoverDistance, apiKey, childs} = this.props
    const childsRender = childs !== undefined && childs != null ? childs : null
    return (<GoogleMapReact
      bootstrapURLKeys={{
        key: apiKey,
        language: 'id',
        region: 'id',
        libraries: 'geometry,drawing,places'
      }}
      zoom={zoom}
      center={[center.lat, center.lng]}
      hoverDistance={hoverDistance}
    >
      {childsRender}
    </GoogleMapReact>
    )
  }
}
AtiMaps.defaultProps = {
  zoom: 8,
  hoverDistance: 30,
  events: {}
}

AtiMaps.propTypes = {
  childs: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  /**
     * Set the zoom level of the maps
     */
  zoom: PropTypes.number,
  // hoverKey: PropTypes.string,
  // clickKey: PropTypes.string,
  /**
     * Set the map center using lat & lng
     */
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  /**
     * Google Map URL with Key
     */
  apiKey: PropTypes.string.isRequired,
  hoverDistance: PropTypes.number
}

export default AtiMaps
