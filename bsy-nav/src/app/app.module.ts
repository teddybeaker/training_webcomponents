import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {createCustomElement} from '@angular/elements';

import { NavComponent } from './nav.component';
import { OverlayComponent } from './overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [NavComponent, OverlayComponent],
  imports: [
    BrowserModule,
    OverlayModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(
    injector: Injector
  ) {
    const elements: any[] = [
      [OverlayComponent, 'bsy-nav-overlay'],
      [NavComponent, 'bsy-nav-standalone']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, {injector});
      customElements.define(name, el);
    }

  }

  ngDoBootstrap() {}

 }
