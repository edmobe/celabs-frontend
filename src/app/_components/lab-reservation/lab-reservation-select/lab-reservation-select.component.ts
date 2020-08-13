import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { Laboratorio } from 'src/app/_models/laboratorio';
import { LaboratoryService } from 'src/app//_services/api/laboratory.service';

@Component({
  selector: 'app-lab-reservation-select',
  templateUrl: './lab-reservation-select.component.html',
  styleUrls: ['./lab-reservation-select.component.css']
})
export class LabReservationSelectComponent implements OnInit {

  laboratories: Laboratorio[];

  constructor(private titleService: TitleService, 
    private laboratoryService: LaboratoryService) {
    this.laboratories = laboratoryService.getLaboratories();
    this.titleService.setTitle('Seleccione un laboratorio');
  }

  ngOnInit(): void {
    this.laboratories = this.getLaboratories();
  }

  // GETs
  getLaboratories(): Laboratorio[] {
    return [{
      nombre: 'F2-04',
      id: 4
    }, {
      nombre: 'F2-05',
      id: 5
    }, {
      nombre: 'F2-06',
      id: 6
    }, {
      nombre: 'F2-07',
      id: 7
    }, {
      nombre: 'F2-08',
      id: 8
    }, {
      nombre: 'F2-09',
      id: 9
    }];
  }
}
