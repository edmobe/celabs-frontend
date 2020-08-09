import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-coperator',
  templateUrl: './coperator.component.html',
  styleUrls: ['./coperator.component.css']
})
export class CoperatorComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }

  ngOnInit(): void {
  }

}
