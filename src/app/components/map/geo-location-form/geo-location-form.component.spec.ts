import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocationFormComponent } from './geo-location-form.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Geo Location Component', () => {
  let component: GeoLocationFormComponent;
  let fixture: ComponentFixture<GeoLocationFormComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocationFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocationFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Output should be correct when function Called', () => {
    const comp = fixture.componentInstance;
    spyOn(comp.geoChange, 'emit');
    comp.lat = 20;
    comp.lng = 30;
    comp.onSubmit();
    fixture.detectChanges();
    expect(comp.geoChange.emit).toHaveBeenCalledWith({lat: 20, lng: 30});
  });


  it('Testing Reset Lat Long Function', () => {
    const comp = fixture.componentInstance;
    spyOn(comp.geoChange, 'emit');
    comp.reset();
    fixture.detectChanges();
    expect(comp.geoChange.emit).toHaveBeenCalledWith({lat: 54.73, lng: -4.15});
  });

  it('Testing Lat Lng Validation Function', () => {
    component.lat = 90;
    component.lng = 90;
    let result = component.validate();
    fixture.detectChanges();
    expect(result).toBe(true);
    component.lat = 190;
    component.lng = 190;
    result = component.validate();
    fixture.detectChanges();
    expect(result).toBe(false);
  });
});
