import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {createCustomElement} from '@angular/elements';

import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(
    injector: Injector
  ) {
    const elements: any[] = [
      [NavComponent, 'bsy-popup-nav']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, {injector});
      customElements.define(name, el);
    }

  }

  ngDoBootstrap() {}

 }
