import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomComponent } from './zoom.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Zoom Component', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zoom in button should be rendered', () => {
    expect(de.query(By.css(".zoomIn")).nativeElement).toBeTruthy();
  });

  it('Zoom Out button should be rendered', () => {
    expect(de.query(By.css(".zoomOut")).nativeElement).toBeTruthy();
  });

  it('Output should be correct when emitted', () => {
    const comp = fixture.componentInstance;
    spyOn(comp.zoomChange, 'emit');
    comp.zoomChanged('in');
    fixture.detectChanges();
    expect(comp.zoomChange.emit).toHaveBeenCalledWith('in');
  });
});
