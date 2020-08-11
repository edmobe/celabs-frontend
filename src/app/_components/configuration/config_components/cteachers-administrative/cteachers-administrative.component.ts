import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
interface User {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  cedula: number;
  permisos: boolean;
}

var buttonDanger: string = "btn btn-danger";
var buttonSuccess: string = "btn btn-success";

@Component({
  selector: 'app-cteachers-administrative',
  templateUrl: './cteachers-administrative.component.html',
  styleUrls: ['./cteachers-administrative.component.css']
})
export class CTeachersAdministrativeComponent implements OnInit {
  users : User[]
  users1 : User[] = [
    {id: 0, nombre: 'Luis Diego Noguera',cedula: 0,correo: 'lnoguera@itcr.ac.cr', rol: 'Docente', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',cedula: 117390879,correo: 'brianm.bra@estudiantec.cr', rol: 'Administrativo', permisos: true},
    {id: 0, nombre: 'Luis Diego Noguera',cedula: 0,correo: 'lnoguera@itcr.ac.cr', rol: 'Docente', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',cedula: 117390879,correo: 'brianm.bra@estudiantec.cr', rol: 'Administrativo', permisos: true},
    {id: 0, nombre: 'Luis Diego Noguera',cedula: 0,correo: 'lnoguera@itcr.ac.cr', rol: 'Docente', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',cedula: 117390879,correo: 'brianm.bra@estudiantec.cr', rol: 'Administrativo', permisos: true},
    {id: 0, nombre: 'Luis Diego Noguera',cedula: 0,correo: 'lnoguera@itcr.ac.cr', rol: 'Docente', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',cedula: 117390879,correo: 'brianm.bra@estudiantec.cr', rol: 'Administrativo', permisos: true}
  ];
  constructor(private titleService: TitleService,private modalService: NgbModal) {
    this.titleService.setTitle('');
   }
  ngOnInit(): void {
  }

  model: NgbDateStruct; 
  left = true;
  closeResult = '';

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
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
      console.log(this.closeResult);
      return `with: ${reason}`;
    }
  }
  

}
