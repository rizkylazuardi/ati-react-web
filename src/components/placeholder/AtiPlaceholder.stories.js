import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiPlaceholderMd from './AtiPlaceholder.md'
import AtiPlaceholder from './AtiPlaceholder'
import { withState } from '@dump247/storybook-state'
import 'antd/dist/antd.css'

storiesOf('Placeholder', module)
  .addDecorator(withKnobs)
// .addDecorator(getStory=><div style={{padding:"10px"}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiPlaceholderMd))
  .addWithDoc('Paragraph Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div 
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
        <AtiPlaceholder
          loading={boolean('loading', store.state.loading)}
          type='paragraph'
          animate={true}
          speed={2}
          width={400}
          height={130}
          count={5}
          primaryColor='#f3f3f3'
          secondaryColor='#ecebeb'
          style={
            {
              width: '60%',
            }
          }
        >
          <div>
            <p>
                          Lorem ipsum dolor sit amet, consectetur<br />
                          sed do eiusmod tempor incididunt<br />
                          ut labore et dolore magna aliqua.<br />
                          Ut enim ad minim veniam, quis nostrud exercitation<br />
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
            </p>
          </div>
        </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('Instagram Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='instagram'
        animate={true}
        speed={2}
        width={400}
        height={480}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
        style={
          {
            width: '50%'
          }
        }

      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('Facebook Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='facebook'
        // animate = {true}
        // speed = {2}
        // width = {400}
        // height = {130}
        // primaryColor = "#f3f3f3"
        // secondaryColor = "#ecebeb"
        style={
          {
            width: '50%'
          }
        }
      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('BulletList Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='bulletList'
        animate={true}
        speed={2}
        width={400}
        height={130}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
        style={
          {
            width: '50%'
          }
        }
      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('List Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='list'
        animate={true}
        speed={2}
        width={400}
        height={130}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
        style={
          {
            width: '50%'
          }
        }
      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('Code Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='code'
        animate={true}
        speed={2}
        width={400}
        height={130}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
        style={
          {
            width: '50%'
          }
        }
      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
  .addWithDoc('Custom Style', AtiPlaceholder, null, withState({loading: true})(({ store }) => {
    const contentLoad = [
      {type: 'rect', x: '0', y: '0', rx: '5', ry: '5', width: '70', height: '70'},
      {type: 'rect', x: '80', y: '17', rx: '4', ry: '4', width: '300', height: '13'},
      {type: 'rect', x: '80', y: '40', rx: '3', ry: '3', width: '250', height: '10'}
    ]

    return (
      <div
        style={
                {
                  marginLeft: '50px'
                }
              }
      >
      <AtiPlaceholder
        loading={boolean('loading', store.state.loading)}
        type='custom'
        animate={true}
        speed={2}
        width={400}
        height={140}
        primaryColor='#333'
        secondaryColor='#999'
        style={
          {
            width: '50%'
          }
        }
        contentLoad={contentLoad}
      >
          <p>
                        Lorem ipsum dolor sit amet, consectetur<br />
                        sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.<br />
                        Ut enim ad minim veniam, quis nostrud exercitation<br />
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          </p>
      </AtiPlaceholder>
      </div>
    )
  }))
