import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { state } from '@angular/animations';

interface Estados {
  estado : string;
}


var buttonDanger: string = "btn btn-danger";
var buttonSuccess: string = "btn btn-success";

@Component({
  selector: 'app-failures-status',
  templateUrl: './failures-status.component.html',
  styleUrls: ['./failures-status.component.css']
})
export class FailuresStatusComponent implements OnInit {

  constructor(private titleService: TitleService, private modalService: NgbModal) {
    this.titleService.setTitle('');
   }

   estados : Estados[] = [
    {estado: "Pendiente"},
    {estado: "Atención"}
  ];

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
      return `with: ${reason}`;
    }
  }

  checkValue (state: string) : void {

    var button = (<HTMLInputElement>document.getElementById("btnS"+state));
    var clase = button.className;
    if (clase == buttonSuccess) {
      document.getElementById("btnS"+state).className = buttonDanger;
      button.value = "Deshabilitado";
    } else {
      document.getElementById("btnS"+state).className = buttonSuccess;
      button.value = "Habilitado";
      
    }
  }

  editState (estado : Estados, content) : void {
    this.open(content);
    (<HTMLInputElement>document.getElementById("nameState")).value = estado.estado;
    (<HTMLInputElement>document.getElementById("modal-basic-title")).textContent ="Editar estado";
    
    
  }

}
