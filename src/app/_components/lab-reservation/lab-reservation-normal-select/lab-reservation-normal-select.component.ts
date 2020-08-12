import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';
import { FormGeneratorService } from '../../../_services/form-generator.service';
import { FormGroup } from '@angular/forms';
import { Laboratorio } from 'src/app/_models/laboratorio';

@Component({
  selector: 'app-lab-reservation-normal-select',
  templateUrl: './lab-reservation-normal-select.component.html',
  styleUrls: ['./lab-reservation-normal-select.component.css']
})
export class LabReservationNormalSelectComponent implements OnInit {

  @Input() event: any;
  @Input() laboratory: Laboratorio;

  @ViewChild('baseForm') baseForm: LabReservationNormalComponent;
  @ViewChild('classForm') classForm: LabReservationNormalComponent;

  selected: boolean;
  class: boolean;

  type: string;
  recurrent: boolean = false;

  recurrentForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private changeDetector: ChangeDetectorRef,
    private formGenerator: FormGeneratorService) { }

  ngOnInit(): void {
    this.recurrentForm = this.formGenerator.getRecurrentForm();
  }

  checkFormsInvalid(): boolean {
    try {
      if (this.recurrent) {
        if (this.recurrentForm.invalid) {
          return true;
        }
      }
      if (this.class) {
        if (this.classForm.reservationForm.invalid) {
          return true;
        }
      }
      if (this.baseForm.reservationForm.invalid) {
        return true;
      }
      return false;
    } catch (error) { }
  }

  handleSelected(type: string): void {
    this.type = type;
    this.selected = true;
    this.changeDetector.detectChanges();
  }

  handleClass(): void {
    this.class = true;
    this.handleSelected('Clase');
  }

  createBaseFormJson(): any {
    return this.formGenerator.createBaseFormJson(
      this.baseForm.reservationForm.value.title,
      this.type,
      this.laboratory.id,
      this.event.start,
      this.event.end
    );
  }

  createClassFromJson(): any {
    return this.formGenerator.createClassFormJson(
      this.classForm.reservationForm.value.teacher,
      this.classForm.reservationForm.value.course
    );
  }

  createReccurentFromJson(): any {
    const recurrentForm = this.recurrentForm.value;
    const recurrentJson = {
      recurrence: recurrentForm.recurrence
    };
    return recurrentJson;
  }

  get recurrence() {
    return this.recurrentForm.get('recurrence');
  }

  post(): void {
    let json = this.createBaseFormJson();
    if (this.recurrent) {
      json = Object.assign(json, this.createReccurentFromJson());
    }
    if (this.class) {
      json = Object.assign(json, this.createClassFromJson());
    }
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(json));
  }

}
