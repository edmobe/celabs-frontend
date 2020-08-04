import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReservationPalmadaComponent } from './lab-reservation-palmada.component';

describe('LabReservationPalmadaComponent', () => {
  let component: LabReservationPalmadaComponent;
  let fixture: ComponentFixture<LabReservationPalmadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReservationPalmadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReservationPalmadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
