import { Component, OnInit } from '@angular/core';
import { TitleService } from './../../_services/title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: String;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

}
