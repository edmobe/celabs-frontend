import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGeneratorService } from '../../../_services/forms/form-generator.service';
import { LabReservationNormalClassComponent } from './lab-reservation-normal-class.component';
describe('LabReservationNormalClassComponent', () => {
  let component: LabReservationNormalClassComponent;
  let fixture: ComponentFixture<LabReservationNormalClassComponent>;
  beforeEach(() => {
    const formGeneratorServiceStub = () => ({
      createReservationClassForm: () => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationNormalClassComponent],
      providers: [
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LabReservationNormalClassComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`teachers has default value`, () => {
    expect(component.teachers).toEqual([
      `Arnoldo Martínez`,
      `Juan Diego González`,
      `Manuel Uribe`,
      `Karla Jiménez`,
    ]);
  });
  it(`courses has default value`, () => {
    expect(component.courses).toEqual([
      `Bases de Datos`,
      `Algoritmos y Estructuras de Datos I`,
      `Algoritmos y Estructuras de Datos II`,
      `Arquitectura de Computadores`,
    ]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formGeneratorServiceStub: FormGeneratorService = fixture.debugElement.injector.get(
        FormGeneratorService
      );
      spyOn(
        formGeneratorServiceStub,
        'createReservationClassForm'
      ).and.callThrough();
      component.ngOnInit();
      expect(
        formGeneratorServiceStub.createReservationClassForm
      ).toHaveBeenCalled();
    });
  });
});
