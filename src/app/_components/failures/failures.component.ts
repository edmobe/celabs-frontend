import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

interface Averia {
  fecha: string;
  hora: string;
  descripcion: string;
  estado: string;
  responsable: string;
  laboratorio: string;
}

@Component({
  selector: 'app-failures',
  templateUrl: './failures.component.html',
  styleUrls: ['./failures.component.scss']
})
export class FailuresComponent implements OnInit {

  model: NgbDateStruct;
  estados: string[] = ["Pendiente de Atención", "Completado", "En proceso", "Reportado"];
  laboratorios: string[] = ["F2-07", "F2-09", "F2-10"];
  assets: string[] = ["CE1001", "CE1002", "CE1003"];
  left = true;
  averias: Averia[] = [];
  time = { hour: 13, minute: 30 };
  closeResult = '';
  meridian = true;

  constructor(private titleService: TitleService, private modalService: NgbModal,private calendar: NgbCalendar) {
    this.titleService.setTitle('Reporte de averías');
  }

  ngOnInit(): void {
   }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
}
