import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bsy-nav',
  template: `
  <ul class="wrapper">
    <li><a href="https://services.bluesky-it.ch/xwiki" target="_blank">Bluesky Wiki</a></li>
    <li><a href="https://services.bluesky-it.ch/jira" target="_blank">Jira Issue Tracking</a></li>
    <li><a href="https://services.bluesky-it.ch/timeometer" target="_blank">Zeiterfassung</a></li>
  </ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    console.log('created nav component');
  }

}
