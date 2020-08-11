import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationSelectComponent } from './lab-reservation-select.component';

describe('LabReservationSelectComponent', () => {
  let component: LabReservationSelectComponent;
  let fixture: ComponentFixture<LabReservationSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReservationSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReservationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
