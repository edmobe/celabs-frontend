import { Component, OnInit, OnChanges } from '@angular/core';
import { TitleService } from './../../_services/title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: String;

  constructor(private titleService: TitleService) {
    this.titleService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

  ngOnInit(): void {
  }

  
    
 
  
}
