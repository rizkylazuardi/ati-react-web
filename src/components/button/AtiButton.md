# AtiButton

## General

Base component that for use to help create button element instead of bootstrap button , 
check [Reactstrap Button](http://reactstrap.github.io/components/buttons/)
the option style you can use attribute color : primary,secondary,success,info,warning,danger,link
but you can customize button style with your css classname, just add your class on attribute className.
to add onclick events, just add attribute events on AtiButton with object of function value.

## Example

### `default`

```js
<AtiButton type="button" 
    id="primary" text="primary" 
    color="primary" 
    size="lg"
    className="my-css-class"
    disabled={false}
    outline={true}
    block={false}
    events={
        {onClick:()=>{
            console.log("clicked");
            }
        }
    }
></AtiButton>
```