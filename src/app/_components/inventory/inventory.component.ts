import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Reporte de inventario');
  }

  ngOnInit(): void { }

}
