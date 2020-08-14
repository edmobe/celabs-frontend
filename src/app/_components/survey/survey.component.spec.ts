import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../_services/alert.service';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faLaugh } from '@fortawesome/free-regular-svg-icons';
import { SurveyComponent } from './survey.component';
describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  beforeEach(() => {
    const ngbActiveModalStub = () => ({});
    const alertServiceStub = () => ({
      alert: (activeModal, string, string1) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SurveyComponent],
      providers: [
        { provide: NgbActiveModal, useFactory: ngbActiveModalStub },
        { provide: AlertService, useFactory: alertServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SurveyComponent);
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
  it(`veryBadColor has default value`, () => {
    expect(component.veryBadColor).toEqual(`#0154a0`);
  });
  it(`badColor has default value`, () => {
    expect(component.badColor).toEqual(`#0154a0`);
  });
  it(`goodColor has default value`, () => {
    expect(component.goodColor).toEqual(`#0154a0`);
  });
  it(`veryGoodColor has default value`, () => {
    expect(component.veryGoodColor).toEqual(`#0154a0`);
  });
  it(`veryBadSize has default value`, () => {
    expect(component.veryBadSize).toEqual(`2x`);
  });
  it(`badSize has default value`, () => {
    expect(component.badSize).toEqual(`2x`);
  });
  it(`goodSize has default value`, () => {
    expect(component.goodSize).toEqual(`2x`);
  });
  it(`veryGoodSize has default value`, () => {
    expect(component.veryGoodSize).toEqual(`2x`);
  });
  describe('postSuccessful', () => {
    it('makes expected calls', () => {
      const alertServiceStub: AlertService = fixture.debugElement.injector.get(
        AlertService
      );
      spyOn(alertServiceStub, 'alert').and.callThrough();
      component.postSuccessful();
      expect(alertServiceStub.alert).toHaveBeenCalled();
    });
  });
});
