import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TitleService } from './../../_services/title.service';
import { Chart } from 'chart.js';
import { ChartGeneratorService } from '../../_services/chart-generator.service';
import { faAngry, faFrown, faSmile, faLaugh } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public occupation: number;
  public satisfaction: number;
  public reservations = [{
    semana: 1,
    reservaciones: 4,
    palmadas: 0
  },
  {
    semana: 2,
    reservaciones: 7,
    palmadas: 1
  },
  {
    semana: 3,
    reservaciones: 2,
    palmadas: 0
  },
  {
    semana: 4,
    reservaciones: 10,
    palmadas: 2
  },
  {
    semana: 5,
    reservaciones: 3,
    palmadas: 2
  },
  {
    semana: 6,
    reservaciones: 2,
    palmadas: 3
  },
  {
    semana: 7,
    reservaciones: 6,
    palmadas: 1
  }];

  public occupationChart: Chart;
  public reservationsChart: Chart;

  // Icons
  public veryBad = faAngry;
  public bad = faFrown;
  public good = faSmile;
  public veryGood = faLaugh;

  constructor(private titleService: TitleService, private chartGeneratorService: ChartGeneratorService) {
    this.titleService.setTitle('Dashboard');
  }

  ngOnInit(): void {
    this.occupation = 30;
    this.satisfaction = 80;
    this.occupationChart = this.chartGeneratorService.getOccupationChart(this.occupation);
    this.reservationsChart = this.chartGeneratorService.getReservationsChart('reservations', this.reservations);
  }

}
