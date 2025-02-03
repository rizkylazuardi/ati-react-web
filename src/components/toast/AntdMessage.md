## Message
Display global messages as feedback in response to user operations.

## When to Use
To provide feedback such as success, warning, error etc.
A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## Usage
You can use badge component as simple as the example below, depends on your need and the parameter 

### `Sample Type (success,error,warning,info)`

```js
    const message = 'Hello Guys!';
    const duration = 4;

    const success = () => {
        AtiMessage({type:'success', message, duration});
    };
    const warning = () => {
        AtiMessage({type:'warning', message, duration});
    };
    const error = () => {
        AtiMessage({type:'error', message, duration});
    };
    const info = () => {
        AtiMessage({type:'info', message, duration});
    };

    <Button onClick={success}>Display Success Message</Button>
```


