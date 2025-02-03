# ati-react-web

> Anabatic React web component

[![NPM](https://img.shields.io/npm/v/atic-react-web.svg)](https://www.npmjs.com/package/atic-react-web) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## ✨ Features

- An enterprise-class UI design system for web applications.
- A set of high-quality React components out of the box.
- The whole package of development and design resources and tools.

## 🖥 Environment Support

* Modern browsers and Internet Explorer 10+
* Server-side Rendering
* [Electron](http://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## 📦 Install

```bash
npm install --save ati-react-web
```
or
```bash
yarn add ati-react-web
```
after that you need to install peerdeps to install all required dependencies.
```bash
install-peerdeps ati-react-web -Y --registry http://10.1.50.104:4873/
```

## 🔨 Usage

```jsx
import React, { Component } from 'react'

import { AtiButton } from 'ati-react-web'

class Example extends Component {
  render () {
    return (
      <AtiButton type='button' id='example-button' text='Example Button' events={{onClick:()=>{}}} />
    )
  }
}
```

## License

MIT © [Anabatic](https://github.com/Anabatic)
