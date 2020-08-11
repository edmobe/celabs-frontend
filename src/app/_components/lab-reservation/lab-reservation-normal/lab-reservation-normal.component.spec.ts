import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationNormalComponent } from './lab-reservation-normal.component';

describe('LabReservationNormalComponent', () => {
  let component: LabReservationNormalComponent;
  let fixture: ComponentFixture<LabReservationNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReservationNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReservationNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
