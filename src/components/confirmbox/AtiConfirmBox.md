# AtiConfirmBox

## General

Base component that for use to help create popup confirmation message , 
to trigger your confirmation box to show or hide please set the attribute `isOpen` with value 
true or false, you can maintain the value using state.
and you can put the confirmation message on attribute text

## Example

### `simple`

```js
<AtiConfirmBox
      isOpen={true}
      events={
        {
          onConfirm: () => {
            //do anything in this part
          }
        }
      }
      text="Anda yakin ingin memproses data ?"
      />
```