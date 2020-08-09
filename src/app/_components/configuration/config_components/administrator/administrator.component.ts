import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

interface User {
  id: number;
  nombre: string;
  correo: string;
  rol: string;
  permisos: boolean;
}

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  users : User[] = [
    {id: 0, nombre: 'Luis Diego Noguera',correo: 'lnoguera@itcr.ac.cr', rol: 'admininistrador', permisos: false},
    {id: 1, nombre: 'Brayan Muñoz Mora',correo: 'brianm.bra@estudiantec.cr', rol: 'admininistrador', permisos: false}
  ];
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }
  ngOnInit(): void {
    
  }

  checkValue (id: number, event: any) : void {
    var permiso : boolean = event.currentTarget.checked;
    if (permiso) {
      document.getElementById("labelCheck"+id).textContent = "Permitido";
    } else {
      document.getElementById("labelCheck"+id).textContent = "Denegado";
    }
  }

}
