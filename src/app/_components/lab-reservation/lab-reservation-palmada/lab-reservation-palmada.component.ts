import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventApi } from '@fullcalendar/core';

@Component({
  selector: 'app-lab-reservation-palmada',
  templateUrl: './lab-reservation-palmada.component.html',
  styleUrls: ['./lab-reservation-palmada.component.css']
})
export class LabReservationPalmadaComponent implements OnInit {

  @Input() public laboratory: EventApi;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  closeResult = '';

  ngOnInit(): void {
    console.log('Se ha seleccionado reservar palmada para el laboratorio ' + this.laboratory);
  }

  constructor(public activeModal: NgbActiveModal) { }

}
