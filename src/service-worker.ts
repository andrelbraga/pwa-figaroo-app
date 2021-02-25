/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim, skipWaiting } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';


declare const self: ServiceWorkerGlobalScope;

clientsClaim()
skipWaiting()

precacheAndRoute(self.__WB_MANIFEST);

console.log(self)

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL('/index.html')
);

registerRoute(
  (req) => req.url.origin === self.location.origin && req.url.pathname.endsWith('.js'),
    new StaleWhileRevalidate({
      cacheName: 'js',
    })
);

registerRoute(
    (req) => req.url.origin === self.location.origin && req.url.pathname.endsWith('.png') && req.url.pathname.endsWith('.jpg'),
    new StaleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({ maxEntries: 50 }),
      ],
    })
);
