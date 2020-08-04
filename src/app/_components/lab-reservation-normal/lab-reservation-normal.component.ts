import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lab-reservation-normal',
  templateUrl: './lab-reservation-normal.component.html',
  styleUrls: ['./lab-reservation-normal.component.css']
})
export class LabReservationNormalComponent implements OnInit {

  @Input() public event;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  closeResult = '';

  ngOnInit(): void {
    console.log('Se ha seleccionado el siguiente evento:');
    console.log(this.event);
  }

  constructor(public activeModal: NgbActiveModal) { }
}
