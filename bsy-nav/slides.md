# Angular Elements

---

## Advantages

- No knowledge of Angular necessary for implementation
- Automatic mapping of Input/Output bindings
- Full Framework support (Services, Dependency Injection, ...)

----

## Usage

create a custom element 

```typescript
createCustomElement(
  component: Type<any>, 
  config: NgElementConfig
): NgElementConstructor<P>
```

register the element

```typescript
customElements.define(
  name: string, 
  constructor: Function
): void
```

----

### Clean Up

- (Optional) Remove `AppComponent`
- (Optional) Remove `AppComponent` from `AppModule.bootstrap`
- ^^^ if doing this, add empty `ngDoBootstrap` method

----

### Minimise build output

- add build script that merges output javascript files into one file

----

### Minimise build output - example build script

`package.json` 

```json
{
  "scripts": {
    "build:prod": "ng build --prod --output-hashing=none 
                   && sh merge-build.sh"
  }
}
```

----

### Minimise build output - example build script

`merge-build.sh`

```bash
#!/bin/bash
# es5
cat dist/bsy-nav/{runtime-es5,polyfills-es5,main-es5}.js 
   > dist/elements/ship-es5.js
# es2015
cat dist/bsy-nav/{runtime-es2015,polyfills-es2015,main-es2015}.js 
   > dist/elements/ship-es2015.js
# styles
cat dist/bsy-nav/styles.css > dist/elements/styles.css
```

----

### Example Usage on Webpage

```html
<script nomodule defer src="ship-es5.js"></script>
<script type="module" src="ship-es2015.js"></script>
<script defer>
document.body.appendChild(document.createElement('bsy-nav-overlay'));
</script>
```

---

### Input Bindings (Attributes)

Angular:

```typescript
@Input() color: string;
```

Vanilla HTML:

```html
<some-component color="red"></some-component>
```

----

### Output Bindings (Events)

Angular:

```typescript
@Output() navigate: EventEmitter<Something> = ...;

someFunction(value) {
  this.navigate.next(value);
}
```

Vanilla JS:

```javascript
someElement.addEventListener('navigate', () => ...);
```

----

### Services and their Scopes

` test.component.ts`

```typescript
constructor(
  private myService: MyService
) {}

set property(value) {
  this.myService.setProperty(value);
}
```

Vanilla JS

```javascript
element1.setAttribute('property', value);
element2.setAttribute('property', differentValue);
// same service instance is called 
// => dependency injection is still global
```

