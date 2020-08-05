import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';
import { PreloadAllModules } from '@angular/router';
import { LabReservationPalmadaComponent } from '../lab-reservation-palmada/lab-reservation-palmada.component';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.scss']
})
export class LabReservationComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  selectedEvents = [];
  weeks = {};
  calendarOptions;
  week = 17;
  closeResult = '';

  ngOnInit(): void { }

  constructor(private titleService: TitleService, private modalService: NgbModal) {
    const calendar = Calendar.name;
    this.titleService.setTitle('Reservación de laboratorios');
    this.weeks = this.getAllEvents();
    this.calendarOptions = {
      locale: esLocale,
      height: 'auto',
      initialView: 'timeGridWeek',
      themeSystem: 'bootstrap',
      plugins: [bootstrapPlugin],
      progressiveEventRendering: true,
      displayEventEnd: true,
      eventTextColor: '#FFFFFF',
      eventBorderColor: '#FFFFFF',
      eventClick: this.handleEventClick.bind(this), // bind is important!
      eventMouseEnter: this.handleEventHover.bind(this),
      eventMouseLeave: this.handleEventLeave.bind(this),
      datesSet: this.handleViewChange.bind(this),
      customButtons: {
        recurrente: {
          text: 'Recurrente',
          click: this.recurrente
        }
      },
      buttonText: {
        next: '>',
        prev: '<',
      },
      headerToolbar: {
        start: 'recurrente',
        center: 'title',
        end: 'prev today next'
      },
      selectable: true,
      nowIndicator: true,
      allDaySlot: false,
      displayEventTime: false,
      validRange: {
        start: '2020-04-20',
        end: '2020-08-15'
      },
      events: this.getEventsOnWeek(this.week)
    };
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
      eventBackgroundColor = '#3F85D4';
    }
    const event = {
      id: eventId,
      title: eventTitle,
      start: eventStart.toISOString(),
      end: eventEnd.toISOString(),
      enabled: eventEnabled,
      backgroundColor: eventBackgroundColor,
      textColor: eventTextColor,
      palmada: eventPalmada
    };
    return event;
  }

  private getAllEvents() {
    return this.createAllEvents();
  }

  private getEventsOnWeek(week: number) {
    return this.weeks[week];
  }

  /*
  openModal(content, eventId) {
    console.log(eventId);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  */

  handleEventClick(arg) {
    let modalRef;
    if (!arg.event.extendedProps.palmada) {
      modalRef = this.modalService.open(LabReservationNormalComponent);
    } else {
      modalRef = this.modalService.open(LabReservationPalmadaComponent);
    }
    modalRef.componentInstance.event = arg.event;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
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

  handleViewChange(arg) {
    console.log(arg);
  }

  updateEvents() {
    const calendarApi = this.calendarComponent.getApi();
    this.week--;
    this.calendarOptions.events = this.getEventsOnWeek(this.week);
    calendarApi.prev();
    calendarApi.render();

  }

  today() {
    this.week = 17;
    this.calendarOptions.events = this.getEventsOnWeek(this.week);
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.today();
    calendarApi.render();
  }

  next() {
    this.week++;
    this.calendarOptions.events = this.getEventsOnWeek(this.week);
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
    calendarApi.render();

  }

  recurrente() {
    console.log('Se ha seleccionado el botón de reservar recurrentemente');
  }

}
