# AtiInputWithMask

## General

Base component that for use to help create text-based input components with masking support.
See [Text Mask](https://github.com/text-mask/text-mask)
that tag is fully compatible with `<input/>` element. So, we can pass it CSS classes, a placeholder attribute, or even an onBlur handler.

## Example

### `phoneNumber`

a mask for a Indonesian phone number such as +62 (812) 99039695, could be:
```js
['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/]
```

```js
import AtiInputWithMask from './AtiInputWithMask';

<AtiInputWithMask 
    id="id"
    name="name"
    mask={['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/]} 
    guide={true}
    placeholder="Input your phone number"
    placeholderChar={'_'}
    keepCharPositions={true}
/>
```