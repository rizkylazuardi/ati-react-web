import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, select, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiCarousel from './AtiCarousel'
import AtiCarouselMd from './AtiCarousel.md'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

storiesOf('Carousel - Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiCarouselMd))
  .addWithDoc('Default', AtiCarousel, null, () => {
    const dataSourceBanner = [
      {image: 'http://react-responsive-carousel.js.org/assets/1.jpeg', title: 'This is my plan'},
      {image: 'http://react-responsive-carousel.js.org/assets/2.jpeg', title: 'This is your plan'},
      {image: 'http://react-responsive-carousel.js.org/assets/3.jpeg', title: 'This is our plan'},
      {image: 'http://react-responsive-carousel.js.org/assets/4.jpeg', title: 'There is no plan'}
    ]
    return (
      <AtiCarousel
        dataSource={object('dataSource', dataSourceBanner)}
        showArrows={boolean('showArrows', true)}
        showStatus={boolean('showStatus', true)}
        showIndicators={boolean('showIndicators', true)}
        showThumbs={boolean('showThumbs', true)}
        infiniteLoop={boolean('infiniteLoop', true)}
        selectedItem={number('selectedItem', 0)}
        axis={select('axis', {horizontal: 'horizontal', vertical: 'vertical'}, 'horizontal')}
        width={number('width', 100)}
        useKeyboardArrows={boolean('useKeyboardArrows', false)}
        autoPlay={boolean('autoPlay', true)}
        stopOnHover={boolean('stopOnHover', true)}
        interval={number('interval', 5000)}
        transitionTime={number('transitionTime', 350)}
        swipeScrollTolerance={number('swipeScrollTolerance', 5)}
        swipeable={boolean('swipeable', true)}
        emulateTouch={boolean('emulateTouch', false)}
        centerMode={boolean('centerMode', false)}
        centerSlidePercentage={number('centerSlidePercentage', 80)}
      />

    )
  }
  )
