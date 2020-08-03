import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

import esLocale from '@fullcalendar/core/locales/es';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.scss']
})
export class LabReservationComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  selectedEvents = [];
  events = [];
  calendarOptions;
  week = 17;

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Reservación de laboratorios');
    this.events = this.getAllEvents();
    this.calendarOptions = {
      locale: esLocale,
      height: 'auto',
      initialView: 'timeGridWeek',
      progressiveEventRendering: true,
      headerToolbar: false,
      displayEventEnd: true,
      eventTextColor: '#FFFFFF',
      eventBorderColor: '#FFFFFF',
      eventClick: this.handleEventClick.bind(this), // bind is important!
      eventMouseEnter: this.handleEventHover.bind(this),
      eventMouseLeave: this.handleEventLeave.bind(this),
      selectable: true,
      nowIndicator: true,
      allDaySlot: false,
      displayEventTime: false,
      validRange: {
        start: '2020-04-20',
        end: '2020-08-15'
      },
      events: this.events
    };
    console.log(this.events);
  }

  handleEventClick(arg) {
    console.log('Event ' + arg.event.id + ' clicked');
    console.log(arg.event);
  }

  handleEventHover(arg) {
    if (arg.event.extendedProps.enabled) {
      arg.el.style.backgroundColor = '#01396E';
    }

  }

  handleEventLeave(arg) {
    if (arg.event.extendedProps.enabled) {
      arg.el.style.backgroundColor = '#0154A0';
    }
  }

  private getAllEvents() {
    let varId = 1;
    const events = [];
    const startDate = new Date(2020, 3, 20, 7);
    const endDate = new Date(2020, 3, 20, 8);
    const DISABLED_TITLE = 'Evento finalizado';
    const RESERVE_TITLE = 'Reservar';
    const PALMADA_TITLE = 'Reservar palmada';
    const NORMAL_DAY_RESERVATIONS_AMOUNT = 13;
    const RESERVATION_HOURS = 1;
    const PALMADA_HOURS = 9;
    const WEEKEND_PALMADA_HOURS = 38;
    const WEEK_AMOUNT = 16;
    /* For every week */
    for (let i = 0; i < WEEK_AMOUNT; i++) {
      /* Monday to Friday */
      for (let j = 0; j < 5; j++) {
        /* 7:00 to 20:00 */
        for (let k = 0; k < NORMAL_DAY_RESERVATIONS_AMOUNT; k++) {
          if (startDate.getTime() < Date.now()) {
            events.push(this.getEvent(varId, DISABLED_TITLE, startDate, endDate, false));
          } else {
            events.push(this.getEvent(varId, RESERVE_TITLE, startDate, endDate, true));
          }
          /* Update */
          varId++;
          startDate.setHours(startDate.getHours() + RESERVATION_HOURS);
          endDate.setHours(endDate.getHours() + RESERVATION_HOURS);
        }
        /* Palmada */
        startDate.setMinutes(startDate.getMinutes() + 30);
        endDate.setHours(endDate.getHours() + PALMADA_HOURS);
        if (startDate.getTime() < Date.now()) {
          events.push(this.getEvent(varId, DISABLED_TITLE, startDate, endDate, false));
        } else {
          events.push(this.getEvent(varId, PALMADA_TITLE, startDate, endDate, true));
        }
        /* Update */
        startDate.setHours(startDate.getHours() + PALMADA_HOURS + 1, startDate.getMinutes() + 30);
        endDate.setHours(endDate.getHours() + 2);
        varId++;
      }

      /* Saturday and Sunday */
      /* 7:00 to 15:00 */
      for (let j = 0; j < 8; j++) {
        if (startDate.getTime() < Date.now()) {
          events.push(this.getEvent(varId, DISABLED_TITLE, startDate, endDate, false));
        } else {
          events.push(this.getEvent(varId, RESERVE_TITLE, startDate, endDate, true));
        }
        varId++;
        /* Update */
        startDate.setHours(startDate.getHours() + RESERVATION_HOURS);
        endDate.setHours(endDate.getHours() + RESERVATION_HOURS);
      }
      /* Palmada */
      startDate.setHours(startDate.getHours() + 3);
      endDate.setHours(endDate.getHours() + WEEKEND_PALMADA_HOURS);
      if (startDate.getTime() < Date.now()) {
        events.push(this.getEvent(varId, DISABLED_TITLE, startDate, endDate, false));
      } else {
        events.push(this.getEvent(varId, PALMADA_TITLE, startDate, endDate, true));
      }
      /* Update */
      startDate.setHours(startDate.getHours() + WEEKEND_PALMADA_HOURS - 1);
      endDate.setHours(endDate.getHours() + RESERVATION_HOURS + 1);
    }

    return events;
  }

  private getEvent(eventId: number, eventTitle: string, eventStart: Date, eventEnd: Date, eventEnabled: boolean) {
    let eventBackgroundColor;
    let eventTextColor;
    if (eventEnabled) {
      eventBackgroundColor = '#0154A0';
    } else {
      eventBackgroundColor = '#3F85D4';
    }
    const event = {
      id: eventId,
      title: eventTitle,
      start: eventStart.toISOString(),
      end: eventEnd.toISOString(),
      enabled: eventEnabled,
      backgroundColor: eventBackgroundColor,
      textColor: eventTextColor
    };
    return event;
  }

  private prev() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.prev();
    this.week--;
  }

  private today() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.today();
    this.week = 17;
  }

  private next() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
    this.week++;
  }

  private reservar() {
    console.log('Se ha seleccionado el botón de reservar recurrentemente');
  }

  ngOnInit(): void { }

}
