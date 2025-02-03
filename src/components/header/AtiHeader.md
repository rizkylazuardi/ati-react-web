## AtiHeader
The top layout with default style, in which any element can be nested, and must be placed in Layout.

## Usage
Customize Usage

You can customize header component as simple as the example below, depends on your need and the properties 
```js
//import Header component, mandatory things you must do
import AtiHeader from './AtiHeader';

    // Tag for component header 
    <AtiHeader style={{background: '#1890ff'}}>
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Menu 1</Menu.Item>
        <Menu.Item key="2">Menu 2</Menu.Item>
        <Menu.Item key="3">Menu 3</Menu.Item>
      </Menu> 

        </AtiHeader>
```

Basic Usage
The most basic usage.
```js
import AtiHeader from './AtiHeader';

     <AtiHeader/>
```


