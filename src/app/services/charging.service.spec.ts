import { async, ComponentFixture, TestBed, getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ChargingService } from "./charging.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("Charging Service", () => {
  let injector: TestBed;
  let service: ChargingService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChargingService]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(ChargingService);
    httpMock = injector.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getChargingData', () => {
    it('should return an Observable<ChargeDeviceItem[]>', () => {
      const dummyChargeDeviceItem = [
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

      service.getChargingData().subscribe(chargers => {
        expect(chargers.length).toBe(1);
        expect(chargers).toEqual(dummyChargeDeviceItem);
      });

      const req = httpMock.expectOne(`${service.url}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyChargeDeviceItem);
    });
  });
});

