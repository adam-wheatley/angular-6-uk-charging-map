import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-location-form',
  template: `
    <form (ngSubmit)="onSubmit()" #geoForm="ngForm">
      <div class="form-group">
          <label for="charger-type">Geo Location Search</label>
          <input type="number"
            pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$"
            min="-90" max="90"
            [(ngModel)]="lat" name="lat" class="form-control mb-2" placeholder="Latitude">
          <input type="number" class="form-control" min="-180" max="180"
            pattern="^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
            [(ngModel)]="lng" name="lng" placeholder="Longitude">
            <div *ngIf="geoForm.touched && lat && lng && !validate()" id="geo-error" class="text-danger mt-2">
            Please Enter Valid Coordinates</div>
      </div>
  </form>
  <button class="btn btn-secondary mr-2" id="search" (click)="onSubmit()" [disabled]="!validate()">Search</button>
  <button class="btn btn-secondary" (click)="reset()">Reset</button>
  `
})
export class GeoLocationFormComponent implements OnInit {

  lat: Number;
  lng: Number;
  @Output()
  geoChange = new EventEmitter();
  error: string | boolean = false;

  ngOnInit(): void {
    this.validate();
  }

  onSubmit() {
    this.geoChange.emit({lat: this.lat, lng: this.lng});
  }

  reset() {
    this.lat = null;
    this.lng = null;
    this.geoChange.emit({lat: 54.73, lng: -4.15});
  }

  validate(): boolean {
    return this.lat !== null && this.lat !== undefined &&
      this.lng !== null && this.lng !== undefined &&
      /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(this.lat.toString()) &&
      /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(this.lng.toString());
  }
}
