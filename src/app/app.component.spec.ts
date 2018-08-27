import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { SpinnerComponent } from "./components/core/spinner/spinner.component";
import { MapComponent } from "./components/map/map.component";
import { HeaderComponent } from "./components/core/header/header.component";
import { ZoomComponent } from "./components/map/zoom/zoom.component";
import { ConnectorFilterComponent } from "./components/map/connector-filter/connector-filter.component";
import { GeoLocationFormComponent } from "./components/map/geo-location-form/geo-location-form.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { AgmSnazzyInfoWindowModule } from "@agm/snazzy-info-window";
import { ChargingService } from "./services/charging.service";
import { HttpClientModule } from "@angular/common/http";

describe("Root App Component", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SpinnerComponent,
        MapComponent,
        HeaderComponent,
        ZoomComponent,
        ConnectorFilterComponent,
        GeoLocationFormComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
          apiKey: "AIzaSyCoA-vRNOslBOxG9OySyjyigOo1IY6sdTQ"
        }),
        AgmJsMarkerClustererModule,
        AgmSnazzyInfoWindowModule
      ],
      providers: [ChargingService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should Filter results and give back only unique Connectors", () => {
    const data = [
      {
        ChargeDeviceId: "a999c0cab150490ffefb7ce9ec889830",
        ChargeDeviceRef: "CYC60469",
        ChargeDeviceName: "Longwell Green Leisure Centre",
        ChargeDeviceText: "Publicly Accessible car park ",
        ChargeDeviceLocation: {
          Latitude: "51.449065",
          Longitude: "-2.500966",
          Address: {
            SubBuildingName: "Aspects Leisure Park ",
            BuildingName: "Longwell Green Leisure Centre",
            BuildingNumber: null,
            Thoroughfare: null,
            Street: "Leisure Road",
            DoubleDependantLocality: null,
            DependantLocality: null,
            PostTown: "Bristol",
            County: "City of Bristol",
            PostCode: "BS15 9LA",
            Country: "gb",
            UPRN: null
          },
          LocationShortDescription: "Longwell Green Leisure Centre",
          LocationLongDescription: ""
        },
        ChargeDeviceManufacturer: null,
        ChargeDeviceModel: null,
        PublishStatusID: "1",
        DateCreated: "2015-02-03 11:46:47",
        DateUpdated: "2015-09-09 14:37:12",
        Attribution: "Charge Your Car",
        DateDeleted: "n/a",
        Connector: [
          {
            ConnectorId: "1",
            ConnectorType: "JEVS G105 (CHAdeMO) DC",
            RatedOutputkW: "50.0",
            RatedOutputVoltage: "400",
            RatedOutputCurrent: "125",
            ChargeMethod: "DC",
            ChargeMode: "4",
            ChargePointStatus: "In service",
            TetheredCable: "1",
            Information: null,
            Validated: "0"
          }
        ],
        DeviceOwner: {
          OrganisationName: "Active Centres",
          SchemeCode: "O47",
          Website: "http://www.activecentres.org",
          TelephoneNo: "0300 333 0300"
        },
        DeviceController: {
          OrganisationName: "Charge Your Car",
          SchemeCode: "CYC",
          Website: "http://www.chargeyourcar.org.uk",
          TelephoneNo: "01912 650500"
        },
        DeviceAccess: {
          Open24Hours: true
        },
        DeviceNetworks: "Charge Your Car",
        ChargeDeviceStatus: "In service",
        PublishStatus: "Published",
        DeviceValidated: "0",
        RecordModerated: "N",
        RecordLastUpdated: null,
        RecordLastUpdatedBy: "",
        PaymentRequiredFlag: true,
        PaymentDetails: null,
        SubscriptionRequiredFlag: true,
        SubscriptionDetails: null,
        ParkingFeesFlag: false,
        ParkingFeesDetails: null,
        ParkingFeesUrl: null,
        AccessRestrictionFlag: false,
        AccessRestrictionDetails: null,
        PhysicalRestrictionFlag: false,
        PhysicalRestrictionText: null,
        OnStreetFlag: false,
        LocationType: "Leisure centre",
        Bearing: null,
        Accessible24Hours: true
      }
    ];
    const result = component.findUniqueConnectors([data[0], data[0]]);
    expect(result.length).toBe(1);
  });

  it("Should update Zoom depending on string", () => {
    const zoom = component.zoom;
    component.zoomMap('in');
    fixture.detectChanges();
    expect(component.zoom).toBe(zoom + 1);

    component.zoomMap('out');
    fixture.detectChanges();
    expect(component.zoom).toBe(zoom);
  });

  it("Should update Lat and Long", () => {
    component.updateGeo({
      lat: '50',
      lng: '50'
    });
    fixture.detectChanges();
    expect(component.lat).toBe(50);
    expect(component.lng).toBe(50);
  });
});
