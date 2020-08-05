import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventTimeStringService } from 'src/app/_services/event-time-string.service';


@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() event;
  @Input() laboratory;
  private start;
  private end;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  reservationForm: FormGroup;

  closeResult = '';
  teachers: string[] = ['Arnoldo Martínez', 'Juan Diego González', 'Manuel Uribe', 'Karla Jiménez'];


  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      laboratory: this.laboratory,
      startTime: this.eventTimeStringService.dateToIsoTime(this.event.start),
      startDate: this.eventTimeStringService.dateToIsoDate(this.event.start),
      endTime: this.eventTimeStringService.dateToIsoTime(this.event.end),
      endDate: this.eventTimeStringService.dateToIsoDate(this.event.end),
      teacher: ''
    });

    /*
    // To print the form:
    this.reservationForm.valueChanges.subscribe(console.log);
    */
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private eventTimeStringService: EventTimeStringService) { }

  reserve() {
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(this.reservationForm.value));
  }
}
