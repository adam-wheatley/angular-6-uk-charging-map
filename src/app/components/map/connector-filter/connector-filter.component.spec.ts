import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectorFilterComponent } from './connector-filter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ConnectorItem } from '../../../models/charger';

describe('Connector Filter Component', () => {
  let component: ConnectorFilterComponent;
  let fixture: ComponentFixture<ConnectorFilterComponent>;
  let de: DebugElement;
  let inputData: ConnectorItem[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorFilterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    inputData = [
      {
        ConnectorId: '1',
        ConnectorType: '3-pin Type G (BS1363)',
        RatedOutputkW: '3.7',
        RatedOutputVoltage: '230',
        RatedOutputCurrent: '16',
        ChargeMethod: 'Single Phase AC',
        ChargeMode: '1',
        ChargePointStatus: 'In service',
        TetheredCable: '0',
        Information: '  x 3-pin square (BS 1363) - Standard (up to 3.7kW, 13-16A)',
        Validated: '0'
      },
      {
        ConnectorId: '2',
        ConnectorType: 'Type 2 Mennekes (IEC62196)',
        RatedOutputkW: '7.0',
        RatedOutputVoltage: '230',
        RatedOutputCurrent: '32',
        ChargeMethod: 'Single Phase AC',
        ChargeMode: '3',
        ChargePointStatus: 'In service',
        TetheredCable: '0',
        Information: '  x 7-pin "Smart" eg Mennekes (IEC 62196) - Fast (7kW, 32A)',
        Validated: '0'
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should populate dropdown with Input Data', () => {
    component.types = inputData;
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(select.options[1].value).toEqual('3-pin Type G (BS1363)');
    expect(select.options[2].value).toEqual('Type 2 Mennekes (IEC62196)');
  });

  it('Output should be correct when function Called', () => {
    const comp = fixture.componentInstance;
    spyOn(comp.typeChanged, 'emit');

    comp.typeChange('3-pin Type G (BS1363)');
    fixture.detectChanges();
    expect(comp.typeChanged.emit).toHaveBeenCalledWith('3-pin Type G (BS1363)');
  });
});
