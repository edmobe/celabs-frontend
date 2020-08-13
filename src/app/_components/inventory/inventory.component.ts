import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Laboratorio } from 'src/app/_models/laboratorio';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormGroup } from '@angular/forms';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

interface Inventario {
  fecha: string;
  reporte: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {

  states: string[];
  laboratories: Laboratorio[];
  amounts: number[];
  inventories: Inventario[];
  operator: string;

  left: boolean = true;
  time = { hour: 13, minute: 30 };
  meridian = true;
  closeResult = '';

  inventoryForm: FormGroup;
  inventoryModal: NgbModalRef;

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService) {
    this.titleService.setTitle('Reporte de inventario');
  }

  ngOnInit(): void {
    this.laboratories = this.getLaboratories();
    this.operator = this.getOperator();
    this.amounts = this.getAmounts();
    this.inventoryForm = this.formGenerator.createInventoryForm(this.operator);
    this.inventories = this.getInventories();
  }

  open(content): void {
    this.inventoryModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    this.inventoryModal.result.then(() => {
      this.inventoryForm.reset();
    }).catch(() => {
      this.inventoryForm.reset();
    });
  }

  successfulPost(json: any): void {
    this.inventoryModal.close();
    this.inventoryForm.reset();
    alert('Json generado:\n' + JSON.stringify(json));
  }

  get laboratory() {
    return this.inventoryForm.get('laboratory');
  }

  get completeComputers() {
    return this.inventoryForm.get('completeComputers');
  }

  get incompleteComputers() {
    return this.inventoryForm.get('incompleteComputers');
  }

  get projectors() {
    return this.inventoryForm.get('projectors');
  }

  get chairs() {
    return this.inventoryForm.get('chairs');
  }

  get extinguishers() {
    return this.inventoryForm.get('extinguishers');
  }

  // GETs

  getAmounts(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  }

  getStates(): string[] {
    return ['Aprobado', 'Pendiente'];
  }

  getLaboratories(): Laboratorio[] {
    return [{
      nombre: 'F2-04',
      id: 4
    }, {
      nombre: 'F2-05',
      id: 5
    }, {
      nombre: 'F2-06',
      id: 6
    }, {
      nombre: 'F2-07',
      id: 7
    }, {
      nombre: 'F2-08',
      id: 8
    }, {
      nombre: 'F2-09',
      id: 9
    }];
  }

  getOperator(): string {
    return 'Eduardo Moya';
  }

  getInventories(): Inventario[] {
    return [];
  }

  // POSTs
  post() {
    const json = this.formToJson.createInventoryJson(
      this.operator,
      this.inventoryForm.value.laboratory.id,
      this.inventoryForm.value.completeComputers,
      this.inventoryForm.value.incompleteComputers,
      this.inventoryForm.value.projectors,
      this.inventoryForm.value.chairs,
      this.inventoryForm.value.extinguishers
    );
    this.successfulPost(json);
  }

}
