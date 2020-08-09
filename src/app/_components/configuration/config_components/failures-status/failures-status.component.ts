import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-failures-status',
  templateUrl: './failures-status.component.html',
  styleUrls: ['./failures-status.component.css']
})
export class FailuresStatusComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }

  ngOnInit(): void {
  }

}
