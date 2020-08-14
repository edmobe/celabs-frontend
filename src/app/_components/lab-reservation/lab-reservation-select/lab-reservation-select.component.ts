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
    this.titleService.setTitle('Seleccione un laboratorio');
    this.laboratories = this.laboratoryService.getLaboratories();
  }

  ngOnInit(): void {
    //this.laboratories = this.laboratoryService.getLaboratories();
  }

}
