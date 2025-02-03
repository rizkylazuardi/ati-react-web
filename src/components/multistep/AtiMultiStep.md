# AtiMultiStep

## General

Base component that for use to help create multiStep element with dynamic dataSource that you 
can provide as Json Array object on parameter `dataSource`
the ` dataSource` will be iterate and shown as a single `<TabPane>` that the value and label will be provide from attribute `dataSource`
reference [Ant Design](https://ant.design/components/steps/).
## Example

### `simple`

This is an example of simple Multistep .

```js
const multiStepSource = [
    {title: 'Simple Registration', icon: <Icon type="apple" />, description:'desc 1', stepContent: <span>Registration</span>},
    {title: 'Full Registration', icon: <Icon type="apple" />, description:'desc 2', stepContent: <span>Full Registration</span>},
    {title: 'Account Security', icon: <Icon type="apple" />, description:'desc 3', stepContent: <span>Account Security</span>},
];

 <AtiMultiStep 
                        dataSource={multiStepSource}
                        currentStep={this.state.currentStep}
                    ></AtiMultiStep>
```