import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-failures',
  templateUrl: './failures.component.html',
  styleUrls: ['./failures.component.scss']
})
export class FailuresComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Reporte de averías');
  }

  ngOnInit(): void { }

}
