importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "frontal-shift",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.19efd2393d2215de0812.js",
    "revision": "fe6aeb39eb9dc6486a6dc79f1d16e970"
  },
  {
    "url": "/_nuxt/app.97c76e70dd5a46a93a887f5388c281a2.css",
    "revision": "97c76e70dd5a46a93a887f5388c281a2"
  },
  {
    "url": "/_nuxt/layouts/default.bfdcb9bb025feed15e4f.js",
    "revision": "63d6e322179eb2ff9885a6fb256c1889"
  },
  {
    "url": "/_nuxt/layouts/default2.5cfd3c1b3c2b2e94a7b9.js",
    "revision": "3a7112a47924e615ccb4f87bac0cda17"
  },
  {
    "url": "/_nuxt/manifest.999f106b7eb3a0ac6068.js",
    "revision": "fe211857e5faed57cb4ac29296754e9e"
  },
  {
    "url": "/_nuxt/pages/_parent/_child/_slug/index.b45129460f2f47ec3129.js",
    "revision": "38630f6521281ce7a0c63319c720b432"
  },
  {
    "url": "/_nuxt/pages/_parent/_child/index.0b02881d2fbd7321cf1f.js",
    "revision": "fae0e3f7be393618f0b905a255bdf286"
  },
  {
    "url": "/_nuxt/pages/_parent/index.066939dfa2897b6f17ad.js",
    "revision": "bbfb6ba7a76b562ae006f1266ee0fc9c"
  },
  {
    "url": "/_nuxt/pages/index.939e71516f98a77c0395.js",
    "revision": "25ec583ab41ef0461ca860d0dd82fc2f"
  },
  {
    "url": "/_nuxt/pages/nos/_page/index.d8818a457d9da8c4f4f0.js",
    "revision": "d93f3c177eea55b17cbfdfd1d1560ee7"
  },
  {
    "url": "/_nuxt/pages/redactor/_author/index.2bc9d3d3905de2bb0640.js",
    "revision": "235d67eb388302df950238f569d41f0f"
  },
  {
    "url": "/_nuxt/vendor.31b95a60a3ac7d7da2a4.js",
    "revision": "141ba215d0d6eb8fa3c7b5af34953648"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

