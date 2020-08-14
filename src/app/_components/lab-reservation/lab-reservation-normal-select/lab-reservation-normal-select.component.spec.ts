import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGeneratorService } from '../../../_services/forms/form-generator.service';
import { FormToJsonService } from '../../../_services/forms/form-to-json.service';
import { FormValidatorService } from '../../../_services/forms/form-validator.service';
import { FormsModule } from '@angular/forms';
import { LabReservationNormalSelectComponent } from './lab-reservation-normal-select.component';
describe('LabReservationNormalSelectComponent', () => {
  let component: LabReservationNormalSelectComponent;
  let fixture: ComponentFixture<LabReservationNormalSelectComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = () => ({ detectChanges: () => ({}) });
    const ngbActiveModalStub = () => ({ close: string => ({}) });
    const formGeneratorServiceStub = () => ({
      createReservationRecurrentForm: remainingWeeks => ({})
    });
    const formToJsonServiceStub = () => ({
      createBaseFormJson: (title, type, id, start, end) => ({}),
      createClassFormJson: (teacher, course) => ({}),
      createRecurrentFormJson: recurrence => ({})
    });
    const formValidatorServiceStub = () => ({
      checkReservationFormInvalid: (
        isRecurrent,
        isClass,
        recurrentForm,
        classForm,
        baseForm
      ) => ({})
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationNormalSelectComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
        { provide: NgbActiveModal, useFactory: ngbActiveModalStub },
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
        { provide: FormToJsonService, useFactory: formToJsonServiceStub },
        { provide: FormValidatorService, useFactory: formValidatorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(LabReservationNormalSelectComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`isRecurrent has default value`, () => {
    expect(component.isRecurrent).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formGeneratorServiceStub: FormGeneratorService = fixture.debugElement.injector.get(
        FormGeneratorService
      );
      spyOn(component, 'getRemainingWeeks').and.callThrough();
      spyOn(
        formGeneratorServiceStub,
        'createReservationRecurrentForm'
      ).and.callThrough();
      component.ngOnInit();
      expect(component.getRemainingWeeks).toHaveBeenCalled();
      expect(
        formGeneratorServiceStub.createReservationRecurrentForm
      ).toHaveBeenCalled();
    });
  });
  describe('checkFormsInvalid', () => {
    it('makes expected calls', () => {
      const formValidatorServiceStub: FormValidatorService = fixture.debugElement.injector.get(
        FormValidatorService
      );
      spyOn(
        formValidatorServiceStub,
        'checkReservationFormInvalid'
      ).and.callThrough();
      component.checkFormsInvalid();
      expect(
        formValidatorServiceStub.checkReservationFormInvalid
      ).toHaveBeenCalled();
    });
  });
  describe('handleClass', () => {
    it('makes expected calls', () => {
      spyOn(component, 'handleSelected').and.callThrough();
      component.handleClass();
      expect(component.handleSelected).toHaveBeenCalled();
    });
  });
  describe('createBaseFormJson', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(formToJsonServiceStub, 'createBaseFormJson').and.callThrough();
      component.createBaseFormJson();
      expect(formToJsonServiceStub.createBaseFormJson).toHaveBeenCalled();
    });
  });
  describe('createClassFromJson', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(formToJsonServiceStub, 'createClassFormJson').and.callThrough();
      component.createClassFromJson();
      expect(formToJsonServiceStub.createClassFormJson).toHaveBeenCalled();
    });
  });
  describe('createReccurentFromJson', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(formToJsonServiceStub, 'createRecurrentFormJson').and.callThrough();
      component.createReccurentFromJson();
      expect(formToJsonServiceStub.createRecurrentFormJson).toHaveBeenCalled();
    });
  });
  describe('post', () => {
    it('makes expected calls', () => {
      const ngbActiveModalStub: NgbActiveModal = fixture.debugElement.injector.get(
        NgbActiveModal
      );
      spyOn(component, 'createBaseFormJson').and.callThrough();
      spyOn(component, 'createReccurentFromJson').and.callThrough();
      spyOn(component, 'createClassFromJson').and.callThrough();
      spyOn(ngbActiveModalStub, 'close').and.callThrough();
      component.post();
      expect(component.createBaseFormJson).toHaveBeenCalled();
      expect(component.createReccurentFromJson).toHaveBeenCalled();
      expect(component.createClassFromJson).toHaveBeenCalled();
      expect(ngbActiveModalStub.close).toHaveBeenCalled();
    });
  });
});
