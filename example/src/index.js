import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_id from 'react-intl/locale-data/id';

addLocaleData([...locale_en, ...locale_id]);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
