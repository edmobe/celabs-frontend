import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';
import { FormGeneratorService } from '../../../_services/forms/form-generator.service';
import { FormToJsonService } from '../../../_services/forms/form-to-json.service';
import { FormValidatorService } from '../../../_services/forms/form-validator.service';
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

  isSelected: boolean;
  isClass: boolean;
  isRecurrent: boolean = false;

  type: string;

  recurrentForm: FormGroup;
  remainingWeeks: number;

  constructor(
    public activeModal: NgbActiveModal,
    private changeDetector: ChangeDetectorRef,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService,
    private formValidator: FormValidatorService
  ) { }

  ngOnInit(): void {
    this.remainingWeeks = this.getRemainingWeeks();
    this.recurrentForm = this.formGenerator.createReservationRecurrentForm(this.remainingWeeks);
  }

  checkFormsInvalid(): boolean {
    return this.formValidator.checkReservationFormInvalid(
      this.isRecurrent,
      this.isClass,
      this.recurrentForm,
      this.classForm,
      this.baseForm);
  }

  handleSelected(type: string): void {
    this.type = type;
    this.isSelected = true;
    this.changeDetector.detectChanges();
  }

  handleClass(): void {
    this.isClass = true;
    this.handleSelected('Clase');
  }

  createBaseFormJson(): any {
    return this.formToJson.createBaseFormJson(
      this.baseForm.reservationForm.value.title,
      this.type,
      this.laboratory.id,
      this.event.start,
      this.event.end
    );
  }

  createClassFromJson(): any {
    return this.formToJson.createClassFormJson(
      this.classForm.reservationForm.value.teacher,
      this.classForm.reservationForm.value.course
    );
  }

  createReccurentFromJson(): any {
    return this.formToJson.createRecurrentFormJson(
      this.recurrentForm.value.recurrence
    );
  }

  get recurrence() {
    return this.recurrentForm.get('recurrence');
  }

  // GETs
  getRemainingWeeks(): number {
    console.log(this.event.end);
    return 3;
  }

  // POST
  post(): void {
    let json = this.createBaseFormJson();
    if (this.isRecurrent) {
      json = Object.assign(json, this.createReccurentFromJson());
    }
    if (this.isClass) {
      json = Object.assign(json, this.createClassFromJson());
    }
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(json));
  }

}
