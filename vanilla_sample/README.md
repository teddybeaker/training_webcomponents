# Web Component

Sample in plain JavaScript

## Custom Element
- `class BlueSky extends HTMLElement`
- `customElements.define('blue-sky', BlueSky);`
- add some content
- `document.body.appendChild(link);`
  - ends up anywhere in DOM

## Shadow DOM
- `document.querySelector('blue-sky').shadowRoot`
- `const shadowRoot = this.attachShadow({mode: 'open'});`
- attach wrapper to shadowRoot
- style globally and within component

## Template
- JS gets complex
- extract in `<template>`
- ```
  let template = document.getElementById('bluesky');
  let templateContent = template.content;
  shadowRoot.appendChild(templateContent);
  ```

## JavaScript
- strength of web component, to hold data

## Attributes
- react to external changes
- add button that toggles attribute
- add `attributeChangedCallback`
- add `observedAttributes`
