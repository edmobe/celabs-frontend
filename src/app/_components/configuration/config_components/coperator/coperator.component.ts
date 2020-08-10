import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface User {
  id: number;
  nombre: string;
  correo: string;
  carnet: number;
}

var buttonDanger: string = "btn btn-danger";
var buttonSuccess: string = "btn btn-success";

@Component({
  selector: 'app-coperator',
  templateUrl: './coperator.component.html',
  styleUrls: ['./coperator.component.css']
})
export class CoperatorComponent implements OnInit {
  model: NgbDateStruct;
  estados: string[] = ["Pendiente de Atención", "Completado", "En proceso", "Reportado"];
  laboratorios: string[] = ["F2-07", "F2-09", "F2-10"];
  left = true;
  time = { hour: 13, minute: 30 };
  closeResult = '';
  meridian = true;
  users : User[] = [
    {id: 0, nombre: 'Luis Diego Noguera',correo: 'lnoguera@itcr.ac.cr', carnet: 0},
    {id: 1, nombre: 'Brayan Muñoz Mora',correo: 'brianm.bra@estudiantec.cr', carnet: 2017042094}
  ];
  constructor(private titleService: TitleService, private modalService: NgbModal) {
    this.titleService.setTitle('');
   }
  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'md', centered: true }).result.then((result) => {
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

  checkValue (id: number) : void {
    var button = (<HTMLInputElement>document.getElementById("btn"+id));
    var clase = button.className;
    if (clase == buttonSuccess) {
      document.getElementById("btn"+id).className = buttonDanger;
      button.value = "Denegado";
    } else {
      document.getElementById("btn"+id).className = buttonSuccess;
      button.value = "Permitido";
      
    }
  }

}
