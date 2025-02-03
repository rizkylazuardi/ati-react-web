# AtiDashboard

## General

Base component that for use to help create Dashboard with drag and resizeable that you 
can provide as component `AtiDashboardItem`
the ` AtiDashboardItem` will be iterate and shown dashboard content that the value and label will be provide 
from attribute `AtiDashboardItem`

## Important

Key must start from 0

## Example

### `custom`

Example dashboard with custom format, 
User can set resizeable and dragable.
How to use : 
 - i is for the key in `AtiDashboardItem`
 - adjust the x-axis based on cols as you want
 size of cols depends on your resolution screen  
 - adjust y-axis and h (height) as you want  

When in responsive mode, you should supply at least one breakpoint via the `layouts` property.

When using `layouts`, it is best to supply as many breakpoints as possible, especially the largest one. If the largest is provided, RGL will attempt to interpolate the rest.

```js

var layouts = {lg: [
            {i:'0', x: 0, y: 0, w: 10, h: 2, static: true}, //is not resizeable and dragable
            {i:'1',x: 11, y: 0, w: 10, h: 2},
            {i:'2',x: 22, y: 0, w: 10, h: 2},
            {i:'3',x: 33, y: 0, w: 10, h: 2},
            {i:'4',x: 0, y: 2.5, w: 32, h: 6},
            {i:'5',x: 33, y: 2.5, w: 10, h: 6}
        ]};

<AtiDashboard
        cols = {object("cols",{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })}
        layouts = {layouts}
        // lg for large resolution, md : medium, sm : small, xs : xtra small, xxs : xstra xstra small
        isResizable = {boolean("isResizeable", true)}
        isDraggable = {boolean("isDraggable", true)}
        preventCollision = {boolean("preventCollision", false)}
        autoSize = {boolean("autoSize", true)}
        >
        <AtiDashboardItem key = "0">
                <div style = {{backgroundColor : "#123456", width : '100%', height : '100%'}}>
                test
                </div>
        </AtiDashboardItem>
        <AtiDashboardItem key = "1">
                <span className="text">This Tab 2 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key = "2">
                <span className="text">This Tab 3 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key = "3">
                <span className="text">This Tab 4 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key = "4">
                <span className="text">This Tab 5 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key = "5">
                <span className="text">This Tab 6 Content</span>
        </AtiDashboardItem>
</AtiDashboard>
```