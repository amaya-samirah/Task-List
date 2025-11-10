# Task-List

This web application allows multiple users to create and edit a list of tasks.


https://github.com/user-attachments/assets/ff0bf33c-6d2b-4883-88d9-e2772fab46f7


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```
Ensure you have 'postgresql@14' installed on your stystem.

Ensure you have the below packages installed...

```sh
npm ls
```

|-- @tsconfig/node22@22.0.2  
|-- @types/cookie-session@2.0.49  
|-- @types/express@5.0.5  
|-- @types/node@22.19.0  
|-- @vitejs/plugin-vue@6.0.1  
|-- @vue/tsconfig@0.8.1  
|-- cookie-session@2.1.1  
|-- express@5.1.0  
|-- npm-run-all2@8.0.4  
|-- pg@8.16.3  
|-- remult@3.2.3  
|-- tsx@4.20.6  
|-- typescript@5.9.3  
|-- vite-plugin-vue-devtools@8.0.3  
|-- vite@7.2.2  
|-- vue-tsc@3.1.3  
|-- vue@3.5.24  

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
