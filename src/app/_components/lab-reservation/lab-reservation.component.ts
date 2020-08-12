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

  calendarOptions;
  closeResult;

  ngOnInit(): void { }

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
    this.titleService.setTitle('Reservación de laboratorios');
    this.calendarOptions = this.calendarGeneratorService.generateCalendar();
    Object.assign(this.calendarOptions, {
      //eventClick: this.handleEventClick.bind(this),
      //eventMouseEnter: this.handleEventHover.bind(this),
      //eventMouseLeave: this.handleEventLeave.bind(this),
      //datesSet: this.handleViewChange.bind(this),
      titleFormat: this.getWeek.bind(this),
      select: this.handleDateSelect.bind(this)
    });

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

  /*
  handleEventClick(arg) {
    const event = this.calendarComponent.getApi().getEventById(arg.event.id);
    if (event.extendedProps.enabled) {
      if (event.extendedProps.palmada) {
        this.handlePalmadaSelect();
      } else {
        //this.handleEventSelect();
      }
    } else {
      alert('El evento ya finalizó.');
    }
  }
  */

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
    });
  }

  /*
  handleEventHover(arg) {
    const event = this.calendarComponent.getApi().getEventById(arg.event.id);
    if (event.extendedProps.enabled && !event.extendedProps.selected) {
      event.setProp('backgroundColor', '#01396E');
    }

  }
  handleEventLeave(arg) {
    const event = this.calendarComponent.getApi().getEventById(arg.event.id);
    if (event.extendedProps.enabled && !event.extendedProps.selected) {
      event.setProp('backgroundColor', '#0154A0');
    }
  }
  */

  /*
  handleViewChange(arg) { }
  */

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

  getWeek(arg) {
    const start: Date = arg.start.marker;
    const end: Date = arg.end.marker;
    return 'Semana 17';
  }

}
