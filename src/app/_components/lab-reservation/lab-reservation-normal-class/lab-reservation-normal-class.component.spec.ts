import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationNormalClassComponent } from './lab-reservation-normal-class.component';

describe('LabReservationNormalClassComponent', () => {
  let component: LabReservationNormalClassComponent;
  let fixture: ComponentFixture<LabReservationNormalClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReservationNormalClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReservationNormalClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
