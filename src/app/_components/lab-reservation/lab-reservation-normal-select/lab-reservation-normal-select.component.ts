import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-reservation-normal-select',
  templateUrl: './lab-reservation-normal-select.component.html',
  styleUrls: ['./lab-reservation-normal-select.component.css']
})
export class LabReservationNormalSelectComponent implements OnInit {

  @Input() event: any;
  @Input() laboratory: string;

  @ViewChild('baseForm') baseForm: LabReservationNormalComponent;
  @ViewChild('classForm') classForm: LabReservationNormalComponent;

  selected: boolean;
  class: boolean;
  type: string;
  recurrent: boolean;

  remainingWeeks;

  recurrentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.remainingWeeks = 17;
    this.recurrent = false;
    this.recurrentForm = this.formBuilder.group({
      recurrence: ['', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[1-9][0-9]*$')
      ]]
    });
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

  post(): void {
    let json = this.getBaseFormJson();
    if (this.recurrent) {
      json = Object.assign(json, this.getReccurentFromJson());
    }
    if (this.class) {
      json = Object.assign(json, this.getClassFromJson());
    }
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(json));
  }

  getBaseFormJson(): any {
    const baseForm = this.baseForm.reservationForm.value;
    const baseJson = {
      title: baseForm.title,
      type: this.type,
      laboratory: this.laboratory,
      start: this.event.start,
      end: this.event.end,
    };
    return baseJson;
  }

  getClassFromJson(): any {
    const classForm = this.classForm.reservationForm.value;
    const classJson = {
      teacher: classForm.teacher,
      course: classForm.course,
    };
    return classJson;
  }

  getReccurentFromJson(): any {
    const recurrentForm = this.recurrentForm.value;
    const recurrentJson = {
      recurrence: recurrentForm.recurrence
    };
    return recurrentJson;
  }

}
