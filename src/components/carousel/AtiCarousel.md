# AtiCarousel

## General

Base component that for use to help create banner or carousel component
this component is instead of [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel).

## When To Use

    * Create a banner or thumbnail banner

    * Create highlight news on website

## Example

### `Sample Default`
```js
 const dataSourceBanner = [
        {image: 'http://react-responsive-carousel.js.org/assets/1.jpeg', title: 'This is my plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/2.jpeg', title: 'This is your plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/3.jpeg', title: 'This is our plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/4.jpeg', title: 'There is no plan'},
    ];
        return (
            <AtiCarousel 
                dataSource={dataSourceBanner}
                >
            </AtiCarousel>
                
        )
        
```

### `with Configuration`

```js
 const dataSourceBanner = [
        {image: 'http://react-responsive-carousel.js.org/assets/1.jpeg', title: 'This is my plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/2.jpeg', title: 'This is your plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/3.jpeg', title: 'This is our plan'},
        {image: 'http://react-responsive-carousel.js.org/assets/4.jpeg', title: 'There is no plan'},
    ];
        return (
            <AtiCarousel 
                dataSource={dataSourceBanner}
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                showThumbs={true}
                infiniteLoop={true}
                selectedItem={0}
                axis='horizontal'
                width={100}
                useKeyboardArrows={false}
                autoPlay={true}
                stopOnHover={true}
                interval={5000}
                transitionTime={350}
                swipeScrollTolerance={5}
                swipeable={true}
                emulateTouch={false}
                centerMode={false}
                centerSlidePercentage={80}
                >
            </AtiCarousel>

```

