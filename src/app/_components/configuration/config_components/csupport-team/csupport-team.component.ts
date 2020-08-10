import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

interface User {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  permisos: boolean;
}


var buttonDanger: string = "btn btn-danger";
var buttonSuccess: string = "btn btn-success";

@Component({
  selector: 'app-csupport-team',
  templateUrl: './csupport-team.component.html',
  styleUrls: ['./csupport-team.component.css']
})
export class CsupportTeamComponent implements OnInit {

  users : User[] = [
    {id: 0, nombre: 'Luis Diego Noguera',correo: 'lnoguera@itcr.ac.cr', rol: 'admininistrador', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',correo: 'brianm.bra@estudiantec.cr', rol: 'admininistrador', permisos: true}
  ];
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }
  ngOnInit(): void {
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
