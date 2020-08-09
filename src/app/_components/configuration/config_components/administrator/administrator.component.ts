import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

interface User {
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
    {nombre: 'Luis Diego Noguera',correo: 'lnoguera@itcr.ac.cr', rol: 'admininistrador', permisos: false}
  ];
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }
  ngOnInit(): void {
    
  }

}
