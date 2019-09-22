import { Component, OnInit } from '@angular/core';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NavComponent } from './nav.component';

@Component({
  selector: 'bsy-overlay',
  template: `
  <div class="nav-wrapper" cdkDrag>
    <bsy-nav></bsy-nav>

    <div class="drag-handle" cdkDragHandle>
      <svg width="24px" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </div>
  </div>
  `,
  styles: [
    `
    .nav-wrapper {
      width: 200px;
      height: 200px;
      padding: 10px;
      box-sizing: border-box;
      border: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #fff;
      border-radius: 4px;
      position: relative;
      z-index: 1;
      transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                  0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
    
    .nav-wrapper:active {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    
    .drag-handle {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ccc;
      cursor: move;
      width: 24px;
      height: 24px;
    }
    `
  ]
})
export class OverlayComponent implements OnInit {

  constructor(
    private overlay: Overlay
  ) { }

  ngOnInit() {
    /*console.log('creating overlay');
    const overlayRef = this.overlay.create({
      positionStrategy: new GlobalPositionStrategy()
    });
    const navPortal = new ComponentPortal(NavComponent);
    console.log('attaching component to overlay');
    overlayRef.attach(navPortal);*/
  }

}
