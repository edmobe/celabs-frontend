import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from '../../../_services/title.service';
import { LaboratoryService } from '../../../_services/api/laboratory.service';
import { LabReservationSelectComponent } from './lab-reservation-select.component';
describe('LabReservationSelectComponent', () => {
  let component: LabReservationSelectComponent;
  let fixture: ComponentFixture<LabReservationSelectComponent>;
  beforeEach(() => {
    const titleServiceStub = () => ({ setTitle: (string) => ({}) });
    const laboratoryServiceStub = () => ({ getLaboratories: () => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationSelectComponent],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        { provide: LaboratoryService, useFactory: laboratoryServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LabReservationSelectComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
