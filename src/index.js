import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/

import Calculadora from './main/Calculator';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
