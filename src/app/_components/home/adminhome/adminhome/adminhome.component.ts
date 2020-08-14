import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent implements OnInit {
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('CE Labs XTEC');
  }

  ngOnInit(): void { }
}
