import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormValidatorService } from 'src/app/_services/forms/form-validator.service';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

interface Hora {
  fecha: string;
  horaRegistrada: string;
  horaInicio: string;
  horaFinal: string;
  reportado: string;
  estado: string;
}

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'],
})
export class HoursComponent implements OnInit {

  states: string[];
  hours: Hora[];

  hoursForm: FormGroup;
  hoursModal: NgbModalRef;

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal,
    private formGenerator: FormGeneratorService,
    private formValidator: FormValidatorService,
    private formToJson: FormToJsonService
  ) {
    this.titleService.setTitle('Reporte de horas');
  }

  ngOnInit(): void {
    this.states = this.getStates();
    this.hoursForm = this.formGenerator.createHoursForm();
  }

  validTimes(start: string, end: string): boolean {
    return this.formValidator.checkStartEndTimeValid(start, end);
  }

  open(content): void {
    this.hoursModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    this.hoursModal.result.then(() => {
      this.hoursForm.reset();
    }).catch(() => {
      this.hoursForm.reset();
    });
  }

  get date() {
    return this.hoursForm.get('date');
  }

  get start() {
    return this.hoursForm.get('start');
  }

  get end() {
    return this.hoursForm.get('end');
  }

  getStates() {
    return ['Aprobado', 'Pendiente'];
  }

  successfulPost(json: any): void {
    this.hoursModal.close();
    this.hoursForm.reset();
    alert('Json generado:\n' + JSON.stringify(json));
  }

  // POST
  post() {
    const json = this.formToJson.createHoursJson(
      this.date.value,
      this.start.value,
      this.end.value
    );
    this.successfulPost(json);
  }
}
