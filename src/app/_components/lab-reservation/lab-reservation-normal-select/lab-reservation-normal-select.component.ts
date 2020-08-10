import { Component, OnInit, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';

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

  constructor(public activeModal: NgbActiveModal, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleSelected(type: string) {
    this.type = type;
    this.selected = true;
    this.changeDetector.detectChanges();
  }

  handleClass() {
    this.class = true;
    this.handleSelected('Clase');
  }

  postBaseForm() {
    const baseForm = this.baseForm.reservationForm.value;
    const newEvent = {
      title: baseForm.title,
      type: this.type,
      laboratory: this.laboratory,
      start: this.event.start,
      end: this.event.end,
      palmada: this.event.palmada
    };
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(newEvent));
  }

  postClassForm() {
    const baseForm = this.baseForm.reservationForm.value;
    const classForm = this.classForm.reservationForm.value;
    const newEvent = {
      title: baseForm.title,
      type: this.type,
      laboratory: this.laboratory,
      start: this.event.start,
      end: this.event.end,
      palmada: this.event.palmada,
      teacher: classForm.teacher,
      course: classForm.course
    };
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(newEvent));
  }

}
