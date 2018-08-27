import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-connector-filter',
  template: `
    <form>
      <div class="form-group">
          <label for="charger-type">Charger Type</label>
          <select (change)="typeChange($event.target.value)" name="charger-type" class="form-control">
              <option value="any">All Chargers</option>
              <option *ngFor="let t of types" [value]="t.ConnectorType">{{t.ConnectorType}}</option>
          </select>
      </div>
    </form>
  `
})
export class ConnectorFilterComponent {

  @Input() types;
  @Output() typeChanged = new EventEmitter();

  typeChange(type: String): void {
    this.typeChanged.emit(type);
  }
}
