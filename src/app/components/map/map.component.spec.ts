import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { By } from '@angular/platform-browser';

describe('Map Component', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCoA-vRNOslBOxG9OySyjyigOo1IY6sdTQ'
        }),
        AgmJsMarkerClustererModule,
        AgmSnazzyInfoWindowModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should Render the Map", () => {
    expect(de.query(By.css("agm-map")).nativeElement).toBeTruthy();
  });

  it("Should update the Lat and Long with given values", () => {
      component.centerMap(50, 50);
      expect(component.lat).toBe(50);
      expect(component.lng).toBe(50);
  });

  it("Should Return a Float when given a string", () => {
    expect(component.parseString("50")).toBe(50);
  });

  it("Should Return a Formatted Address Object", () => {
    const address = {
      SubBuildingName: null,
      BuildingName: null,
      BuildingNumber: '29',
      Thoroughfare: null,
      Street: 'Madeup Lane',
      DoubleDependantLocality: null,
      DependantLocality: null,
      PostTown: 'Glasgow',
      County: 'Scotland',
      PostCode: 'G66 123',
      Country: 'UK',
      UPRN: null
    };
    expect(component.formatAddress(address)).toBe('29, Madeup Lane, Glasgow, Scotland, G66 123');
  });
});
