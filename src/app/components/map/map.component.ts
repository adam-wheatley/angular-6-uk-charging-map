import { Component, OnInit, Input } from '@angular/core';
import { Address, ChargeDeviceItem } from '../../models/charger';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() ChargeDevices: ChargeDeviceItem[];
  @Input() zoom: Number;
  @Input() lat: Number;
  @Input() lng: Number;

  streetView: Boolean = false;
  zoomControl: Boolean = false;
  border =  {
    width: '5',
    color: '#FAEC00'
  };

  centerMap(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }

  parseString(str): Number {
    return parseFloat(str);
  }

  formatAddress(a: Address) {
    let addressString = '';
    for (const property in a) {
      if (a[property] !== null && a[property] !== '') {
        addressString += a[property] + ', ';
      }
    }
    return addressString.substring(0, addressString.length - 6);
  }
}
