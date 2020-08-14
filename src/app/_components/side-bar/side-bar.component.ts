import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public Clip = faCheckCircle;
  
  constructor() { }
  
  ngOnInit(): void { }

}
