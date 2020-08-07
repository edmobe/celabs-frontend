import { Injectable } from '@angular/core';
import esLocale from '@fullcalendar/core/locales/es';
import bootstrapPlugin from '@fullcalendar/bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CalendarGeneratorService {

  private weeks = {};
  private week = 17;

  constructor() { }

  public generateCalendar() {
    this.weeks = this.getAllEvents();
    const calendarOptions = {
      locale: esLocale,
      height: 'auto',
      initialView: 'timeGridWeek',
      themeSystem: 'bootstrap',
      plugins: [bootstrapPlugin],
      progressiveEventRendering: true,
      displayEventEnd: true,
      eventTextColor: '#FFFFFF',
      eventBorderColor: '#FFFFFF',
      buttonText: {
        next: '>',
        prev: '<',
      },
      headerToolbar: {
        start: 'title',
        center: '',
        end: 'prev,today,next'
      },
      selectable: true,
      allDaySlot: false,
      displayEventTime: false,
      validRange: {
        start: '2020-04-20',
        end: '2020-08-15'
      },
      events: this.getEventsOnWeek(this.week)
    };
    return calendarOptions;
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
    let eventTextColor;
    if (eventEnabled) {
      eventBackgroundColor = '#0154A0';
    } else {
      eventBackgroundColor = '#3776B0';
    }
    const event = {
      id: eventId,
      title: eventTitle,
      start: eventStart.toISOString(),
      end: eventEnd.toISOString(),
      enabled: eventEnabled,
      selected: false,
      backgroundColor: eventBackgroundColor,
      textColor: eventTextColor,
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
