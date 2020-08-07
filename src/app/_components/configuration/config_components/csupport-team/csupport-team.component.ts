import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-csupport-team',
  templateUrl: './csupport-team.component.html',
  styleUrls: ['./csupport-team.component.css']
})
export class CsupportTeamComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Configuración');
   }

  ngOnInit(): void {
  }

}
