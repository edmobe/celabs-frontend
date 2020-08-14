import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  // nuevo test de usabilidad
  it('should run GetterDeclaration #username', async () => {
    component.loginForm = component.loginForm || {};
    component.loginForm.get = jest.fn();
    const username = component.username;
    expect(component.loginForm.get).toHaveBeenCalled();
  });

  // nuevo test de usabilidad
  it('should run #ngOnInit()', async () => {
    component.getRoles = jest.fn();
    component.formGenerator = component.formGenerator || {};
    component.formGenerator.createLoginForm = jest.fn();
    component.ngOnInit();
    expect(component.getRoles).toHaveBeenCalled();
    expect(component.formGenerator.createLoginForm).toHaveBeenCalled();
  });

  // nuevo test de usabilidad
  it('should run #successfulLogin()', async () => {

    component.successfulLogin({});

  });

  // nuevo test de usabilidad
  it('should run #getRoles()', async () => {

    component.getRoles();

  });*/
});
