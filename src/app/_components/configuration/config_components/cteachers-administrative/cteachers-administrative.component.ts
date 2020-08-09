import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-cteachers-administrative',
  templateUrl: './cteachers-administrative.component.html',
  styleUrls: ['./cteachers-administrative.component.css']
})
export class CTeachersAdministrativeComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }

  ngOnInit(): void {
  }

}
