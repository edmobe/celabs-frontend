import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminhomeComponent } from './adminhome.component';
describe('AdminhomeComponent', () => {
  let component: AdminhomeComponent;
  let fixture: ComponentFixture<AdminhomeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdminhomeComponent]
    });
    fixture = TestBed.createComponent(AdminhomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
