import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from './../../_services/title.service';
import { ChartGeneratorService } from '../../_services/chart-generator.service';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faLaugh } from '@fortawesome/free-regular-svg-icons';
import { DashboardComponent } from './dashboard.component';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  beforeEach(() => {
    const titleServiceStub = () => ({ setTitle: string => ({}) });
    const chartGeneratorServiceStub = () => ({
      getOccupationChart: occupation => ({}),
      getReservationsChart: (string, reservations) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        {
          provide: ChartGeneratorService,
          useFactory: chartGeneratorServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`veryBad has default value`, () => {
    expect(component.veryBad).toEqual(faAngry);
  });
  it(`bad has default value`, () => {
    expect(component.bad).toEqual(faFrown);
  });
  it(`good has default value`, () => {
    expect(component.good).toEqual(faSmile);
  });
  it(`veryGood has default value`, () => {
    expect(component.veryGood).toEqual(faLaugh);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const chartGeneratorServiceStub: ChartGeneratorService = fixture.debugElement.injector.get(
        ChartGeneratorService
      );
      spyOn(component, 'getOcupation').and.callThrough();
      spyOn(component, 'getSatisfaction').and.callThrough();
      spyOn(component, 'getReservations').and.callThrough();
      spyOn(chartGeneratorServiceStub, 'getOccupationChart').and.callThrough();
      spyOn(
        chartGeneratorServiceStub,
        'getReservationsChart'
      ).and.callThrough();
      component.ngOnInit();
      expect(component.getOcupation).toHaveBeenCalled();
      expect(component.getSatisfaction).toHaveBeenCalled();
      expect(component.getReservations).toHaveBeenCalled();
      expect(chartGeneratorServiceStub.getOccupationChart).toHaveBeenCalled();
      expect(chartGeneratorServiceStub.getReservationsChart).toHaveBeenCalled();
    });
  });
});
