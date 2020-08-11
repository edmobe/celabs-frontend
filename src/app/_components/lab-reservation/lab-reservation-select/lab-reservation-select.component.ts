import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Laboratorio } from 'src/app/_models/laboratorio';

@Component({
  selector: 'app-lab-reservation-select',
  templateUrl: './lab-reservation-select.component.html',
  styleUrls: ['./lab-reservation-select.component.css']
})
export class LabReservationSelectComponent implements OnInit {

  //laboratories: Laboratorio[];
  laboratories: string[] = ['F2-04', 'F2-05', 'F2-06', 'F2-07'];

  constructor(private titleService: TitleService/*, private laboratoryService: LaboratoryService*/) {
    //this.laboratories = laboratoryService.getLaboratories();
    this.titleService.setTitle('Seleccione un laboratorio');
  }

  ngOnInit(): void {
  }

}
