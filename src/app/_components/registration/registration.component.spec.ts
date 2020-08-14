import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleService } from '../../_services/title.service';
import { FormGeneratorService } from '../../_services/forms/form-generator.service';
import { UserService } from '../../_services/api/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormToJsonService } from '../../_services/forms/form-to-json.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  beforeEach(() => {
    const titleServiceStub = () => ({ setTitle: (string) => ({}) });
    const formGeneratorServiceStub = () => ({
      createRegistrationForm: () => ({}),
    });
    const userServiceStub = () => ({
      registerUser: (body) => ({ subscribe: (f) => f({}) }),
    });
    const toastrServiceStub = () => ({
      success: (string, string1) => ({}),
      error: (arg) => ({}),
    });
    const formToJsonServiceStub = () => ({
      createResiterJson: (
        value,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7
      ) => ({}),
    });
    const routerStub = () => ({ navigate: (array) => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegistrationComponent],
      providers: [
        { provide: TitleService, useFactory: titleServiceStub },
        { provide: FormGeneratorService, useFactory: formGeneratorServiceStub },
        { provide: UserService, useFactory: userServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: FormToJsonService, useFactory: formToJsonServiceStub },
        { provide: Router, useFactory: routerStub },
      ],
    });
    fixture = TestBed.createComponent(RegistrationComponent);
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
        'createRegistrationForm'
      ).and.callThrough();
      component.ngOnInit();
      expect(
        formGeneratorServiceStub.createRegistrationForm
      ).toHaveBeenCalled();
    });
  });
  describe('post', () => {
    it('makes expected calls', () => {
      const formToJsonServiceStub: FormToJsonService = fixture.debugElement.injector.get(
        FormToJsonService
      );
      spyOn(component, 'OnSubmit').and.callThrough();
      spyOn(formToJsonServiceStub, 'createResiterJson').and.callThrough();
      component.post();
      expect(component.OnSubmit).toHaveBeenCalled();
      expect(formToJsonServiceStub.createResiterJson).toHaveBeenCalled();
    });
  });
  describe('OnSubmit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      const toastrServiceStub: ToastrService = fixture.debugElement.injector.get(
        ToastrService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(userServiceStub, 'registerUser').and.callThrough();
      spyOn(toastrServiceStub, 'success').and.callThrough();
      spyOn(toastrServiceStub, 'error').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.OnSubmit();
      expect(userServiceStub.registerUser).toHaveBeenCalled();
      expect(toastrServiceStub.success).toHaveBeenCalled();
      expect(toastrServiceStub.error).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
