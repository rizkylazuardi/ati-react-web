---
category: Components
cols: 1
type: Navigation
title: Menu
---

Menu list of Navigation.

## Usage  
Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.

## API
```js
//create items for menu, can be created manually or from ajax
const menu = [
    {
      icon: 'dashboard',
      label: 'To Menu 1',
      to: 'hosea-satu',
    },
    {
      icon: 'dashboard',
      label: 'To Menu 2',
      to: 'hosea-dua',
    },
    {
      icon: 'bell',
      label: 'To Pretet',
      to: 'pretet',
    },
    {
      icon: 'bolt',
      label: 'Has Child Menu',
      content: [
        {
          icon: 'bolt',
          label: 'To Trias',
          to: '/',
        },
      ],
    },
    {
      icon: 'external-link',
      label: 'External Link',
      externalLink: true,
      to: 'https://www.google.com',
    },
  ];

//import side menu component, mandatory things you must do
import AtiSideMenu from './AtiSideMenu'

    //Tag for component single side menu 
    <AtiSideMenu
      datas={menu}
    />

```