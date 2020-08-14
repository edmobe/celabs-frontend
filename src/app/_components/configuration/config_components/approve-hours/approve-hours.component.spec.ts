import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveHoursComponent } from './approve-hours.component';

describe('ApproveHoursComponent', () => {
  let component: ApproveHoursComponent;
  let fixture: ComponentFixture<ApproveHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
