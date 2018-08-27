import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpinnerComponent } from "./spinner.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ChargeDeviceItem } from "../../../models/charger";

describe("SpinnerComponent", () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Should Render a Div with lds-ripple", () => {
    expect(de.query(By.css(".lds-ripple")).nativeElement).toBeTruthy();
  });
});

