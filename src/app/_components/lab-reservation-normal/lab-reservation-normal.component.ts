import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EventApi } from '@fullcalendar/core';


@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() events: EventApi[];
  @Input() laboratory: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  reservationForm: FormGroup;

  closeResult = '';
  teachers: string[] = ['Arnoldo Martínez', 'Juan Diego González', 'Manuel Uribe', 'Karla Jiménez'];


  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      title: '',
      teacher: '',
      laboratory: this.laboratory,
      events: this.formBuilder.array([])
    });

    this.getEvents();

    /*
    // To print the form:
    this.reservationForm.valueChanges.subscribe(console.log);
    */
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  get eventsForms() {
    return this.reservationForm.get('events') as FormArray;
  }

  getEvents() {
    // console.log(date.toLocaleString('es-CR', {timeZone: 'America/Costa_Rica'}));
    for (let event of this.events) {
      const start = event.start.toLocaleString('es-CR', { timeZone: 'America/Costa_Rica' }).split(' ');
      const end = event.end.toLocaleString('es-CR', { timeZone: 'America/Costa_Rica' }).split(' ');
      const date = start[0];
      const startTime = start[1].split(':');
      const endTime = end[1].split(':');
      const eventGroup = this.formBuilder.group({
        block: date + ' (' + startTime[0] + ':' + startTime[1] + ' - ' + endTime[0] + ':' + endTime[1] + ')'
      });
      this.eventsForms.push(eventGroup);
    }
  }

  reserve() {
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(this.reservationForm.value));
  }
}
