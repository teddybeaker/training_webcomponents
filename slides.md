---
title: Mini-Training Web Components
theme: black
---
# Mini-Training Web Components

Carlo Field, Stefani Gerber, 26.09.2019

----

## Agenda

- Einleitung
- Demo einfache Web Component
- Demo Angular Elements

---

## Einleitung

----

### HTML Elemente

Erweiterung des Standards nach Bedarf
- HTML 1: Links
- HTML 2: Formulare
- HTML 5: Grafik, Inhalt

Note:
- HTML1: 1991
- HTML2: 1995
- HTML5: 2014
  - video, audio, canvas
  - section, article etc.

----

### Komponenten - Ziele

- gruppieren von Funktionalität
- wiederverwenden
- Scripts / Styles isolieren

----

### Beispiel AEM

- JSP/HTL und clientlibs gruppiert, zusammen ausgeliefert
- Scripts und Styles nicht einfach isolierbar

Note:
- Link für die, die AEM kennen
- clientlibs = Scripts und Styles
- AEM
  - nicht so angedacht wie bei der CSS umgesetzt
    - Scripts und Styles mit Komponente ausliefern
    - Scripts / Styles z.T. mehrfach ausgeliefert
  - Scripts / Styles nicht einfach isolierbar

----

### Scripts

Problem bei mehreren Instanzen einer Komponente
- JS soll an jeder Instanz hängen
- Änderungen an einer Instanz soll sich nur auf ihren Zustand auswirken

```
$('.my-comp input').on('blur', ...);
```

----

### Styles

Probleme:
- _bleed in_: Elemente von ausserhalb beeinflussen meine Komponente
  ```
  parent { font-size: smaller; }
  ```
- _ bleed out_:mein Komponente beeinflusst ungewollt andere Komponenten
  ```
  button { border: 1px solid black; }
  ```

----

### Styles isolieren

- BEM (Block, element, modifier)
- OOCSS (Object Oriented CSS)
- ACSS (Atomic CSS)

Note:
- Verschiedene Ansätze haben sich entwickelt
- BEM
  - Block, element, modifier
  - Yandex
  - https://css-tricks.com/bem-101/
- OOCSS
  - Struktur und Layout separieren
- ACSS
  - eine Deklaration pro Selektor
  - alle Styles im Markup

----

### Komponenten

- Angular, React, Vue
- Styles einkompilieren
- Scripts an Komponenteninstanz hängen

Note:
- Angular 10
- React 13
- Vue 14
- kann die Technologien nicht mischen

---

## Web Components

Besteht aus
- Custom Elements
- Shadow DOM
- HTML Templates
- (HTML imports 😵)

Note:
- first published draft 2012 (https://medium.com/apprendre-le-web-avec-lior/a-brief-history-of-webcomponents-and-a-tutorial-to-make-yours-a52d329913e7)

----

### Custom Elements

Teil der HTML-Spec (seit 2016)

```
class FlagIcon extends HTMLElement {
  ...
}
customElements.define("flag-icon", FlagIcon);
```

Note:
- https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements
- Konvention, dass Name mit Bindestrich -> HTML soll erweiterbar bleiben

----

### Shadow DOM

- Gekapseltes DOM
- durch Browser schon lange verwendet (z.B. Datepicker, Video)

TODO kapselt es nur CSS oder auch JS?

Note:
- https://dom.spec.whatwg.org/#shadow-trees

----

### HTML templates

- damit nicht jeder Knoten per `document.create()` erstellt werden muss
- `<template>` und `<slot>`

---

### Links
- https://developer.mozilla.org/en-US/docs/Web/Web_Components
