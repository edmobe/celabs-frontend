import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lab-reservation-palmada',
  templateUrl: './lab-reservation-palmada.component.html',
  styleUrls: ['./lab-reservation-palmada.component.css']
})
export class LabReservationPalmadaComponent implements OnInit {

  @Input() public event;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  closeResult = '';

  ngOnInit(): void {
    console.log('Se ha seleccionado el siguiente evento:');
    console.log(this.event);
  }

  constructor(public activeModal: NgbActiveModal) { }

}
