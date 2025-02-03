import { configure,addDecorator,setAddon } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import addWithDoc from 'storybook-addon-props';
import './../src/styles.css';


const req = require.context('../src', true, /\.stories\.js$/)
setAddon(addWithDoc);
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

