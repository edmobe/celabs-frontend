import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Perfil de usuario');
  }

  ngOnInit(): void {
    this.user = this.getUser();
  }

  // GETs
  getUser() {
    return {
      name: 'Eduardo',
      middleName: 'Moya',
      lastName: 'Bello',
      email: 'edmobe@estudiantec.cr',
      role: 'Administrador'
    };
  }

  // POSTs
  deleteAccount() {
    console.log(this.user);
  }

}
