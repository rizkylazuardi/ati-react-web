# AtiPlaceholder

## General

A ContentLoader is a React component that uses SVG to create a collection of loaders which simulates the structure of the content that will be loaded, similar to Facebook cards loaders. For custom online tool visit http://danilowoz.com/create-content-loader/

## Example

### `Parafraph style`

Example Placeholder with Paragraph Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type= "paragraph"
    count = {5}
    style= {
        {
            width: "50%"
        }
    }
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `Facebook style`

Example Placeholder with Facebook Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type = "facebook"
    style= {
        {
            width: "50%"
        }
    }
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `Instagram style`

Example Placeholder with Instagram Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type = "instagram"
    animate = {true}
    speed = {2}
    width = {400}
    height = {480}
    primaryColor = "#f3f3f3"
    secondaryColor = "#ecebeb"
    style= {
        {
            width: "50%"
        }
    }
        
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `BulletList style`

Example Placeholder with BulletList Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type = "bulletList"
    style= {
        {
            width: "50%"
        }
    }
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `List style`

Example Placeholder with List Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type = "list"
    style= {
        {
            width: "50%"
        }
    }
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `Code style`

Example Placeholder with Code Style format, 
```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type = "code"
    style= {
        {
            width: "50%"
        }
    }
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            
```

### `Custom`

Placeholder with Custom Style format, 
Example : 

```js
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    *note : 
    x : x-axis coordinate
    y : y-axis coordinate
    rx : x-axis radius of the rounded corners of the rectangle
    rx : y-axis radius of the rounded corners of the rectangle
    width : The width of the rectangle
    height : The height of the rectanle
```

For more information search `svg`

```js

import AtiPlaceholder from './AtiPlaceholder';

state = {loading = null}

loadingFunction = () =>{
    //some code for load Data which change state
    // loading true for showing skeleton 
    // loading false for showing content
}

const contentLoad = [
    {type: 'rect', x:"0" , y:"0", rx:"5", ry:"5", width:"70", height:"70"},
    {type: 'rect', x:"80" , y:"17", rx:"4", ry:"4", width:"300", height:"13"},
    {type: 'rect', x:"80" , y:"40", rx:"3", ry:"3", width:"250", height:"10"}
];

<AtiPlaceholder
    loading = {boolean("loading", this.state.loading)}
    type= "custom"
    width = {400}
    height = {140}
    primaryColor = "#333"
    secondaryColor = "#999"
    style= {
        {
            width: "50%"
        }
    }
    contentLoad = {contentLoad}
>
    <div className="col-6">
        <h1>Lorem ipsum dolor</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            sed do eiusmod tempor incididunt<br />
            ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation<br />
            ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
        </p>
    </div>
</AtiPlaceholder>            

```

## Known Issues

### `Safari / iOS`

When using `rgba` as a `primaryColor` or `secondaryColor` value, Safari does not respect the alpha channel, meaning that the color will be opaque. To prevent this, instead of using an `rgba` value for `primaryColor/secondaryColor`, use the `rgb` equivalent and move the alpha channel value to the `primaryOpacity/secondaryOpacity` props.

```js

{/* Opaque color in Safari and iOS */}
<AtiPlaceholderCustom 
  primaryColor="rgba(0,0,0,0.06)" 
  secondaryColor="rgba(0,0,0,0.12)">


{/* Semi-transparent color in Safari and iOS */}
<AtiPlaceholderCustom
  primaryColor="rgb(0,0,0)"
  secondaryColor="rgb(0,0,0)"
  primaryOpacity={0.06}
  secondaryOpacity={0.12}>

  ```
