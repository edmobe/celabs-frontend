import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGeneratorService } from '../../../_services/forms/form-generator.service';
import { LabReservationNormalComponent } from './lab-reservation-normal.component';
describe('LabReservationNormalComponent', () => {
  let component: LabReservationNormalComponent;
  let fixture: ComponentFixture<LabReservationNormalComponent>;
  beforeEach(() => {
    const formGeneratorServiceStub = () => ({
      createReservationBaseForm: (type, laboratory, event) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationNormalComponent],
      providers: [
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LabReservationNormalComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formGeneratorServiceStub: FormGeneratorService = fixture.debugElement.injector.get(
        FormGeneratorService
      );
      spyOn(
        formGeneratorServiceStub,
        'createReservationBaseForm'
      ).and.callThrough();
      component.ngOnInit();
      expect(
        formGeneratorServiceStub.createReservationBaseForm
      ).toHaveBeenCalled();
    });
  });
});
