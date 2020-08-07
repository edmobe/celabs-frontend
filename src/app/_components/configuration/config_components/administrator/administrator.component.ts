import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Configuración');
   }

  ngOnInit(): void {
    document.getElementById("admin").style.backgroundColor = "#3476B3";
  }

}
