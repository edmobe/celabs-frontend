import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateDisplayService } from '../../../_services/date-display.service';
import { Laboratorio } from 'src/app/_models/laboratorio';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';

@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() event: any;
  @Input() laboratory: Laboratorio;
  @Input() type: string;

  reservationForm: FormGroup;

  ngOnInit(): void {
    this.reservationForm = this.formGenerator.createReservationBaseForm(this.type, this.laboratory, this.event);
    /*
    // To print the form:
    this.reservationForm.valueChanges.subscribe(console.log);
    */
  }

  constructor(private formGenerator: FormGeneratorService) { }


  get title() {
    return this.reservationForm.get('title');
  }

}
