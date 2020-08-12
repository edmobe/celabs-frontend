import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventApi } from '@fullcalendar/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DateDisplayService } from '../../../_services/date-display.service';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { Laboratorio } from 'src/app/_models/laboratorio';

@Component({
  selector: 'app-lab-reservation-palmada',
  templateUrl: './lab-reservation-palmada.component.html',
  styleUrls: ['./lab-reservation-palmada.component.css']
})
export class LabReservationPalmadaComponent implements OnInit {

  @Input() public laboratory: Laboratorio;
  @Input() public startInterval: Date;
  @Input() public endInterval: Date;

  palmadaForm: FormGroup;

  // This operator has to be called from the authentication service
  operator;
  availablePalmadasForThisWeek;

  ngOnInit(): void {
    this.availablePalmadasForThisWeek = this.getAvailablePalmadasForThisWeek();
    this.operator = this.getOperator();
    this.palmadaForm = this.formGenerator.createReservationPalmadaForm(
      this.laboratory.nombre,
      this.operator
    );
  }

  constructor(
    public activeModal: NgbActiveModal,
    private dateDisplayService: DateDisplayService,
    private formGenerator: FormGeneratorService) { }

  get palmada() {
    return this.palmadaForm.get('palmada');
  }

  get title() {
    return this.palmadaForm.get('title');
  }

  multipleDateDisplay(start: Date, end: Date): string {
    return this.dateDisplayService.getMultipleDayDisplay(start, end);
  }

  // GETs

  // This get must be from authentication service
  getOperator(): string {
    return 'Eduardo Moya';
  }

  getAvailablePalmadasForThisWeek(): any {
    console.log(
      'Se han buscado palmadas disponibles de ' +
      this.startInterval.toDateString() +
      ' hasta ' +
      this.endInterval.toDateString() +
      ' en el laboratorio ' +
      this.laboratory.nombre);

    const availablePalmadas = [{
      start: new Date('2020-08-12T21:00:00.000-06:00'),
      end: new Date('2020-08-13T06:00:00.000-06:00')
    }, {
      start: new Date('2020-08-13T21:00:00.000-06:00'),
      end: new Date('2020-08-14T06:00:00.000-06:00')
    }
    ];
    return availablePalmadas;
  }

  // POST

  postPalmadaForm(): void {
    const palmadaForm = this.palmadaForm.value;
    const newPalmada = {
      title: palmadaForm.title,
      start: palmadaForm.palmada.start,
      end: palmadaForm.palmada.end,
      operator: this.operator,
      laboratory: this.laboratory.id
    };
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(newPalmada));
  }
}
