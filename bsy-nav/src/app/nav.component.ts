import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavService} from './nav.service';
import {Observable} from 'rxjs';
import {ThemePalette} from '@angular/material/core';

export interface Link {
  href: string;
  title: string;
}

export type Target = '_blank'|'_self'|'_parent'|'_top';

@Component({
  selector: 'bsy-nav',
  template: `
    <div fxLayout="row" fxLayoutGap="5px" fxLayoutAlign="space-between center">
        <a (click)="navigate.emit($event)" 
           *ngFor="let link of links" 
           mat-raised-button [color]="buttonColor$ | async" 
           [target]="target"
           [href]="link.href">{{link.title}}</a>
    </div>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  @Output()
  navigate: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  @Input()
  set color(color: ThemePalette) {
    this.nav.setColor(color);
  }

  @Input()
  target: Target = '_blank';

  buttonColor$: Observable<ThemePalette> = this.nav.getColor();

  links: Link[] = [
    {
      href: 'https://services.bluesky-it.ch/xwiki',
      title: 'Bluesky Wiki'
    },
    {
      href: 'https://services.bluesky-it.ch/jira',
      title: 'Jira Issue Tracking'
    },
    {
      href: 'https://services.bluesky-it.ch/timeometer',
      title: 'Zeiterfassung'
    }
  ];

  constructor(
    private nav: NavService
  ) { }

  ngOnInit() {
    console.log('created nav component');
  }

}
