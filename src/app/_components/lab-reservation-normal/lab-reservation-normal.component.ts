import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventApi } from '@fullcalendar/core';


@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() event: any;
  @Input() laboratory: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  reservationForm: FormGroup;

  closeResult = '';
  teachers: string[] = ['Arnoldo Martínez', 'Juan Diego González', 'Manuel Uribe', 'Karla Jiménez'];


  ngOnInit(): void {
    const start = this.event.start.split('T');
    const end = this.event.end.split('T');
    const date = start[0];
    const startTime = start[1].split(':');
    const endTime = end[1].split(':');
    this.reservationForm = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      teacher: ['', [
        Validators.required
      ]],
      laboratory: [this.laboratory, [
        Validators.required
      ]],
      time: [date + ' (' + startTime[0] + ':' + startTime[1] + ' - ' + endTime[0] + ':' + endTime[1] + ')', [
        Validators.required
      ]]
    });

    /*
    // To print the form:
    this.reservationForm.valueChanges.subscribe(console.log);
    */
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  reserve() {
    const form = this.reservationForm.value;
    const newEvent = {
      title: form.title,
      teacher: form.teacher,
      laboratory: this.laboratory,
      start: this.event.start,
      end: this.event.end,
      palmada: this.event.palmada
    };
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(newEvent));
  }

  get title() {
    return this.reservationForm.get('title');
  }

  get teacher() {
    return this.reservationForm.get('teacher');
  }

}
