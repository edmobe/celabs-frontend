import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  // nuevo test de usabilidad
  it('should run GetterDeclaration #laboratory', async () => {
    component.inventoryForm = component.inventoryForm || {};
    component.inventoryForm.get = jest.fn();
    const laboratory = component.laboratory;
    expect(component.inventoryForm.get).toHaveBeenCalled();
  });

  

  // nuevo test de usabilidad
  it('should run #successfulPost()', async () => {
    component.inventoryModal = component.inventoryModal || {};
    component.inventoryModal.close = jest.fn();
    component.inventoryForm = component.inventoryForm || {};
    component.inventoryForm.reset = jest.fn();
    component.successfulPost({});
    expect(component.inventoryModal.close).toHaveBeenCalled();
    expect(component.inventoryForm.reset).toHaveBeenCalled();
  });

  // nuevo test de usabilidad
  it('should run #getAmounts()', async () => {

    component.getAmounts();

  });

  // nuevo test de usabilidad
  it('should run #getStates()', async () => {

    component.getStates();

  });

  // nuevo test de usabilidad
  it('should run #getLaboratories()', async () => {

    component.getLaboratories();

  });

  // nuevo test de usabilidad
  it('should run #getOperator()', async () => {

    component.getOperator();

  });

  // nuevo test de usabilidad
  it('should run #getInventories()', async () => {

    component.getInventories();

  });

  // nuevo test de usabilidad
  it('should run #post()', async () => {
    component.formToJson = component.formToJson || {};
    component.formToJson.createInventoryJson = jest.fn();
    component.inventoryForm = component.inventoryForm || {};
    component.inventoryForm.value = {
      laboratory: {
        id: {}
      },
      completeComputers: {},
      incompleteComputers: {},
      projectors: {},
      chairs: {},
      extinguishers: {}
    };
    component.successfulPost = jest.fn();
    component.post();
    expect(component.formToJson.createInventoryJson).toHaveBeenCalled();
    expect(component.successfulPost).toHaveBeenCalled();
  });*/
});
