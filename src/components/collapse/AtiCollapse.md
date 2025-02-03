# AtiCollapse

## General

Base component that for use to help create content area which can be collapsed and expanded..
this component is instead of [Ant Design Collapse](https://ant.design/components/collapse/).

## When To Use

    * Can be used to group or hide complex regions to keep the page clean

    * Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.

## Example

### `Sample Default`
```js
const dataPanel = [
            {header: 'Panel 1', key: '1', style:{}, disabled: true, showArrow: true, text:<p>This is Content of panel 1</p>},
            {header: 'Panel 2', key: '2', style:{}, showArrow: true, text:<p>This is Content of panel 2</p>},
            {header: 'Panel 3', key: '3', style:{}, showArrow: false, text:<p>This is Content of panel 3</p>},
            {header: 'Panel 4', key: '4', style:{}, showArrow: true, text:<p>This is Content of panel 4</p>},
        ];
        
            <AtiCollapse
                        defaultActiveKey={['1','3']}
                        bordered={true}
                        events={
                            {
                                onChange: (key) => {
                                    console.log(key);
                                }    
                            }
                        }
                        data={dataPanel}
                    />
        
```

### `Borderless`
just set the attribute bordered to `false`
```js
const dataPanel = [
            {header: 'Panel 1', key: '1', style:{}, disabled: true, showArrow: true, text:<p>This is Content of panel 1</p>},
            {header: 'Panel 2', key: '2', style:{}, showArrow: true, text:<p>This is Content of panel 2</p>},
            {header: 'Panel 3', key: '3', style:{}, showArrow: false, text:<p>This is Content of panel 3</p>},
            {header: 'Panel 4', key: '4', style:{}, showArrow: true, text:<p>This is Content of panel 4</p>},
        ];

        return (
            <AtiCollapse
                        defaultActiveKey={['1']}
                        bordered={false}
                        events={
                            {
                                onChange: (key) => {
                                    console.log(key);
                                }    
                            }
                        }
                        data={dataPanel}
                    />
                
        )
```


### `Custom Panel Style`

```js
const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
          };

        const dataPanels = [
            {header: 'Panel 1', key: '1', style:customPanelStyle, disabled: true, showArrow: true, text:<p>This is Content of panel 1</p>},
            {header: 'Panel 2', key: '2', style:customPanelStyle, showArrow: true, text:<p>This is Content of panel 2</p>},
            {header: 'Panel 3', key: '3', style:customPanelStyle, showArrow: false, text:<p>This is Content of panel 3</p>},
            {header: 'Panel 4', key: '4', style:customPanelStyle, showArrow: true, text:<p>This is Content of panel 4</p>},
        ];
        return (
            <AtiCollapse
                        defaultActiveKey={['1']}
                        bordered={false}
                        events={
                            {
                                onChange: (key) => {
                                    console.log(key);
                                }    
                            }
                        }
                        data={dataPanels}
                    />
                
        )
```