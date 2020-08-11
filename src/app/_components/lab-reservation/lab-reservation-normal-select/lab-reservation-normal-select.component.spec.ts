import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationNormalSelectComponent } from './lab-reservation-normal-select.component';

describe('LabReservationNormalSelectComponent', () => {
  let component: LabReservationNormalSelectComponent;
  let fixture: ComponentFixture<LabReservationNormalSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReservationNormalSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReservationNormalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
