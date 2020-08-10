import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

interface Activos {
  codigo : string;
  descripcion : string;
}
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }

  activos : Activos[] = [
    {codigo: "CE1001", descripcion : "Monitor"},
    {codigo: "CE1002", descripcion : "Monitor"}
  ];

  ngOnInit(): void {
  }

  deleteAsset(activo : string) : void {
    console.log(activo);
  }

}
