import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { RouterTestingModule } from '@angular/router/testing';
import { SideBarComponent } from './side-bar.component';
describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SideBarComponent]
    });
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`Clip has default value`, () => {
    expect(component.Clip).toEqual(faCheckCircle);
  });
});
