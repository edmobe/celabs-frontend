import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { CalendarGeneratorService } from 'src/app/_services/calendar-generator.service';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar, EventApi } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationPalmadaComponent } from './lab-reservation-palmada/lab-reservation-palmada.component';
import { ActivatedRoute, Router } from '@angular/router';

import { LabReservationNormalSelectComponent } from './lab-reservation-normal-select/lab-reservation-normal-select.component';
import { Laboratorio } from 'src/app/_models/laboratorio';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.scss']
})
export class LabReservationComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  laboratory: Laboratorio;
  now = "cargando...";

  calendarOptions;
  closeResult;

  ngOnInit(): void {
    setInterval(() => {
      this.now = this.getTime();
    }, 1000);
  }

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private calendarGeneratorService: CalendarGeneratorService,
    private router: Router) {

    this.route.queryParams.subscribe(params => {
      try {
        this.laboratory = JSON.parse(params.laboratory) as Laboratorio;
      } catch (error) {
        this.router.navigate(['error']);
      }
    });
    const calendar = Calendar.name;
    this.now = Date.now();
    this.titleService.setTitle('Reservación de laboratorios');
    this.calendarOptions = this.calendarGeneratorService.generateCalendar();
    Object.assign(this.calendarOptions, {
      select: this.handleDateSelect.bind(this),

      // Referencias del calendario a los getters
      titleFormat: this.getWeek.bind(this),
      validRange: this.getSemesterInterval(),
      businessHours: this.getLabAvailableHours(this.laboratory),
      selectAllow: function (info) {
        if (info.start < Date.now()) {
          return false;
        }
        return true;
      },
      events: this.getEvents()

    });

  }

  updateTime() {
    this.now = this.updateTime();
  }

  handleDateSelect(arg) {
    const event = {
      start: arg.startStr,
      end: arg.endStr,
      palmada: false
    };
    this.openEventModal(event);
  }

  handlePalmadaSelect() {
    let modalRef;
    const calendarApi = this.calendarComponent.getApi();
    const startInterval = calendarApi.view.currentStart;
    const endInterval = calendarApi.view.currentEnd;
    modalRef = this.modalService.open(LabReservationPalmadaComponent, { size: 'lg' });
    modalRef.componentInstance.laboratory = this.laboratory;
    modalRef.componentInstance.startInterval = startInterval;
    modalRef.componentInstance.endInterval = endInterval;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    }).catch(err => {
      this.calendarComponent.getApi().unselect();
    });
  }

  handleEventSelect(event: EventApi) {
    let modalRef;
    modalRef = this.modalService.open(LabReservationPalmadaComponent, { size: 'lg' });
    modalRef.componentInstance.event = event;
    modalRef.componentInstance.laboratory = this.laboratory;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    }).catch(err => {
      this.calendarComponent.getApi().unselect();
    });
  }

  private openEventModal(event) {
    let modalRef;
    modalRef = this.modalService.open(LabReservationNormalSelectComponent, { size: 'lg' });
    modalRef.componentInstance.event = event;
    modalRef.componentInstance.laboratory = this.laboratory;
    modalRef.result.then((result) => {
      this.calendarComponent.getApi().unselect();
      if (result) {
        this.calendarComponent.getApi().unselect();
        if (result === 'Close click') { }
      }
    }).catch(err => {
      this.calendarComponent.getApi().unselect();
    });
  }

  // Getters
  // Dadas dos fechas, retorna un string con el nombre de la semana actual
  getWeek(arg) {
    const start: Date = arg.start.marker;
    const end: Date = arg.end.marker;
    return 'Semana 17';
  }

  getTime() {
    const d = new Date();
    const s = d.getSeconds();
    const m = d.getMinutes();
    const h = d.getHours();
    return h + ':' + m + ':' + s;
  }

  // Indica el inicio y final del semestre (puede ser en formato Date)
  getSemesterInterval() {
    const semester = {
      start: '2020-04-20',
      end: '2020-08-24'
    };
    return semester;
  }

  // Indica la disponibilidad del labotatorio de esta reservación
  getLabAvailableHours(laboratory: Laboratorio) {
    const availability = [{
      daysOfWeek: [1],
      startTime: '08:00',
      endTime: '21:00',
    },
    {
      daysOfWeek: [2, 3, 4, 5],
      startTime: '07:00',
      endTime: '20:00',
    }];
    return availability;
  }

  // Returns server time
  getServerTime() {
    // return Date.now();
    return true;
  }

  // This function is only used for testing purposes (it should return a string with the URL)
  // See more at: https://fullcalendar.io/docs/events-json-feed
  private getEvents() {
    const events = [];
    let event;
    event = this.getEventsAux(1, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 7), new Date(2020, 7, 10, 8), true);
    events.push(event);
    event = this.getEventsAux(2, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 8), new Date(2020, 7, 10, 9), true);
    events.push(event);
    event = this.getEventsAux(3, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 10, 9), new Date(2020, 7, 10, 10), true);
    events.push(event);
    event = this.getEventsAux(4, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 11, 14), new Date(2020, 7, 11, 17), true);
    events.push(event);
    event = this.getEventsAux(5, 'Bases de Datos - Eduardo Moya', new Date(2020, 7, 11, 17), new Date(2020, 7, 11, 20), true);
    events.push(event);
    return events;
  }

  // This function is only used for testing purposes
  private getEventsAux(eventId: number, eventTitle: string, eventStart: Date, eventEnd: Date, eventEnabled: boolean) {
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
      backgroundColor: eventBackgroundColor
    };
    return event;
  }

}
