# AtiBreadcrumb

## General

Base component that for use to displays the current location within a hierarchy. 
It allows going back to states higher up in the hierarchy.
Learn more [breadcrumb](https://ant.design/components/breadcrumb/).

## Example

### `default`

Example using default breadcrumb, 
use `href` for breadcrumb item value. 

```js
<AtiBreadcrumb>
    <AtiBreadcrumbItem href="https://ant.design/">
        Ant Design
    </AtiBreadcrumbItem>
    <AtiBreadcrumbItem href="https://ant.design/components/breadcrumb/">
        Breadcrumb
    </AtiBreadcrumbItem>
</AtiBreadcrumb>
```

### `Custom DataSource`
Example using default breadcrumb, 
use `href` for breadcrumb item value. 

```js
  const dataSource = [
      {url: 'https://ant.design/', component: 'Ant Design'},
      {url: 'https://ant.design/components/breadcrumb/',
        component: <span><Icon type='home' /> Breadcrumb</span>
      }
    ]

    return (
      <AtiBreadcrumb dataSource={dataSource} />
    )
```