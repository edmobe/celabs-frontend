import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Reporte de horas');
  }

  ngOnInit(): void { }

}
