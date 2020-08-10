import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TitleService } from './../../_services/title.service';
import { Chart } from 'chart.js';
import { ChartGeneratorService } from '../../_services/chart-generator.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public occupationChart: Chart;

  constructor(private titleService: TitleService, private chartGeneratorService: ChartGeneratorService) {
    this.titleService.setTitle('Dashboard');
  }

  ngOnInit(): void {
    this.occupationChart = this.chartGeneratorService.getOccupationChart();
  }

}
