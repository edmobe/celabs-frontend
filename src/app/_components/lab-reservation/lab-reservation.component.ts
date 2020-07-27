import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.css']
})
export class LabReservationComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek'
  };

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Reservación de laboratorios');
  }

}
