import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_tr from "./translations/tr/common.json";
import common_en from "./translations/en/common.json";
import common_de from "./translations/en/common.json";

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
  interpolation: { escapeValue: false },  
  lng: 'tr',                               
  resources: {
      en: {
          common: common_en
      },
      tr: {
          common: common_tr
      },
  },
});


root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
