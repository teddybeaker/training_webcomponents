# Training WebComponents

Schulungsunterlagen zum Thema WebComponents.

Autoren: Stefani Gerber, Carlo Field

## Einleitung

### reveal-md installieren
_npm install -g reveal-md_

### Folien anzeigen
-   `reveal-md slides.md`
-   für Autorenansicht `s` drücken (im Browserfenster)
-   `esc` drücken, um zur Übersicht zu gelangen
-   Zoom mit alt (option on mac) + click
-   Pausieren mit `b` or `.`

### Folien schreiben
-   mit Markdown (siehe <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>)
-   Folien mit Dashes separieren
    - 3 Dashes `---` um eine neue Spalte zu starten (d.h. um die nächste Folie rechts von der aktuellen zu positionieren)
    - 4 Dashes `----` um eine neue Folie in der selben Spalte zu erstellen (d.h. die nächste Folie kommt unterhalb der aktuellen)

## Einfaches Beispiel
TODO

## Angular Elements
TODO

## Protokoll

### Besprechung vom 29.07.2019
Beschlüsse:
- Unterteilung in Einleitung, einfaches Beispiel (pures JS), Angular Elements
- Für beide Beispiele dieselbe Funktionalität verwenden
- Aufteilung
  - Slides -> Steffi
    - Nutzen
      - kleine Drop-Ins
      - wiederverwendbar
      - Styles bleeden nicht rein oder raus
    - Aufteilung gemäss mdn in
      - custom elements
      - shadow dom
      - html templates
  - Einfaches Beispiel -> Steffi
    - analog zu mdn https://developer.mozilla.org/en-US/docs/Web/Web_Components
  - Angular Elements -> Carlo
    - einfaches Beispiel
    - verwendet kein Shadow-DOM
    - einmal als Angular-App zeigen
    - einmal als Angular Element

#### Tasks
- Steffi: rausfinden, ob wir ein Bluesky-Beispiel machen können
  - Beispiel von Christian ist nicht 1:1 übernehmbar, da er mit Bilderkennung Satellitenbilder analysiert hat
  - Sein Tipp:
    > vielleicht vom jetztigen standort in einer spirale nach aussen iterieren bis das wetter für diese location schön angibt
    gibt meistens halt eine fair-use policy bei diesen free wetter apis was bei diesem approach ein problem sein könnte…
    yahoo weather hab ich mal verwendet, war nicht schlecht
    https://developer.yahoo.com/weather/documentation.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAALbLgxoa-4zlqzXEjNYAmtiAO2miMAbWUcRuO32Ajqfqoj_AxBHszYEjbGwIbNhz4Dlz_vXeKwruDmaPPmQAto7B12aKw77aGeYPn3Ea69KAYxulY3TOqSOBiJSU6sKCb_LcUdx0i7LcOWD6NuLB0AHUtq9ERHbUPYEvwRZnkiKG

  - https://openweathermap.org/api  
  - Fallback: Bluesky-Navigation (services-App), darstellen von Links, evtl noch abhängig von kontext ob eingeloggt
