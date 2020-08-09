import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { CalendarGeneratorService } from 'src/app/_services/calendar-generator.service';


import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar, EventApi } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabReservationNormalComponent } from '../lab-reservation-normal/lab-reservation-normal.component';
import { LabReservationPalmadaComponent } from '../lab-reservation-palmada/lab-reservation-palmada.component';
import { ActivatedRoute } from '@angular/router';

import $ from 'jquery';

@Component({
  selector: 'app-lab-reservation',
  templateUrl: './lab-reservation.component.html',
  styleUrls: ['./lab-reservation.component.scss']
})
export class LabReservationComponent implements OnInit {

  laboratory: string;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  selectedEvents = [];
  calendarOptions;
  closeResult = '';

  ngOnInit(): void { }

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private calendarGeneratorService: CalendarGeneratorService) {
    this.route.queryParams.subscribe(params => {
      this.laboratory = params['laboratory'];
      console.log('Laboratorio: ' + this.laboratory);
    });
    const calendar = Calendar.name;
    this.titleService.setTitle('Reservación de laboratorios');
    this.calendarOptions = this.calendarGeneratorService.generateCalendar();
    Object.assign(this.calendarOptions, {
      eventClick: this.handleEventClick.bind(this), // bind is important!
      eventMouseEnter: this.handleEventHover.bind(this),
      eventMouseLeave: this.handleEventLeave.bind(this),
      datesSet: this.handleViewChange.bind(this),
      titleFormat: this.getWeek.bind(this),
      select: this.handleDateSelection.bind(this)
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

  getWeek() {
    return 'Semana 17';
  }

  handleDateSelection(arg) {
    const event = {
      start: arg.startStr,
      end: arg.endStr,
      palmada: false
    };
    let modalRef;
    modalRef = this.modalService.open(LabReservationNormalComponent, { size: 'lg' });
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
    console.log(arg);
  }

  handleEventClick(arg) {
    const event = this.calendarComponent.getApi().getEventById(arg.event.id);
    if (event.extendedProps.enabled) {
      if (event.extendedProps.palmada) {
        if (this.selectedEvents.length !== 0) {
          alert('No puede seleccionar una palmada si tiene reservaciones normales seleccionadas.');
        } else {
          this.handlePalmadaSelect(event);
        }
      } else {
        if (!event.extendedProps.selected) {
          this.selectEvent(event);
        } else {
          this.diselectEvent(event);
        }
      }
    } else {
      alert('El evento ya finalizó.');
    }
  }

  private selectEvent(event: EventApi) {
    event.setExtendedProp('selected', true);
    event.setProp('backgroundColor', '#01396E');
    this.selectedEvents.push(event);
    console.log(this.selectedEvents);
  }

  private diselectEvent(event: EventApi) {
    event.setExtendedProp('selected', false);
    event.setProp('backgroundColor', '#0154A0');
    this.selectedEvents.splice(this.selectedEvents.indexOf(event.id), 1);
    console.log(this.selectedEvents);
  }

  handlePalmadaSelect(event: EventApi) {
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

  handleConfirmClick() {
    const events = this.selectedEvents;
    if (events.length === 0) {
      alert('Debe seleccionar al menos un evento');
    } else {
      let modalRef;
      modalRef = this.modalService.open(LabReservationNormalComponent, { size: 'lg' });
      modalRef.componentInstance.events = events;
      modalRef.componentInstance.laboratory = this.laboratory;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
          if (result === 'Close click') {
            this.handleClearClick();
          }
        }
      });
    }
  }

  handleClearClick() {
    for (const event of this.selectedEvents) {
      event.setExtendedProp('selected', false);
      event.setProp('backgroundColor', '#0154A0');
    }
    this.selectedEvents = [];
  }

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

  handleViewChange(arg) {
    console.log(arg);
  }

  handleRecurrentClick() {
    console.log('Se ha seleccionado el botón de reservar recurrentemente');
  }

}
