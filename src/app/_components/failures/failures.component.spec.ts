import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailuresComponent } from './failures.component';

describe('FailuresComponent', () => {
  let component: FailuresComponent;
  let fixture: ComponentFixture<FailuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FailuresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*
  // nuevo test de usabilidad
  it('should run GetterDeclaration #dateTime', async () => {
    component.failuresForm = component.failuresForm || {};
    component.failuresForm.get = jest.fn();
    const dateTime = component.dateTime;
    expect(component.failuresForm.get).toHaveBeenCalled();
  });

  // nuevo test de usabilidad
  it('should run #ngOnInit()', async () => {
    component.getStates = jest.fn();
    component.getLaboratories = jest.fn();
    component.getAssets = jest.fn();
    component.formGenerator = component.formGenerator || {};
    component.formGenerator.createFailuresFrom = jest.fn();
    component.getOperator = jest.fn();
    component.ngOnInit();
    expect(component.getStates).toHaveBeenCalled();
    expect(component.getLaboratories).toHaveBeenCalled();
    expect(component.getAssets).toHaveBeenCalled();
    expect(component.formGenerator.createFailuresFrom).toHaveBeenCalled();
    expect(component.getOperator).toHaveBeenCalled();
  });*/
});
