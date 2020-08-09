import { Injectable } from '@angular/core';
import esLocale from '@fullcalendar/core/locales/es';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CalendarGeneratorService {

  private weeks = {};
  private week = 17;

  constructor() { }

  public generateCalendar() {
    const calendarOptions = {
      locale: esLocale,
      aspectRatio: 0.618,
      expandRows: true,
      initialView: 'timeGridWeek',
      slotDuration: '01:00:00',
      selectOverlap: false,
      themeSystem: 'bootstrap',
      plugins: [bootstrapPlugin, interactionPlugin],
      progressiveEventRendering: true,
      displayEventEnd: true,
      eventTextColor: '#FFFFFF',
      eventBorderColor: '#FFFFFF',
      eventColor: '#0154A0',
      buttonText: {
        next: '>',
        prev: '<',
      },
      businessHours: [{
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '07:00',
        endTime: '20:00',
      },
      {
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: '07:00',
        endTime: '20:00',
      }
      ],
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'prev,today,next'
      },
      selectable: true,
      allDaySlot: false,
      selectMirror: true,
      displayEventTime: false,
      validRange: {
        start: '2020-04-20',
        end: '2020-08-24'
      },
      unselectCancel: 'app-lab-reservation-normal',
      selectConstraint: 'businessHours',
      selectAllow: function (info) {
        if (info.start < Date.now()) {
          return false;
        }
        return true;
      },
      events: this.createCustomEvents()
    };
    console.log(calendarOptions.events);
    return calendarOptions;
  }

  private createCustomEvents() {
    const events = [];
    let event;
    event = this.createEvent(1, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 7), new Date(2020, 7, 10, 8), true, false);
    events.push(event);
    event = this.createEvent(2, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 8), new Date(2020, 7, 10, 9), true, false);
    events.push(event);
    event = this.createEvent(3, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 9), new Date(2020, 7, 10, 10), true, false);
    events.push(event);
    event = this.createEvent(4, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 11, 14), new Date(2020, 7, 11, 17), true, false);
    events.push(event);
    event = this.createEvent(5, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 11, 17), new Date(2020, 7, 11, 20), true, false);
    events.push(event);
    return events;
  }

  private createAllEvents() {
    let varId = 1;
    let weeks = {};
    let events = [];
    let midWeekPalmada = {};
    const startDate = new Date(2020, 3, 13, 7);
    const endDate = new Date(2020, 3, 13, 8);
    const DISABLED_TITLE = 'Evento finalizado';
    const RESERVE_TITLE = 'Reservar';
    const PALMADA_TITLE = 'Reservar palmada';
    const NORMAL_DAY_RESERVATIONS_AMOUNT = 13;
    const RESERVATION_HOURS = 1;
    const PALMADA_HOURS = 9;
    const WEEKEND_PALMADA_HOURS = 38;
    const WEEK_AMOUNT = 18;
    /* For every week */
    for (let i = 1; i <= WEEK_AMOUNT; i++) {
      /* Monday to Friday */
      for (let j = 0; j < 5; j++) {
        /* 7:00 to 20:00 */
        for (let k = 0; k < NORMAL_DAY_RESERVATIONS_AMOUNT; k++) {
          if (startDate.getTime() < Date.now()) {
            events.push(this.createEvent(varId, DISABLED_TITLE, startDate, endDate, false, false));
          } else {
            events.push(this.createEvent(varId, RESERVE_TITLE, startDate, endDate, true, false));
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
          events.push(this.createEvent(varId, DISABLED_TITLE, startDate, endDate, false, true));
        } else {
          events.push(this.createEvent(varId, PALMADA_TITLE, startDate, endDate, true, true));
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
          events.push(this.createEvent(varId, DISABLED_TITLE, startDate, endDate, false, false));
        } else {
          events.push(this.createEvent(varId, RESERVE_TITLE, startDate, endDate, true, false));
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
        midWeekPalmada = this.createEvent(varId, DISABLED_TITLE, startDate, endDate, false, true);
        events.push(midWeekPalmada);
      } else {
        midWeekPalmada = this.createEvent(varId, PALMADA_TITLE, startDate, endDate, true, true);
        events.push(midWeekPalmada);
      }
      weeks[i] = events;
      events = [midWeekPalmada];
      /* Update */
      startDate.setHours(startDate.getHours() + WEEKEND_PALMADA_HOURS - 1);
      endDate.setHours(endDate.getHours() + RESERVATION_HOURS + 1);
    }
    console.log(weeks);
    return weeks;
  }

  private createEvent(eventId: number, eventTitle: string, eventStart: Date, eventEnd: Date, eventEnabled: boolean, eventPalmada: boolean) {
    let eventBackgroundColor;
    if (eventEnabled) {
      eventBackgroundColor = '#0154A0';
    } else {
      eventBackgroundColor = '#3775B0';
    }
    const event = {
      id: eventId,
      title: eventTitle,
      start: eventStart.toISOString(),
      end: eventEnd.toISOString(),
      enabled: eventEnabled,
      selected: false,
      backgroundColor: eventBackgroundColor,
      palmada: eventPalmada
    };
    return event;
  }

  public getAllEvents() {
    return this.createAllEvents();
  }

  public getEventsOnWeek(week: number) {
    return this.weeks[week];
  }

  public getWeek() {
    return this.week;
  }
}
