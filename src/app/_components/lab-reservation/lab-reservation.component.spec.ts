import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from '../../_services/title.service';
import { CalendarGeneratorService } from '../../_services/calendar-generator.service';
import { EventApi } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Laboratorio } from '../../_models/laboratorio';
import { LabReservationComponent } from './lab-reservation.component';
describe('LabReservationComponent', () => {
  let component: LabReservationComponent;
  let fixture: ComponentFixture<LabReservationComponent>;
  beforeEach(() => {
    const titleServiceStub = () => ({ setTitle: (string) => ({}) });
    const calendarGeneratorServiceStub = () => ({
      generateCalendar: () => ({}),
    });
    const ngbModalStub = () => ({
      open: (labReservationPalmadaComponent, object) => ({}),
    });
    const activatedRouteStub = () => ({
      queryParams: { subscribe: (f) => f({}) },
    });
    const routerStub = () => ({ navigate: (array) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LabReservationComponent],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        {
          provide: CalendarGeneratorService,
          useFactory: calendarGeneratorServiceStub,
        },
        { provide: NgbModal, useFactory: ngbModalStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
      ],
    });
    spyOn(LabReservationComponent.prototype, 'getSemesterInterval');
    spyOn(LabReservationComponent.prototype, 'getLabAvailableHours');
    fixture = TestBed.createComponent(LabReservationComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('handleEventSelect', () => {
    it('makes expected calls', () => {
      const eventApiStub: EventApi = <any>{};
      const ngbModalStub: NgbModal = fixture.debugElement.injector.get(
        NgbModal
      );
      spyOn(ngbModalStub, 'open').and.callThrough();
      component.handleEventSelect(eventApiStub);
      expect(ngbModalStub.open).toHaveBeenCalled();
    });
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(
        LabReservationComponent.prototype.getSemesterInterval
      ).toHaveBeenCalled();
      expect(
        LabReservationComponent.prototype.getLabAvailableHours
      ).toHaveBeenCalled();
    });
  });
  describe('handlePalmadaSelect', () => {
    it('makes expected calls', () => {
      const ngbModalStub: NgbModal = fixture.debugElement.injector.get(
        NgbModal
      );
      spyOn(ngbModalStub, 'open').and.callThrough();
      component.handlePalmadaSelect();
      expect(ngbModalStub.open).toHaveBeenCalled();
    });
  });
});
