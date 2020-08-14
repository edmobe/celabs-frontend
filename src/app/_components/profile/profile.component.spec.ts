import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from '../../_services/title.service';
import { FormGeneratorService } from '../../_services/forms/form-generator.service';
import { AlertService } from '../../_services/alert.service';
import { FormToJsonService } from '../../_services/forms/form-to-json.service';
import { ProfileComponent } from './profile.component';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(() => {
    const titleServiceStub = () => ({ setTitle: (string) => ({}) });
    const formGeneratorServiceStub = () => ({
      createProfileForm: (name, middleName, lastName, email) => ({}),
    });
    const alertServiceStub = () => ({
      confirm: (string, string1) => ({ then: () => ({ catch: () => ({}) }) }),
    });
    const formToJsonServiceStub = () => ({
      createUpdateProfileJson: (id, value, value1, value2, value3) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProfileComponent],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
        { provide: AlertService, useFactory: alertServiceStub },
        { provide: FormToJsonService, useFactory: formToJsonServiceStub },
      ],
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`changed has default value`, () => {
    expect(component.changed).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formGeneratorServiceStub: FormGeneratorService = fixture.debugElement.injector.get(
        FormGeneratorService
      );
      spyOn(component, 'getUser').and.callThrough();
      spyOn(formGeneratorServiceStub, 'createProfileForm').and.callThrough();
      component.ngOnInit();
      expect(component.getUser).toHaveBeenCalled();
      expect(formGeneratorServiceStub.createProfileForm).toHaveBeenCalled();
    });
  });
  describe('deleteAccount', () => {
    it('makes expected calls', () => {
      const alertServiceStub: AlertService = fixture.debugElement.injector.get(
        AlertService
      );
      spyOn(component, 'postDeleteAccount').and.callThrough();
      spyOn(alertServiceStub, 'confirm').and.callThrough();
      component.deleteAccount();
      expect(component.postDeleteAccount).toHaveBeenCalled();
      expect(alertServiceStub.confirm).toHaveBeenCalled();
    });
  });
  describe('updateProfile', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(formToJsonServiceStub, 'createUpdateProfileJson').and.callThrough();
      component.updateProfile();
      expect(formToJsonServiceStub.createUpdateProfileJson).toHaveBeenCalled();
    });
  });
});
