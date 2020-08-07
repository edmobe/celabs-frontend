import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
     this.openNav();
     
  }

  
  openNav (): void {
    
    document.getElementById("rou").style.width  = "250px";
  }
  

}
