import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import AtiMaps from './AtiMaps'
import { withReadme } from 'storybook-readme'
import PropTypes from 'prop-types'

import AtiMapsMd from './AtiMaps.md'

storiesOf('Maps', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiMapsMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('AtiMaps default', AtiMaps, null, () => {
    const data = [
      {key: '1', title: 'Graha Anabatic', withInfoWindow: false, position: {lat: -6.255574, lng: 106.619905}},
      {key: '2', title: 'Anak Panah Cyberschool', position: {lat: -6.257157, lng: 106.619088}},
      {key: '3', title: 'Summarecon Mal Serpong', withInfoWindow: true, position: {lat: -6.241174, lng: 106.628361}}
    ]

    const dataKnob = object('data', data, null)

    const AnyReactComponent = ({ text }) => (
      <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
      }}>
        {text}
      </div>
    )
    AnyReactComponent.propTypes = {
      text: PropTypes.string
    }
    const renderData = () => {
      return dataKnob.map((item) => {
        return (
          <AnyReactComponent
            key={item.key}
            lat={item.position.lat}
            lng={item.position.lng}
            text={item.title} />
        )
      })
    }

    return (
      <div style={{width: '400px', height: '400px'}}>
        <AtiMaps
          childs={renderData()}
          apiKey='AIzaSyDsY1K5S-7lxxV0X_aSY6i3t7DW4Sd6U7o'
          center={{lat: -6.255574, lng: 106.619905}}
        />
      </div>
    )
  }
  )
