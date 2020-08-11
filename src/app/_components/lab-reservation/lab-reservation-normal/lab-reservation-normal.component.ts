import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateDisplayService } from '../../../_services/date-display.service';

@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() event: any;
  @Input() laboratory: string;
  @Input() type: string;

  reservationForm: FormGroup;

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
      type: [this.type, [
        Validators.required
      ]],
      laboratory: [this.laboratory, [
        Validators.required
      ]],
      time: [this.dateDisplayService.getSingleDayDisplay(new Date(this.event.start), new Date(this.event.end)), [
        Validators.required
      ]]
    });

    /*
    // To print the form:
    this.reservationForm.valueChanges.subscribe(console.log);
    */
  }

  constructor(private formBuilder: FormBuilder, private dateDisplayService: DateDisplayService) { }


  get title() {
    return this.reservationForm.get('title');
  }

}
