import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursComponent } from './hours.component';

describe('HoursComponent', () => {
  let component: HoursComponent;
  let fixture: ComponentFixture<HoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HoursComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // nuevo test unitario
  it('should run #ngOnInit()', async () => {
    component.getHours = jest.fn();
    component.getAdmin = jest.fn();
    component.ngOnInit();
    expect(component.getHours).toHaveBeenCalled();
    expect(component.getAdmin).toHaveBeenCalled();
  });

  // nuevo test unitario
  it('should run #edit()', async () => {
    component.edit({});
  });

  // nuevo test unitario
  it('should run #getAdmin()', async () => {
    component.getAdmin();
  });

  // nuevo test unitario
  it('should run #getHours()', async () => {
    component.getHours();
  });

  // nuevo test unitario
  it('should run #approve()', async () => {
    component.approve({});
  });
});
