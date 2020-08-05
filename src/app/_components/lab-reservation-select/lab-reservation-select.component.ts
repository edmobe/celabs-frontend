import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lab-reservation-select',
  templateUrl: './lab-reservation-select.component.html',
  styleUrls: ['./lab-reservation-select.component.css']
})
export class LabReservationSelectComponent implements OnInit {

  laboratories: string[] = ['F2-07', 'F2-08', 'F2-09', 'F2-10'];

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Seleccione un laboratorio');
  }

  ngOnInit(): void {
  }

}
