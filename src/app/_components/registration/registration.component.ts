import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  roles: string[];

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Registrarse');
  }

  ngOnInit(): void {
    this.roles = ['Admin', 'Profesor', 'Operador'];
  }
}
