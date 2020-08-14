import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../_services/api/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGeneratorService } from '../../_services/forms/form-generator.service';
import { FormToJsonService } from '../../_services/forms/form-to-json.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    const ngbModalStub = () => ({ open: (surveyComponent, object) => ({}) });
    const userServiceStub = () => ({
      userAuthentication: (username, password) => ({ subscribe: (f) => f({}) }),
    });
    const routerStub = () => ({ navigate: (array) => ({}) });
    const toastrServiceStub = () => ({
      success: (string, string1) => ({}),
      error: (string, string1) => ({}),
    });
    const formGeneratorServiceStub = () => ({ createLoginForm: () => ({}) });
    const formToJsonServiceStub = () => ({
      createLoginJson: (value, value1, value2) => ({}),
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: NgbModal, useFactory: ngbModalStub },
        { provide: UserService, useFactory: userServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
        { provide: FormToJsonService, useFactory: formToJsonServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
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
      spyOn(component, 'getRoles').and.callThrough();
      spyOn(formGeneratorServiceStub, 'createLoginForm').and.callThrough();
      component.ngOnInit();
      expect(component.getRoles).toHaveBeenCalled();
      expect(formGeneratorServiceStub.createLoginForm).toHaveBeenCalled();
    });
  });
  describe('openSurvey', () => {
    it('makes expected calls', () => {
      const ngbModalStub: NgbModal = fixture.debugElement.injector.get(
        NgbModal
      );
      spyOn(ngbModalStub, 'open').and.callThrough();
      component.openSurvey();
      expect(ngbModalStub.open).toHaveBeenCalled();
    });
  });
  describe('post', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(component, 'onSubmit').and.callThrough();
      spyOn(formToJsonServiceStub, 'createLoginJson').and.callThrough();
      component.post();
      expect(component.onSubmit).toHaveBeenCalled();
      expect(formToJsonServiceStub.createLoginJson).toHaveBeenCalled();
    });
  });
});
