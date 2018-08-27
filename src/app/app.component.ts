import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChargingService } from './services/charging.service';
import { ChargeDeviceItem, ConnectorItem } from './models/charger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading = true;
  ChargeDevices: ChargeDeviceItem[];
  data: ChargeDeviceItem[];
  types;
  filteredTypes = [];
  zoom = 3;
  lat: Number = 54.73;
  lng: Number = -4.15;

  constructor(private chargingService: ChargingService) {}

  ngOnInit(): void {
    this.chargingService.getChargingData().subscribe(data => {
      this.data = data.filter(x => x.SubscriptionRequiredFlag);
      this.ChargeDevices = this.data;

      this.types = this.findUniqueConnectors(this.ChargeDevices);

      // Creates Seperate Data Sets for Connector Types
      this.types.forEach(i => {
          this.filteredTypes.push({
            name: i.ConnectorType,
            data: this.data.filter(x => x.Connector.find(b => b.ConnectorType === i.ConnectorType))
          });
      });

      this.isLoading = false;
    });
  }

  filter(ChargeType: String) {
    if (ChargeType === 'any') {
      this.ChargeDevices = this.data;
    } else {
      this.filteredTypes.forEach(i => {
        if (i.name === ChargeType) {
          this.ChargeDevices = i.data;
        }
      });
    }
  }

  findUniqueConnectors(ChargeDevices: ChargeDeviceItem[]): ChargeDeviceItem[] {
    return ChargeDevices.map(x => x.Connector).reduce((acc, val) => acc.concat(val), [])
      .reduce((unique, o) => {
        if (!unique.some(obj => obj.ConnectorType === o.ConnectorType)) {
          unique.push(o);
        }
        return unique;
      }, []);
  }

  zoomMap(dir: String): void {
    if (dir === 'in') {
      this.zoom++;
    } else {
      this.zoom--;
    }
  }

  updateGeo(coordinates) {
    this.lat = parseFloat(coordinates.lat);
    this.lng = parseFloat(coordinates.lng);
  }
}
