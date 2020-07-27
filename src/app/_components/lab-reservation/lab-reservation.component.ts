import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { Calendar } from '@fullcalendar/core';

import esLocale from '@fullcalendar/core/locales/es';
import bootstrapPlugin from '@fullcalendar/bootstrap';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.scss']
})
export class LabReservationComponent implements OnInit {
  selectedEvents = [];

  calendarOptions = {
    locale: esLocale,
    initialView: 'timeGridWeek',
    eventBackgroundColor: '#0154A0',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    selectable: true,
    nowIndicator: true,
    allDaySlot: false,
    themeSystem: 'bootstrap',
    plugins: [bootstrapPlugin],
    buttonText: {
      next: '>',
      prev: '<'
    },
    validRange: {
      start: '2020-07-13',
      end: '2020-08-15'
    },
    events: [
      {
        id: '1',
        title: 'Tutoría - Eduardo Moya',
        start: '2020-07-27T09:30:00-06:00',
        end: '2020-07-27T11:20:00-06:00'
      },
      {
        id: '2',
        title: 'Bases de Datos - Prof. López',
        start: '2020-07-28T07:30:00-06:00',
        end: '2020-07-28T09:20:00-06:00',
      }
    ]
  };

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Reservación de laboratorios');
    const calendar = Calendar.name;
  }

  handleEventClick(arg) {
    console.log('Event ' + arg.event.id + ' clicked');
  }

  reservar() {
    console.log('Se ha seleccionado el botón de reservar');
  }

  ngOnInit(): void { }

}
