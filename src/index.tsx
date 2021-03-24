import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/main';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/* Disable Workbox Mode Debug */
declare const self: ServiceWorkerGlobalScope;

// eslint-disable-next-line
self.__WB_DISABLE_DEV_LOGS = process.env.NODE_ENV !== 'development';
/* ---- */

ReactDOM.render(<App />, document.getElementById('root'));

/* Register do service worker */
serviceWorkerRegistration.register();
