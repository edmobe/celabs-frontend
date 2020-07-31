import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(
    private titleService: TitleService,
    private modalService: NgbModal
  ) {
    this.titleService.setTitle('Reporte de horas');
  }

  ngOnInit(): void {}
  estados: string[] = ['Aprobado', 'Pendiente'];
  left = true;
  horas: Hora[] = [];
  time = { hour: 13, minute: 30 };
  closeResult = '';
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  model: NgbDateStruct;
}
