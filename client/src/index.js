
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth } from './contexts/auth/AuthStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Auth>
    <App />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();