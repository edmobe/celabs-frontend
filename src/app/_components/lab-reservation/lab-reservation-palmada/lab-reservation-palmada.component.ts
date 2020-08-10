import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventApi } from '@fullcalendar/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DateDisplayService } from '../../../_services/date-display.service';

@Component({
  selector: 'app-lab-reservation-palmada',
  templateUrl: './lab-reservation-palmada.component.html',
  styleUrls: ['./lab-reservation-palmada.component.css']
})
export class LabReservationPalmadaComponent implements OnInit {

  @Input() public laboratory: EventApi;
  @Input() public startInterval: Date;
  @Input() public endInterval: Date;

  palmadaForm: FormGroup;

  // This operator has to be called from the authentication service
  operator = 'Eduardo Moya';

  public availablePalmadasForThisWeek = [];

  ngOnInit(): void {
    this.getAvailablePalmadasForThisWeek();
    console.log(
      'Se han buscado palmadas disponibles de ' +
      this.startInterval.toDateString() +
      ' hasta ' +
      this.endInterval.toDateString() +
      ' en el laboratorio ' +
      this.laboratory);
    this.palmadaForm = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      palmada: ['', [
        Validators.required
      ]],
      laboratory: [this.laboratory, [
        Validators.required
      ]],
      operator: [this.operator, [
        Validators.required
      ]]
    });
  }

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dateDisplayService: DateDisplayService
  ) { }

  getAvailablePalmadasForThisWeek(): void {
    this.availablePalmadasForThisWeek = [{
      start: new Date('2020-08-12T21:00:00.000-06:00'),
      end: new Date('2020-08-13T06:00:00.000-06:00')
    },
    {
      start: new Date('2020-08-13T21:00:00.000-06:00'),
      end: new Date('2020-08-14T06:00:00.000-06:00')
    }
    ];
  }

  getMultipleDateDisplay(start: Date, end: Date): string {
    return this.dateDisplayService.getMultipleDayDisplay(start, end);
  }

  postPalmadaForm(): void {
    const palmadaForm = this.palmadaForm.value;
    const newPalmada = {
      title: palmadaForm.title,
      start: palmadaForm.palmada.start,
      end: palmadaForm.palmada.end,
      operator: this.operator,
      laboratory: this.laboratory
    };
    this.activeModal.close('Close click');
    alert('Json generado:\n' + JSON.stringify(newPalmada));
  }

  get palmada() {
    return this.palmadaForm.get('palmada');
  }

  get title() {
    return this.palmadaForm.get('title');
  }

}
