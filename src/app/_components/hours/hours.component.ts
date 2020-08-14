import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HoursModalComponent } from './hours-modal/hours-modal.component';

interface Hour {
  id: number;
  fecha: string;
  horasRegistradas: string;
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
  hours: Hour[];
  admin: boolean;

  editHoursModal: NgbModalRef;

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal
  ) {
    this.titleService.setTitle('Reporte de horas');
  }

  ngOnInit(): void {
    this.hours = this.getHours();
    this.admin = this.getAdmin();
  }

  public open(title: string, hour?: any): void {
    const modalRef = this.modalService.open(HoursModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.hour = hour;
    modalRef.result.then(() => { }).catch(() => { });
  }

  edit(hour): void {
    console.log(hour);
  }

  // GETs
  // Retorna true si ingresó como admin
  getAdmin() {
    return true;
  }

  // Cuidado con el formato de las horas -> HH:MM
  getHours() {
    return [
      {
        id: 1,
        fecha: '2020-01-03',
        horasRegistradas: '2',
        horaInicio: '07:30',
        horaFinal: '09:20',
        reportado: '09:30',
        estado: 'Pendiente',
      }, {
        id: 2,
        fecha: '2020-03-03',
        horasRegistradas: '4',
        horaInicio: '07:30',
        horaFinal: '11:20',
        reportado: '11:30',
        estado: 'Aprobado',
      }, {
        id: 3,
        fecha: '2020-03-03',
        horasRegistradas: '4',
        horaInicio: '07:30',
        horaFinal: '11:20',
        reportado: '11:30',
        estado: 'Aprobado',
      }, {
        id: 4,
        fecha: '2020-03-03',
        horasRegistradas: '4',
        horaInicio: '07:30',
        horaFinal: '11:20',
        reportado: '11:30',
        estado: 'Pendiente',
      }
    ];
  }

  // POSTs
  approve(hour): void {
    console.log(hour);
  }
}
