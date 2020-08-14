import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DateDisplayService } from '../../../_services/date-display.service';
import { FormGeneratorService } from '../../../_services/forms/form-generator.service';
import { LabReservationPalmadaComponent } from './lab-reservation-palmada.component';
describe('LabReservationPalmadaComponent', () => {
  let component: LabReservationPalmadaComponent;
  let fixture: ComponentFixture<LabReservationPalmadaComponent>;
  beforeEach(() => {
    const ngbActiveModalStub = () => ({ close: (string) => ({}) });
    const dateDisplayServiceStub = () => ({
      getMultipleDayDisplay: (start, end) => ({}),
    });
    const formGeneratorServiceStub = () => ({
      createReservationPalmadaForm: (codigo, operator) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationPalmadaComponent],
      providers: [
        { provide: NgbActiveModal, useFactory: ngbActiveModalStub },
        { provide: DateDisplayService, useFactory: dateDisplayServiceStub },
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LabReservationPalmadaComponent);
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
      spyOn(component, 'getAvailablePalmadasForThisWeek').and.callThrough();
      spyOn(component, 'getOperator').and.callThrough();
      spyOn(
        formGeneratorServiceStub,
        'createReservationPalmadaForm'
      ).and.callThrough();
      component.ngOnInit();
      expect(component.getAvailablePalmadasForThisWeek).toHaveBeenCalled();
      expect(component.getOperator).toHaveBeenCalled();
      expect(
        formGeneratorServiceStub.createReservationPalmadaForm
      ).toHaveBeenCalled();
    });
  });
  describe('postPalmadaForm', () => {
    it('makes expected calls', () => {
      const ngbActiveModalStub: NgbActiveModal = fixture.debugElement.injector.get(
        NgbActiveModal
      );
      spyOn(ngbActiveModalStub, 'close').and.callThrough();
      component.postPalmadaForm();
      expect(ngbActiveModalStub.close).toHaveBeenCalled();
    });
  });
});
