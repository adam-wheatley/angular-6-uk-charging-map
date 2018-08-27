import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom',
  template: `
  <div id="map-control" class="mt-3 mb-3">
  <p>Map Control's</p>
    <button class="btn btn-secondary m-0 zoomIn" (click)="zoomChanged('in')"><span>ZOOM IN</span></button>
    <button class="btn btn-secondary m-0 zoomOut" (click)="zoomChanged('out')"><span>ZOOM OUT</span></button>
  </div>
  `,
  styles: [`
    .zoomIn {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .zoomOut {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `]
})
export class ZoomComponent {
  @Output() zoomChange = new EventEmitter();

  zoomChanged(str) {
    this.zoomChange.emit(str);
  }
}



