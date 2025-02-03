# AtiPagination

## General

Base component that for use to help create pagination element
A long list can be divided into several pages by Pagination, 
and only one page will be loaded at a time.
this component is instead of [Ant Design Pagination](https://ant.design/components/pagination/).

## When To Use

    * When it will take a long time to load/render all items.

    * If you want to browse the data by navigating through pages.

## Example

### `Sample Default`
```js
<AtiPagination 
            current={1} 
            total={50}/>        
```

### `Simple`
just set the attribute `simple` to `true`
```js
<AtiPagination
            simple={true}
            current={1}
            total={50)/>
```


### `Custom Label Info`

```js
    <AtiPagination
        total={85}
        events={
            {
                showTotal:(total) => `Total ${total} items`,
            }
        }
        pageSize={20}
        current={1}  
    />
```
## `Another sample`

```js
<AtiPagination
        total={85}
        events={
            {
                showTotal:(total, range) => `${range[0]}-${range[1]} of ${total} items`
            }
        }
        pageSize={20}
        current={1}  
    />
```