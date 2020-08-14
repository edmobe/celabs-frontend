import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursModalComponent } from './hours-modal.component';

describe('HoursModalComponent', () => {
  let component: HoursModalComponent;
  let fixture: ComponentFixture<HoursModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
